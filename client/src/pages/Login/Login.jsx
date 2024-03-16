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
  const [isSignup, setIsSignup] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const toggleScreen = () => {
    setIsSignup((prevState) => !prevState);
  };

  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  // Function to handle login form submission
  const login = async () => {
    try {
      const response = await axios.post("http://localhost:3001/auth/login", {
        email,
        password,
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

        console.log("Login successful:", user);
      } else {
        console.error("Login failed:", response.data.error);
      }
    } catch (error) {
      console.error("Error occurred during login:", error.response.data);
    }
  };

  // Function to handle signup form submission
  const signup = async () => {
    console.log("signup");

    // todo

    try {
      const response = await axios.post("http://localhost:3001/auth/register", {
        firstName,
        lastName,
        email,
        password,
      });

      if (response.status === 201) {
        console.log("Registration successful:", response.data);
      } else {
        console.error("Registration error:", response.data.error);
      }
    } catch (error) {
      console.error("Error occurred during registration:", error.response.data);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("firstName:", firstName);
    console.log("lastName", lastName);
    console.log("Email:", email);
    console.log("Password:", password);

    if (isSignup) {
      console.log("handleSubmit signup");
      await signup();
    } else {
      await login();
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Card className="w-96">
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
                  value={firstName}
                  onChange={handleFirstNameChange}
                />
                <Input
                  label="Last name"
                  name="lastName"
                  size="lg"
                  value={lastName}
                  onChange={handleLastNameChange}
                />
              </>
            )}
            <Input
              label="Email"
              name="email"
              size="lg"
              value={email}
              onChange={handleEmailChange}
            />
            <Input
              label="Password"
              name="password"
              size="lg"
              type="password"
              value={password}
              onChange={handlePasswordChange}
            />
            <div className="-ml-2.5">
              <Checkbox label="Remember Me" />
            </div>
            <Button variant="gradient" fullWidth type="submit">
              Sign {isSignup ? "up" : "in"}
            </Button>
          </form>
        </CardBody>
        <CardFooter className="pt-0">
          <p onClick={toggleScreen}>
            {isSignup
              ? "Already have an account? Log in"
              : "Click here to register"}
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Login;
