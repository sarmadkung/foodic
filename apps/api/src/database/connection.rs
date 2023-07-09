use mongodb::{bson::doc, options::ClientOptions, Client};

const URI: &str = "mongodb://127.0.0.1:27017/foodic";
// "mongodb+srv://muhammadsarmad_:FNQF9qxOVs9jeQ6x@cluster0.u7qte0h.mongodb.net/foodic";

pub async fn create_client() -> Client {
    let client = Client::with_uri_str(URI).await.unwrap();
    return client;
}
