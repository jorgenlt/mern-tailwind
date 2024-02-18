import express from 'express'
import {
  getPosts,
  createPost,
  getPost,
  deletePost,
  updatePost
} from '../controllers/posts.js'

// Creating a new router object from the express module
const router = express.Router();

// Setting up a GET route at the root ("/") 
router.get("/", getPosts);

// Setting up a POST route at the root ("/") 
router.post("/", createPost);

// Setting up a GET route at "/:id" for getting a single post
router.get("/:id", getPost);

// Setting up a DELETE route at "/:id" for deleting a post
router.delete("/:id", deletePost);

// Setting up a PUT route at "/:id" for updating a post
router.put("/:id", updatePost);

// Exporting the router object so it can be used by other modules
export default router;
