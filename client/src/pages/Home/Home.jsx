import { useSelector, useDispatch } from "react-redux";
import { setLogout } from "../Login/authSlice";
import axios from "axios";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  const { firstName, lastName, email } = user || {};

  const dispatch = useDispatch();

  const logout = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3001/auth/logout",
        null,
        {
          withCredentials: true,
        }
      );

      if (response.status === 200) {
        console.log(response.data.msg);
        dispatch(setLogout());
        alert("Logged out successfully");
      } else {
        console.error("Registration error:", response.data.error);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Home.jsx</h1>

      <br />

      <h1>Logged in as:</h1>
      <p>
        {firstName} {lastName}
      </p>
      <p>{email}</p>

      <br />

      <a onClick={logout}>log out</a>
    </div>
  );
};

export default Home;
