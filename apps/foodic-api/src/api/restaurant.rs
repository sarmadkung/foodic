use actix_web::{web, HttpResponse, Responder};
use mongodb::{
    bson::{doc, oid::ObjectId, Document},
    options::FindOneAndUpdateOptions,
};

use crate::database::connection::AppState;

// Handler for the create restaurant endpoint
pub async fn create_restaurant(
    data: web::Json<RestaurantRequest>,
    state: web::Data<AppState>,
) -> impl Responder {
    // Validate restaurant data
    if validate_restaurant_data(&data) {
        // Generate a unique identifier for the restaurant
        let restaurant_id = ObjectId::new();

        // Create a new restaurant document
        let restaurant_document = doc! {
            "_id": &restaurant_id,
            "name": &data.name,
            "location": &data.location,
            "email": &data.email,
            "phone_number": &data.phone_number,
            "address": &data.address,
            "city": &data.city,
            "province": &data.province,
        };

        // Insert the restaurant document into the MongoDB collection
        let collection = state.db.collection::<Document>("restaurants");
        collection
            .insert_one(restaurant_document, None)
            .await
            .unwrap();

        // Successful restaurant creation
        HttpResponse::Ok().body("Restaurant created successfully!")
    } else {
        // Invalid restaurant data
        HttpResponse::BadRequest().body("Invalid restaurant data")
    }
}

// Restaurant request struct
#[derive(serde::Deserialize)]
pub struct RestaurantRequest {
    id: ObjectId,
    name: String,
    location: String,
    email: String,
    phone_number: String,
    address: String,
    city: String,
    province: String,
}

// Function to validate restaurant data
pub fn validate_restaurant_data(data: &RestaurantRequest) -> bool {
    // Perform validation checks on the restaurant data
    !data.name.is_empty()
        && !data.location.is_empty()
        && !data.email.is_empty()
        && !data.phone_number.is_empty()
        && !data.address.is_empty()
        && !data.city.is_empty()
        && !data.province.is_empty()
}

// Handler for the update restaurant endpoint
pub async fn update_restaurant(
    data: web::Json<RestaurantRequest>,
    state: web::Data<AppState>,
) -> impl Responder {
    let restaurant_id = &data.id;

    // Create a filter to match the restaurant by its ID
    let filter = doc! {
        "_id": restaurant_id,
    };

    // Create an update document with the fields to be updated
    let update_doc = doc! {
        "$set": {
            "name": &data.name,
            "location": &data.location,
            "email": &data.email,
            "phone_number": &data.phone_number,
            "address": &data.address,
            "city": &data.city,
            "province": &data.province,
        },
    };

    // Create options for the FindOneAndUpdate operation
    let options = FindOneAndUpdateOptions::builder()
        .return_document(mongodb::options::ReturnDocument::After)
        .build();

    // Execute the FindOneAndUpdate operation
    let collection = state.db.collection::<Document>("restaurants");
    if let Ok(result) = collection
        .find_one_and_update(filter, update_doc, options)
        .await
    {
        if let Some(updated_doc) = result {
            // Successful update
            HttpResponse::Ok().json(updated_doc)
        } else {
            // Restaurant not found
            HttpResponse::NotFound().body("Restaurant not found")
        }
    } else {
        // Error occurred during the update operation
        HttpResponse::InternalServerError().body("Failed to update restaurant")
    }
}
