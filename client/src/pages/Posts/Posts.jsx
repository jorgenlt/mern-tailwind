import { useState } from "react";
import useGetPosts from "../../hooks/useGetPosts";
import {
  Button,
  Input,
  Textarea,
  Typography,
} from "@material-tailwind/react";
import Loader from '../../components/Loader/Loader'
import { useSelector } from "react-redux";
import { BASE_API_URL } from "../../app/config";
import axios from "axios";
import { format } from "date-fns";

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
        <Typography className="font-bold">{post.title}</Typography>
        <Typography className="text-sm pb-2">
          {post.firstName} {post.lastName},{" "}
          {format(post.createdAt, "MMM dd yyyy, HH:mm")}
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
    console.log(userId, firstName, lastName, title, content);
    try {
      const url = `${BASE_API_URL}/posts`;
      const response = await axios.post(url, {
        userId,
        firstName,
        lastName,
        title,
        content,
      });

      if (response.status === 201) {
        posts.push(response.data);

        setTitle("");
        setContent("");
      }
    } catch (err) {
      console.error("An error occurred:", err.message);
      setPostError(`An error occurred: ${err.message}`);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    createPost();
  };
  return (
    <div className="max-w-lg">
      {isLoading && <Loader />}
      {error && <Typography>An error occured: {error}</Typography>}

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
        <div className="flex flex-col gap-6">{postElements}</div>
      </div>
    </div>
  );
};

export default Posts;
