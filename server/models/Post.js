import mongoose from "mongoose";

// Define post schema with mongoose.Schema function.
const postSchema = mongoose.Schema(
  {
    // First name: required field, must be a string
    firstName: {
      type: String,
      required: true,
    },
    // Last name: required field, must be a string
    lastName: {
      type: String,
      required: true,
    },
    // Content: required field, must be a string
    content: {
      type: String,
      required: true,
    },
  },
  // Automatically include createdAt and updatedAt fields
  { timestamps: true }
);

// Create a model from the schema and assign it to the variable Post
// 'Post' is the name of the collection in the MongoDB database
const Post = mongoose.model("Post", postSchema);

export default Post;
