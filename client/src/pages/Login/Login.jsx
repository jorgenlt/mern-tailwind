import { useState } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleScreen = () => {
    setIsLogin((prevState) => !prevState);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {isLogin ? (
        <LoginCard toggleScreen={toggleScreen} />
      ) : (
        <SignupCard toggleScreen={toggleScreen} />
      )}
    </div>
  );
};

export default Login;
