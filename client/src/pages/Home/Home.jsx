import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.auth.user);

  const { firstName, lastName, email, _id } = user || {};

  return (
    <>
      <div className="py-12">
        <Typography variant="h1" className="text-center">
          mern-tailwind + auth
        </Typography>
      </div>
      <div className="flex flex-col">
        <Typography>
          Signed is as{" "}
          <span className="capitalize font-bold">
            {firstName} {lastName}
          </span>{" "}
          with email <span className="font-bold">{email}</span>. The user id is{" "}
          <span className="font-bold">{_id}</span>.
        </Typography>
      </div>
    </>
  );
};

export default Home;
