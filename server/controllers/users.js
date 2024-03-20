// Importing the User model
import User from "../models/User.js";

// Get a specific user based on ID
export const getUser = async (req, res) => {
  try {
    // Extracting the user ID from the request parameters
    const { id } = req.params;

    // Finding the user in the database using the extracted ID
    const user = await User.findById(id);

    // Remove the user password before sending a response
    const userObj = user.toObject(); // Convert to plain js object
    delete userObj.password;

    // Sending a successful response with the found user
    res.status(200).json(userObj);
  } catch (err) {
    // Sending an error response when unable to find the user
    res.status(404).json({ message: err.message });
  }
};
