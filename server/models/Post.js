import mongoose from "mongoose";

// Define post schema with mongoose.Schema function.
const postSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

// Create a model from the schema and assign it to the variable Post
// 'Post' is the name of the collection in the MongoDB database
const Post = mongoose.model("Post", postSchema);

export default Post;
