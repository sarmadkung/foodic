use mongodb::Client;

pub struct AppState {
    pub db: mongodb::Database,
}

pub async fn create_client(database_url: String) -> Client {
    let client = Client::with_uri_str(database_url).await.unwrap();
    return client;
}
