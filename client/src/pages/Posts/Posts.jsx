import { useState } from "react";
import useGetPosts from "../../hooks/useGetPosts";
import {
  Button,
  Input,
  Spinner,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { BASE_API_URL } from "../../app/config";
import axios from "axios";

const Posts = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [postError, setPostError] = useState(null);

  const {
    firstName,
    lastName,
    _id: userId,
  } = useSelector((state) => state.auth.user);

  const { posts, isLoading, error } = useGetPosts();

  const postElements =
    posts?.map((post) => (
      <div key={post._id}>
        <Typography className="font-bold">{post._id}</Typography>
        <Typography>
          {post.firstName} {post.lastName}
        </Typography>
        <Typography>{post.content}</Typography>
      </div>
    )) || [];

  const createPost = async () => {
    // Check if any required fields are missing
    if (!title || !content) {
      setPostError("Please fill in all required fields");
      return;
    }

    try {
      const url = `${BASE_API_URL}/posts`;
      const response = await axios.post(url, {
        firstName,
        lastName,
        content,
      });

      if (response.status === 201) {
        posts.push(response.data);

        setTitle("");
        setContent("");
      }
    } catch (err) {
      console.error("An error occurred:", err.message);
      setError(`An error occurred: ${err.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost();
  };
  return (
    <>
      {isLoading && <Spinner />}
      {error && (
        <Typography>
          An error occured when getting the user information: {error}
        </Typography>
      )}

      <div>
        <Typography variant="h1" className="py-8">
          Create new post
        </Typography>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {postError && (
            <Typography className="text-red-500 text-sm">
              {postError}
            </Typography>
          )}
          <Input
            label="Title"
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
          ></Input>
          <Textarea
            label="Create a new post"
            name="content"
            onChange={(e) => setContent(e.target.value)}
            value={content}
          ></Textarea>
          <Button type="submit">Post</Button>
        </form>
      </div>
      <div>
        <Typography variant="h1" className="py-8">
          All posts
        </Typography>
        <div className="flex flex-col gap-4">{postElements}</div>
      </div>
    </>
  );
};

export default Posts;
