import React, { useEffect } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import {
  Route,
  Switch,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import TeamPage from "./Pages/TeamPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";
import SignUpForm from "./Components/SignUpForm";
import LoginForm from "./Components/LoginForm";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { setUserName } from "./store/actions/userActions";

function App() {
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem("token");
    const userName = localStorage.getItem("userName");

    if (userName) {
      toast.success(`${userName} Welcome!`);
    }

    if (token) {
      instance
        .get("/verify", {
          headers: {
            Authorization: token,
          },
        })
        .then((res) => {
          console.log("Auto login", res.data);
          localStorage.setItem("token", res.data.token);
          localStorage.setItem("userName", res.data.name);
          toast.success(`Welcome ${res.data.name}`);
          dispatch(setUserName(res.data.name));
        })
        .catch((err) => {
          console.error("Login error:", err);
          toast.error("An error occurred during auto login.");
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/shop" component={Shop} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/products" component={ProductPage} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
        <Route path="/shop/:gender/:categoryId" component={Shop} />
      </Switch>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
