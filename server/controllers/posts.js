import Post from "../models/Post.js";

// Create a new post
export const createPost = async (req, res) => {
  try {
    // Get information from the request body
    const { firstName, lastName, content } = req.body;

    // Validate data
    if (!firstName || !lastName || !content) {
      return res.status(400).json({ message: "Invalid data" });
    }

    // Creating a new post
    const newPost = new Post({
      firstName,
      lastName,
      content,
    });

    // Saving the new post
    const savedPost = await newPost.save();

    // Response with 201-Created and the created post
    return res.status(201).json(savedPost);
  } catch (err) {
    // Log the error
    console.error(err);

    // Send a generic error message to the client
    return res.status(500).json({ message: "An error occurred" });
  }
};

// Get all posts
export const getPosts = async (req, res) => {
  try {
    // Fetching all posts
    const posts = await Post.find();

    // Response with 200-OK and the fetched posts
    return res.status(200).json(posts);
  } catch (err) {
    // Log the error
    console.error(err);

    // Send a generic error message to the client
    return res.status(500).json({ message: "An error occurred" });
  }
};

// Get a single post
export const getPost = async (req, res) => {
  try {
    // Fetch the post by id
    const post = await Post.findById(req.params.id);

    // Validate result
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Response with 200-OK and the fetched post
    return res.status(200).json(post);
  } catch (err) {
    // Log the error
    console.error(err);

    // Send a generic error message to the client
    return res.status(500).json({ message: "An error occurred" });
  }
};

// Delete a post
export const deletePost = async (req, res) => {
  try {
    // Delete the post by id
    const result = await Post.findByIdAndDelete(req.params.id);

    // Validate result
    if (!result) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Response with 200-OK and a confirmation message
    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (err) {
    // Log the error
    console.error(err);

    // Send a generic error message to the client
    return res.status(500).json({ message: "An error occurred" });
  }
};

// Update a post
export const updatePost = async (req, res) => {
  try {
    // Get information from the request body
    const { firstName, lastName, content } = req.body;

    // Validate data
    if (!firstName || !lastName || !content) {
      return res.status(400).json({ message: "Invalid data" });
    }

    // Update the post by id
    const updatedPost = await Post.findByIdAndUpdate(
      req.params.id,
      {
        firstName,
        lastName,
        content,
      },
      { new: true } // This option returns the updated document
    );

    // Validate result
    if (!updatedPost) {
      return res.status(404).json({ message: "Post not found" });
    }

    // Response with 200-OK and the updated post
    return res.status(200).json(updatedPost);
  } catch (err) {
    // Log the error
    console.error(err);

    // Send a generic error message to the client
    return res.status(500).json({ message: "An error occurred" });
  }
};
