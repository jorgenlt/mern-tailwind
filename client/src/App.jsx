import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import "./App.css";
import { useSelector } from "react-redux";

import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import StickyNavbar from "./components/StickyNavbar/StickyNavbar";
import Footer from "./components/Footer/Footer";
import User from "./pages/User/User";
import Posts from "./pages/Posts/Posts";

const App = () => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  return (
    <Router>
      {isAuth && <StickyNavbar />}

      <div className={isAuth ? "py-20 px-8 min-h-screen self-center" : ""}>
        <Routes>
          <Route
            path="/"
            element={<Navigate to={isAuth ? "/home" : "/login"} />}
          />
          <Route
            path="/home"
            element={isAuth ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={isAuth ? <Navigate to="/home" /> : <Login />}
          />
          <Route 
            path="/posts"
            element={isAuth ? <Posts /> : <Navigate to="/login" replace/>}
          />
          <Route
            path="/users/:userId"
            element={isAuth ? <User /> : <Navigate to="/login" replace />}
          />
          <Route
            path="*"
            element={<Navigate to={isAuth ? "/home" : "/login"} replace />}
          />
        </Routes>
      </div>

      {isAuth && <Footer />}
    </Router>
  );
};

export default App;
