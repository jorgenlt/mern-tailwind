import bcrypt from "bcrypt";
import User from "../models/User.js";
import passport from "passport";
import LocalStrategy from "passport-local";

// passport.use(
//   new LocalStrategy(function verify(username, password, cb) {
//     User.findOne({ username: username }, function (err, user) {
//       if (err) {
//         return cb(err);
//       }
//       if (!user) {
//         return cb(null, false, { message: "Incorrect username or password." });
//       }

//       // Use bcrypt to compare passwords
//       bcrypt.compare(password, user.password, function (err, result) {
//         if (err) {
//           return cb(err);
//         }

//         if (!result) {
//           return cb(null, false, {
//             message: "Incorrect username or password.",
//           });
//         }

//         return cb(null, user);
//       });
//     });
//   })
// );

// User login
// export const login = async (req, res) => {
//   try {
//     // Get the login credentials
//     const { email, password } = req.body;

//     // Finding a user by email in the db
//     const user = await User.findOne({ email: email });
//     if (!user) {
//       return res.status(400).json({ msg: "User does not exist." });
//     }

//     // Comparing provided password with hashed password in the db
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(400).json({ msg: "Wrong email or password." });
//     }

//     // Generation a json web token for the authenticated user
//     const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

//     // Remove the user password before sending a response
//     delete user.password;

//     // Sending a response with the generated token and user's details
//     res.status(200).json({ token, user });
//   } catch (err) {
//     res.status(500).json({ error: err.message });
//   }
// };