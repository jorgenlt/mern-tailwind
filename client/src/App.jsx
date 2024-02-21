import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Home from './pages/Home/Home';
import Login from './pages/Login/Login'

const App = () => {
  const isAuth = false;

  return (
    <Router>
      <>
        {/* <Nav /> */}
        <Routes>
          <Route path="/" element={isAuth ? <Home /> : <Login />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
