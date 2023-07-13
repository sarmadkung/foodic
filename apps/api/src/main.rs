use actix_web::{get, post, web, App, HttpResponse, HttpServer, Responder};
use futures::stream::TryStreamExt;
use mongodb::{bson::doc, options::ClientOptions, Client};
mod api;
mod database;
mod models;
use api::users::get_users;
use database::connection::create_client;
use models::user::User;

use serde::{Deserialize, Serialize};

// Define a type that models our data.
#[derive(Clone, Debug, Deserialize, Serialize)]
struct Item {
    id: u32,
}
#[get("/")]
async fn hello() -> impl Responder {
    get_users();
    let client = create_client().await;

    // Parameterize our collection with the model.
    let col = client.database("foodic").collection::<User>("users");

    let filter = doc! {"first_name":"Muhammad"};
    let mut users = col.find(filter, None).await.unwrap();
    // for i in 0..5 {
    //     // Perform operations that work with directly our model.
    //     let _ = coll
    //         .insert_one(
    //             User {
    //                 id: i,
    //                 first_name: "Muhammad".to_string(),
    //                 last_name: "Sarmad".to_string(),
    //                 email: "muhammadsarmad24@gmail.com".to_string(),
    //                 password: "Sarmad!123".to_string(),
    //             },
    //             None,
    //         )
    //         .await;
    // }
    while let Some(user) = users.try_next().await.unwrap() {
        // println!("User Id: {}", user);
    }

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
    // Send a ping to confirm a successful connection
    // client
    // .database("admin")
    // .run_command(doc! {"ping": 1}, None)
    // .await;
    println!("Pinged your deployment. You successfully connected to MongoDB!");
    // Ok(())
    HttpServer::new(|| {
        App::new()
            .service(hello)
            .service(echo)
            .route("/hey", web::get().to(manual_hello))
    })
    .bind(("127.0.0.1", 8080))?
    .run()
    .await
}
