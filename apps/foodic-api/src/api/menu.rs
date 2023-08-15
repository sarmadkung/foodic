use crate::{
    database::connection::AppState,
    models::{self, dish::Dish},
};
use actix_web::{web, HttpResponse, Responder};
use jsonwebtoken::{decode, encode, Algorithm, DecodingKey, EncodingKey, Header, Validation};
use log::{debug, error, info, warn};
use mongodb::bson::{doc, oid::ObjectId, Document};
use mongodb::Collection;
use serde::{Deserialize, Serialize};
use std::collections::HashSet;
use std::mem::discriminant;
#[derive(Serialize)]
struct LoginResponse {
    token: String,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum DishType {
    #[serde(rename = "Appetizer")]
    Appetizer,
    #[serde(rename = "MainCourse")]
    MainCourse,
    #[serde(rename = "Dessert")]
    Dessert,
    #[serde(rename = "Side")]
    Side,
}

// Signup request struct
#[derive(serde::Deserialize)]
pub struct AddDishRequest {
    pub name: String,
    pub main_ingredients: String,
    pub category: DishType,
    pub description: String,
    pub nutritional_info: String,
    pub cooking_time: String,
    pub cooking_method: String,
    pub price: u32
}
// Function to validate signup data
pub fn validate_addDish_data(data: &AddDishRequest) -> bool {
    let mut seen_categories = HashSet::new();

    // Check if the DishType enum variant has been seen before
    if !seen_categories.insert(discriminant(&data.category)) {
        return false; // Duplicate category found
    }

    // Perform validation checks on the signup data
    !data.name.is_empty()
        && !data.main_ingredients.is_empty()
        && !data.description.is_empty()
        && !data.nutritional_info.is_empty()
        && !data.cooking_time.is_empty()
        && !data.cooking_method.is_empty()
        && !data.price !=0
}

pub async fn add_dish(
    data: web::Json<AddDishRequest>,
    state: web::Data<AppState>,
) -> impl Responder {
    // Validate signup data
    if validate_addDish_data(&data) {
        // Generate a unique identifier for the user
        let dish_id = ObjectId::new();

        // Create a new user document
        let dish_document = doc! {
            "_id": &dish_id,
            "name": &data.name,
            "description": &data.description,
            "main_ingredients": &data.main_ingredients,
            "category": category_to_string(&data.category),
            "nutritional_info": &data.nutritional_info,
            "cooking_time": &data.cooking_time,
            "cooking_method": &data.cooking_method,
            "price": &data.price,

        };
        fn category_to_string(category: &DishType) -> &str {
            match category {
                DishType::Appetizer => "Appetizer",
                DishType::MainCourse => "MainCourse",
                DishType::Dessert => "Dessert",
                DishType::Side => "Side",
            }
        }

        // Insert the user document into the MongoDB collection
        let collection = state.db.collection::<Document>("dishes");
        collection.insert_one(dish_document, None).await.unwrap();
        // Successful signup
        HttpResponse::Ok().body("Dish Added successful!")
    } else {
        // Invalid signup data
        HttpResponse::BadRequest().body("Invalid data")
    }
}

// pub async fn get_categories(state: web::Data<AppState>) -> HttpResponse {
    
//     let pipeline = vec![
//         doc! {
//             "$group": {
//                 "category": "$category",
//                 "records": { "$push": "$$ROOT" },
//                 "count": { "$sum": 1 }
//             }
//         },
//     ];
//     // Access the MongoDB client from the application state
//     let collection: Collection<Dish> = state.db.collection::<Dish>("dishes");

//     let mut results = collection.aggregate(pipeline, None).await?;
//     // Query the database to retrieve categories of dishes
//     // while let Some(result) = results.next().await {
//     //     // Use serde to deserialize into the MovieSummary struct:
//     //     let doc: Dish = bson::from_document(result?)?;
//     //  }
// }