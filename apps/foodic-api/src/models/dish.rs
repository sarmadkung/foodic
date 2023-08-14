use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Dish {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub name: String,
    pub main_ingredients: Vec<String>,
    pub category: DishType,
    pub description: String,
    pub nutritional_info: String,
    pub cooking_time: Number,
    pub cooking_method: String,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum DishType {
    Appetizer,
    MainCourse,
    Dessert,
    Side,
}
