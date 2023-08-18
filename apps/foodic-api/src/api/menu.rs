use crate::{
    database::connection::AppState,
    models::{self, dish::Dish},
};
use actix_web::{web, HttpResponse, Responder};
use bson::{bson, Bson};
use futures::TryStreamExt;
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
    pub price: u32,
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
        && !data.price != 0
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

pub async fn get_categories(state: web::Data<AppState>) -> impl Responder {
    let pipeline = vec![doc! {
        "$group": {
            "_id": "$category",
            "records": { "$push": "$$ROOT" },
            "count": { "$sum": 1 }
        }
    }];
    // Access the MongoDB client from the application state
    let collection: Collection<Dish> = state.db.collection::<Dish>("dishes");
    let mut cursor = collection.aggregate(pipeline, None).await.unwrap();
    let mut categories = Vec::new();

    // Iterate over the results of the cursor.
    while let Some(dish) = cursor.try_next().await.unwrap() {
        categories.push(dish)
        // println!("category: {}", dish.category.to_owned());
    }
    // for result in cursor {
    //     if let Ok(category) = result {
    //         categories.push(category)
    //     }
    // }
    HttpResponse::Ok().json(categories)
}

pub async fn get_dishes(
    category_type: web::Path<String>,
    state: web::Data<AppState>,
) -> impl Responder {
    let dish_category = category_type.to_string();
    let filter = doc! { "category": dish_category };
    let collection: Collection<Dish> = state.db.collection::<Dish>("dishes");
    let mut cursor = collection.find(filter, None).await.unwrap();
    let mut dishes = Vec::new();

    // Iterate over the results of the cursor.
    while let Some(dish) = cursor.try_next().await.unwrap() {
        dishes.push(dish)
        // println!("category: {}", dish.category.to_owned());
    }
    // for result in cursor {
    //     if let Ok(category) = result {
    //         categories.push(category)
    //     }
    // }
    HttpResponse::Ok().json(dishes)
}

pub async fn get_dish(path: web::Path<String>, state: web::Data<AppState>) -> impl Responder {
    let (id) = path.into_inner();
    let filter = doc! { "_id": ObjectId::parse_str(&id).unwrap()  };
    let collection: Collection<Dish> = state.db.collection::<Dish>("dishes");
    let dish_detail = collection.find_one(filter, None).await.unwrap();

    HttpResponse::Ok().json(dish_detail)
}
