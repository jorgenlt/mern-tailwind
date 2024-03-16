import { useSelector } from "react-redux";

const Home = () => {
  const { firstName, lastName, email } = useSelector((state) => state.user);

  return (
    <div>
      <h1>Home.jsx</h1>

      <br />

      <h1>Logged in as:</h1>
      <p>
        {firstName} {lastName}
      </p>
      <p>{email}</p>
    </div>
  );
};

export default Home;
