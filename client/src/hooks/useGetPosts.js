import { useState, useEffect } from "react";
import axios from "axios";
import { useSelector } from "react-redux";
import { BASE_API_URL } from "../app/config";

const useGetPosts = () => {
  const [posts, setPosts] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = useSelector((state) => state.auth.token);

  useEffect(() => {
    const getPosts = async () => {
      try {
        const url = `${BASE_API_URL}/posts`;

        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        if (response.status === 200) {
          setPosts(response.data);
        } else {
          console.error("Fetching posts failed:", response.data.error);
        }
      } catch (err) {
        console.error(
          "An error occurred when getting the posts",
          err.message
        );
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    getPosts();
  }, [token]);

  return { posts, isLoading, error };
};

export default useGetPosts;
