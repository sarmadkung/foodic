use mongodb::bson::oid::ObjectId;
use serde::{Deserialize, Serialize};

#[derive(Clone, Debug, Deserialize, Serialize)]
pub struct User {
    #[serde(rename = "_id", skip_serializing_if = "Option::is_none")]
    pub id: Option<ObjectId>,
    pub first_name: String,
    pub last_name: String,
    pub email: String,
    pub password: String,
    pub verified: bool,
    pub phone_number: String,
}
