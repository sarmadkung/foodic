use mongodb::{
    bson::{doc, oid::ObjectId},
    options::ClientOptions,
    Client,
};
use serde::{Deserialize, Serialize};

#[derive(Debug, Serialize, Deserialize)]
pub struct Menu {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub name: String,
    pub description: Option<String>,
    pub dishes: Vec<ObjectId>,
    pub price: Option<f32>,
    pub is_vegetarian: Option<bool>,
    pub is_vegan: Option<bool>,
    pub is_gluten_free: Option<bool>,
    pub restaurant_id: ObjectId,
}
