use actix_cors::Cors;
use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use mongodb::{bson::doc, options::ClientOptions, Client};
// MongoDB client instance

mod api;
mod database;
mod models;
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
    let client = create_client().await;
    let db = client.database("foodic");
    // Create the application state with the MongoDB database
    let app_state = web::Data::new(AppState { db });
    println!("Pinged your deployment. You successfully connected to MongoDB!");
    // Ok(());
    HttpServer::new(move || {
        let cors = Cors::default()
            .allowed_origin(vec![
                "http://localhost:3000",
                "http://127.0.0.1:3000",
                "http://localhost:3000",
                "http://0.0.0.0:3000",
            ])
            .allowed_origin_fn(|origin, _req_head| origin.as_bytes().ends_with(b".rust-lang.org"))
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