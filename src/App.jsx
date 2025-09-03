import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HeroSection from "./components/HeroSection";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";

import "./index.css";
import Home from "./pages/Home";
import Dictionary from "./pages/Dictonary";
import Setting from "./pages/Setting";
import Practice from "./pages/Pratice";
import Layout from "./layout/layout";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/hero" element={<HeroSection />} />

        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="practice" element={<Practice />} />
          <Route path="dictionary" element={<Dictionary />} />
          <Route path="setting" element={<Setting />} />
        </Route>
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
}

export default App;
