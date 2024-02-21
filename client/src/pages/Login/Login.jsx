import { useState } from "react";
import LoginCard from "./LoginCard";
import SignupCard from "./SignupCard";

const Login = () => {
  const [changeScreen, setChangeScreen] = useState(true);

  const handleChangeScreen = () => {
    setChangeScreen(prevState => !prevState)
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {changeScreen ? <LoginCard handleChangeScreen={handleChangeScreen} /> : <SignupCard handleChangeScreen={handleChangeScreen} />}
    </div>
  );
};

export default Login;
