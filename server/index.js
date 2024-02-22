import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

// Importing routes and controllers
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";

// Importing seeds
import { users, posts } from "./seeds/seeds.js";

// Importing models
import User from "./models/User.js";
import Post from './models/Post.js'

// Importing middleware

// Configuring environment variables and middleware
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));

// Defining routes
app.use("/posts", postRoutes);
app.use("/login", authRoutes);

// Default Route Handler
app.use((req, res, next) => {
  res.status(404).json({ error: "Not Found" });
});

// Error Handling Middleware
app.use((err, req, res, next) => {
  if (err.stack) console.error(err.stack);
  res.status(err.status || 500).send("Something broke!");
});

// Setting up Mongoose and starting the server
const PORT = process.env.PORT || 6001;
mongoose
  // Local connection
  .connect("mongodb://localhost:27017/mern-tailwind", {
    // Warning: useNewUrlParser is a deprecated option: useNewUrlParser has no effect
    // since Node.js Driver version 4.0.0 and will be removed in the next major version
    // useNewUrlParser: true,
    // Warning: useUnifiedTopology is a deprecated option: useUnifiedTopology has no effect
    // since Node.js Driver version 4.0.0 and will be removed in the next major version
    // useUnifiedTopology: true,
  })
  // MongoDB Atlas
  // .connect(process.env.MONGO_URL, {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true,
  // })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));

    // Uncomment these lines once to add seeds
    // User.insertMany(users)
    //   .then(() => {
    //     console.log("Seeding users completed");
    //   })
    //   .catch((error) => {
    //     console.error("Error during seeding of posts:", error);
    //   });

    // Post.insertMany(posts)
    //   .then(() => {
    //     console.log("Seeding posts completed");
    //   })
    //   .catch((error) => {
    //     console.error("Error during seeding of posts:", error);
    //   });
  })
  .catch((error) => {
    console.error(`${error} did not connect`);
    // Exit process with failure
    process.exit(1);
  });
