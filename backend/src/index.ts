import mongoose from "mongoose";
import express from "express";

const app = express();

const {MONGODB_URI, MONGODB_DBNAME} =process.env 

mongoose.set("strictQuery", false);

if (MONGODB_URI) {
  mongoose.connect(MONGODB_URI, { dbName: MONGODB_DBNAME }).catch((error) => {
    console.error("error connecting to MongoDB:", error.message);
  });
}