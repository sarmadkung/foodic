use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct Restaurant {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub name: String,
    pub location: String,
    pub email: String,
    pub phone_number: String,
    pub address: String,
    pub city: String,
    pub province: String,
}
