// Importing models for seeding
import User from "../models/User.js";
import Post from "../models/Post.js";

// Importing seed data
import { users, posts } from "./seedData.js";

export const seed = () => {
  User.insertMany(users)
    .then(() => {
      console.log("Seeding users completed");
    })
    .catch((error) => {
      console.error("Error during seeding of posts:", error);
    });

  Post.insertMany(posts)
    .then(() => {
      console.log("Seeding posts completed");
    })
    .catch((error) => {
      console.error("Error during seeding of posts:", error);
    });
};
