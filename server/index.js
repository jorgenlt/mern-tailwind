import express from "express";
import cors from 'cors'
import mongoose from "mongoose";
import dotenv from "dotenv";
import morgan from "morgan";

// Importing routes and controllers
import postRoutes from "./routes/posts.js";
import authRoutes from "./routes/auth.js";
import userRoutes from "./routes/users.js";
import { register } from "./controllers/auth.js";

// Importing seed function
import { seed } from "./seeds/seed.js";

// Importing middleware
// import { verifyToken } from "./middleware/auth.js";

// Configuring environment variables and middleware
dotenv.config();
const app = express();
app.use(express.json());
app.use(morgan("common"));
app.use(cors());

// Defining routes
app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/posts", postRoutes);

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
  .connect(process.env.MONGO_URL, {
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

    // *** Uncomment once to run function to add seeds ***
    // seed();
  })
  .catch((error) => {
    console.error(`${error} did not connect`);
    // Exit process with failure
    process.exit(1);
  });
