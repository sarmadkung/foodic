use crate::{
    database::connection::AppState,
    models::{self, user::User},
};
use actix_web::{web, HttpResponse, Responder};
use mongodb::bson::{doc, oid::ObjectId, Document};

#[derive(serde::Deserialize)]
pub struct LoginRequest {
    email: String,
    password: String,
}

// Signup request struct
#[derive(serde::Deserialize)]
pub struct SignupRequest {
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub password: String,
    pub phone_number: String,
}

// Function to validate signup data
pub fn validate_signup_data(data: &SignupRequest) -> bool {
    // Perform validation checks on the signup data
    !data.first_name.is_empty()
        && !data.last_name.is_empty()
        && !data.email.is_empty()
        && !data.password.is_empty()
        && !data.phone_number.is_empty()
}

pub async fn login(data: web::Json<LoginRequest>, state: web::Data<AppState>) -> HttpResponse {
    // Access the MongoDB client from the application state
    let collection = state.db.collection::<User>("users");

    // Query the database to check if the provided email and password are valid
    let query = doc! {
        "email": &data.email,
        "password": &data.password,
    };
    if let Ok(Some(_)) = collection.find_one(query, None).await {
        // Successful authentication
        HttpResponse::Ok().body("Login successful!")
    } else {
        // Failed authentication
        HttpResponse::Unauthorized().body("Invalid credentials")
    }
}

// Handler for the signup endpoint
pub async fn signup(data: web::Json<SignupRequest>, state: web::Data<AppState>) -> impl Responder {
    // Validate signup data
    if validate_signup_data(&data) {
        // Generate a unique identifier for the user
        let user_id = ObjectId::new();

        // Create a new user document
        let user_document = doc! {
            "_id": &user_id,
            "first_name": &data.first_name,
            "last_name": &data.last_name,
            "email": &data.email,
            "password": &data.password,
            "verified": false,
            "phone_number": &data.phone_number,
        };

        // Insert the user document into the MongoDB collection
        let collection = state.db.collection::<Document>("users");
        collection.insert_one(user_document, None).await.unwrap();

        // Successful signup
        HttpResponse::Ok().body("Signup successful!")
    } else {
        // Invalid signup data
        HttpResponse::BadRequest().body("Invalid signup data")
    }
}
