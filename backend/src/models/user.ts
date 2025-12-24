import mongoose from "mongoose";
import { User } from "../interfaces/User";

export const userSchema = new mongoose.Schema<User>(
    {
        username: String,
        password: String,
        email: String,
        vendor: Boolean,
        phone: Number,
    }
);