import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  const { firstName, lastName, email } = user || {};

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
    </div>
  );
};

export default Home;
