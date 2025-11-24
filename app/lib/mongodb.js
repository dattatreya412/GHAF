import mongoose from "mongoose";

const MONGODB_URI = "mongodb+srv://dattatreya412_db_user:x9xPhwFZ0EptnO68@ghaf.yd7rgge.mongodb.net/?appName=ghaf";

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

let cached = global.mongoose;

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null };
}

export async function connectDB() {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGODB_URI, {
        dbName: "myDatabase", // optional
      })
      .then((mongoose) => mongoose);
  }

  cached.conn = await cached.promise;
  return cached.conn;
}
