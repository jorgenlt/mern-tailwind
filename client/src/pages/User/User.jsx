import { useParams } from "react-router-dom";
import useGetUser from "../../hooks/useGetUser";
import { Typography } from "@material-tailwind/react";
import Loader from "../../components/Loader/Loader";

const User = () => {
  const { userId } = useParams();
  const { user, isLoading, error } = useGetUser(userId);

  return (
    <>
      {isLoading && <Loader />}
      {error && (
        <Typography>
          An error occured when getting the user information: {error}
        </Typography>
      )}

      {!isLoading && user && (
        <div className="flex flex-col">
          <Typography className="capitalize">
            <span className="font-bold">Name:</span> {user.firstName}{" "}
            {user.lastName}
          </Typography>
          <Typography>
            <span className="font-bold">Email:</span> {user.email}
          </Typography>
          <Typography>
            <span className="font-bold">User ID:</span> {user._id}
          </Typography>
        </div>
      )}
    </>
  );
};

export default User;
