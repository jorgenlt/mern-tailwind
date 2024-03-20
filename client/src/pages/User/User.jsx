import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Spinner, Typography } from "@material-tailwind/react";
import axios from "axios";

const User = () => {
  const { userId } = useParams();

  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const token = useSelector((state) => state.auth.token);

  const getUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3001/users/${userId}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      if (response.status === 200) {
        setUser(response.data);
      } else {
        console.error("Fetching user data failed:", response.data.error);
      }
    } catch (err) {
      console.error(
        "An error occured when getting the user information",
        err.message
      );
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getUser();
  }, [userId]);

  return (
    <>
      {isLoading && <Spinner />}
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
