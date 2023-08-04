FROM rust:latest as builder

WORKDIR /usr/src/app
COPY . .
# Will build and cache the binary and dependent crates in release mode
RUN cargo build --release && mv ./target/release/foodic-api ./foodic-api

# Runtime image
FROM debian:bullseye-slim


WORKDIR /app

# Get compiled binaries from builder's cargo install directory
COPY --from=builder /usr/src/app/foodic-api /app/foodic-api

# Run the app
CMD ./foodic-api

# ENTRYPOINT ["./foodic-api"]
# EXPOSE 3000


# # Use a Rust base image
# FROM rust:latest

# # Set the working directory
# WORKDIR /usr/src/app

# # Copy the cargo.toml and cargo.lock files to cache dependencies
# COPY . .

# # Build the dependencies (this step will cache dependencies)
# RUN cargo build --release

# # Build the application
# RUN cargo install --path .

# # Set the entry point to run the application
# ENTRYPOINT ["foodic-api"]
