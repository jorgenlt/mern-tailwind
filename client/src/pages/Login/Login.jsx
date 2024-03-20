import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Checkbox,
  Button,
} from "@material-tailwind/react";
import { setLogin } from "./authSlice";
import axios from "axios";

const Login = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const [isSignup, setIsSignup] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleScreen = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle login form submission
  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // Store the JWT and user data in your application's state or local storage
        const { token, user } = response.data;

        dispatch(
          setLogin({
            token,
            user,
          })
        );

        navigate("/home");
      } else {
        console.error("Login failed:", response.data.error);
      }
    } catch (err) {
      console.error("An error occurred during login:", err.message);
      alert(`An error occurred during login: ${err.message}`);
    }
  };

  // Function to handle signup form submission
  const signup = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/register",
        formData
      );

      // If signup is successfull, login the user
      if (response.status === 201) {
        login();
      } else {
        console.error("Signup failed:", response.data.error);
      }
    } catch (err) {
      console.error("An error occurred during signup:", err.message);
      alert(`An error occurred during signup: ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      await signup();
    } else {
      await login();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="p-10">
        <Typography variant="h3" color="black">
          Sign {isSignup ? "up" : "in"}
        </Typography>
        <CardBody>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {isSignup && (
              <>
                <Input
                  label="First name"
                  name="firstName"
                  size="lg"
                  value={formData.firstName}
                  onChange={handleInputChange}
                />
                <Input
                  label="Last name"
                  name="lastName"
                  size="lg"
                  value={formData.lastName}
                  onChange={handleInputChange}
                />
              </>
            )}
            <Input
              label="Email"
              name="email"
              size="lg"
              value={formData.email}
              onChange={handleInputChange}
            />
            <Input
              label="Password"
              name="password"
              size="lg"
              type="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {/* <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div> */}
            <Button variant="gradient" fullWidth type="submit">
              Sign {isSignup ? "up" : "in"}
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography
            href="#"
            className="transition-colors hover:text-blue-500"
          >
            <a onClick={toggleScreen}>
              {isSignup
                ? "Already have an account? Sign in"
                : "Don't have an accont? Click here to sign up"}
            </a>
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
