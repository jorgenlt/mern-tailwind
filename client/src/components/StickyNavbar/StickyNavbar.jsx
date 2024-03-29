import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { setLogout } from "../../pages/Login/authSlice";

const StickyNavbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const userId = useSelector((state) => state.auth.user._id);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleNavigation = (destination) => {
    if (isNavOpen) {
      setIsNavOpen(false);
    }
    navigate(destination);
  };

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
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
        onClick={() => handleNavigation("/home")}
      >
        Home
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
        onClick={() => handleNavigation("/posts")}
      >
        Posts
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal transition-colors hover:text-blue-500 focus:text-blue-500 cursor-pointer"
        onClick={() => handleNavigation(`/users/${userId}`)}
      >
        Account
      </Typography>
    </ul>
  );

  return (
    <Navbar className="fixed top-0 z-10 h-max max-w-full rounded-none px-4 py-2 lg:px-8 lg:py-4">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          className="mr-4 cursor-pointer py-1.5 font-medium transition-colors hover:text-blue-500 focus:text-blue-500"
          onClick={() => handleNavigation("/home")}
        >
          mern-tailwind
        </Typography>
        <div className="flex items-center gap-4">
          <div className="mr-4 hidden lg:block">{navList}</div>
          <div className="flex items-center gap-x-1">
            <Button
              variant="text"
              size="sm"
              className="hidden lg:inline-block"
              onClick={logout}
            >
              Sign out
            </Button>
          </div>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setIsNavOpen(!isNavOpen)}
          >
            {isNavOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
      </div>
      <Collapse open={isNavOpen}>
        {navList}
        <div className="flex gap-x-1">
          <Button variant="text" size="sm" onClick={logout}>
            Sign out
          </Button>
        </div>
      </Collapse>
    </Navbar>
  );
};

export default StickyNavbar;
