import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react";
import { setLogin } from "./authSlice";
import axios from "axios";
import { BASE_API_URL } from "../../app/config";

const Login = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [error, setError] = useState(null);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleScreen = () => {
    setError(null);
    setIsSignup((prevState) => !prevState);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to handle login form submission
  const login = async () => {
    try {
      const url = `${BASE_API_URL}/auth/login`;

      const response = await axios.post(url, {
        email: formData.email,
        password: formData.password,
      });

      if (response.status === 200) {
        // Store the JWT and user data in your application's state or local storage
        const { token, user } = response.data;

        dispatch(setLogin({ token, user }));

        navigate("/home");
      }
    } catch (err) {
      setError("Wrong email or password");
      console.error("An error occurred during login:", err.message);
    }
  };

  // Function to handle signup form submission
  const signup = async () => {
    const { firstName, lastName, email, password, confirmPassword } = formData;

    // Check if any required fields are missing
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("Please fill in all required fields");
      return;
    }

    // Additional password validation
    if (password.length < 8) {
      setError("Password must be at least 8 characters");
      return;
    } else if (password !== confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    try {
      const url = `${BASE_API_URL}/auth/register`;
      const response = await axios.post(url, formData);

      // If signup is successfull, login the user
      if (response.status === 201) {
        login();
      }
    } catch (err) {
      console.error("An error occurred during signup:", err.message);
      setError(`An error occurred during signup: ${err.message}`);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (isSignup) {
      setError(null);

      await signup();
    } else {
      await login();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="p-10">
        <CardBody>
          <Typography variant="h3" color="black" className="pb-8">
            Sign {isSignup ? "up" : "in"}
          </Typography>
          <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            {error && (
              <Typography className="text-red-500 text-sm">{error}</Typography>
            )}
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
            {isSignup && (
              <Input
                label="Confirm password"
                name="confirmPassword"
                size="lg"
                type="password"
                value={formData.confirmPassword}
                onChange={handleInputChange}
              />
            )}
            <Button variant="gradient" fullWidth type="submit">
              Sign {isSignup ? "up" : "in"}
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <Typography
            href="#"
            className="transition-colors hover:text-blue-500"
            as="a"
            onClick={toggleScreen}
          >
            {isSignup
              ? "Already have an account? Sign in"
              : "Don't have an account? Click here to sign up"}
          </Typography>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
