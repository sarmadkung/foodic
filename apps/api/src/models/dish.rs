use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Dish {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub name: String,
    pub ingredients: Vec<String>,
    pub dish_type: DishType,
}

#[derive(Clone, Debug, Serialize, Deserialize)]
pub enum DishType {
    Appetizer,
    MainCourse,
    Dessert,
    Side,
}
