use actix_cors::Cors;
use actix_web::{get, http, post, web, App, HttpResponse, HttpServer, Responder};
use dotenv::dotenv;
use mongodb::bson::doc;
use std::env;

// MongoDB client instance

mod api;
mod database;
mod models;
use api::menu::{add_dish, get_categories, get_dish, get_dishes};
use api::restaurant::{create_restaurant, update_restaurant};
use api::users::{login, signup};

use database::connection::{create_client, AppState};

use serde::{Deserialize, Serialize};

// Define a type that models our data.
#[derive(Clone, Debug, Deserialize, Serialize)]
struct Item {
    id: u32,
}
#[get("/")]
async fn hello() -> impl Responder {
    HttpResponse::Ok().body("hello world")
}

#[post("/echo")]
async fn echo(req_body: String) -> impl Responder {
    HttpResponse::Ok().body(req_body)
}

async fn manual_hello() -> impl Responder {
    HttpResponse::Ok().body("Hey there!")
}

#[actix_web::main]
async fn main() -> std::io::Result<()> {
    dotenv().ok();

    let database_url = env::var("DATABASE_URL").expect("You've not set the DATABASE_URL");
    let database_name = env::var("DATABASE_NAME").expect("You've not set the DATABASE_NAME");

    let client = create_client(database_url).await;
    let db = client.database(&database_name);
    let app_state = web::Data::new(AppState { db });
    println!("Pinged your deployment. You successfully connected to MongoDB!");

    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin("http://localhost:19000")
            .allowed_methods(vec!["GET", "POST"])
            .allowed_headers(vec![http::header::AUTHORIZATION, http::header::ACCEPT])
            .allowed_header(http::header::CONTENT_TYPE)
            .max_age(3600);
        App::new()
            .wrap(cors)
            .app_data(app_state.clone())
            .service(hello)
            .service(echo)
            .service(web::resource("/login").route(web::post().to(login)))
            .service(web::resource("/signup").route(web::post().to(signup)))
            .service(web::resource("/restaurant/create").route(web::post().to(create_restaurant)))
            .service(web::resource("/restaurant/update").route(web::post().to(update_restaurant)))
            .service(web::resource("/dishes/category").route(web::get().to(get_categories)))
            .service(web::resource("/dishes/{category_type}").route(web::get().to(get_dishes)))
            .service(web::resource("/dishes/create").route(web::post().to(add_dish)))
            .service(web::resource("/dishes/edit/:id").route(web::post().to(update_restaurant)))
            .service(
                web::resource("/restaurant/delete/:id").route(web::delete().to(update_restaurant)),
            )
            .service(web::resource("/dish/{id}").route(web::get().to(get_dish)))
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("0.0.0.0", 3005))?
    .run()
    .await
}

// use actix_web::{web, App, HttpResponse, HttpServer, Responder};
// use mongodb::bson::{doc, Document};
// use mongodb::{options::ClientOptions, Client};

// // MongoDB client instance
// struct AppState {
//     db: mongodb::Database,
// }

// // Handler for the login endpoint
// async fn login(data: web::Json<LoginRequest>, state: web::Data<AppState>) -> HttpResponse {
//     // Access the MongoDB client from the application state
//     let collection = state.db.collection::<Document>("users");

//     // Query the database to check if the provided email and password are valid
//     let query = doc! {
//         "email": &data.email,
//         "password": &data.password,
//     };
//     if let Ok(Some(_)) = collection.find_one(query, None).await {
//         // Successful authentication
//         HttpResponse::Ok().body("Login successful!")
//     } else {
//         // Failed authentication
//         HttpResponse::Unauthorized().body("Invalid credentials")
//     }
// }

// // Login request struct
// #[derive(serde::Deserialize)]
// struct LoginRequest {
//     email: String,
//     password: String,
// }

// #[actix_web::main]
// async fn main() -> std::io::Result<()> {
//     // Connect to MongoDB and create the client
//     let client_options = ClientOptions::parse("mongodb://localhost:27017")
//         .await
//         .unwrap();
//     let client = Client::with_options(client_options).unwrap();
//     let db = client.database("mydatabase");

//     // Create the application state with the MongoDB database
//     let app_state = web::Data::new(AppState { db });

//     HttpServer::new(move || {
//         App::new()
//             .app_data(app_state.clone()) // Share the application state with all routes
//             .service(web::resource("/login").route(web::post().to(login)))
//     })
//     .bind("127.0.0.1:8080")? // Replace with your desired IP address and port
//     .run()
//     .await
// }
