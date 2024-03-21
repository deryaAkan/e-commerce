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

function App() {
  const baseURL = "https://workintech-fe-ecommerce.onrender.com";
  const instance = axios.create({ baseURL });
  const history = useHistory();
  const dispatch = useDispatch();
  const userReducerData = useSelector((store) => store.userRed);
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
        })
        .catch((err) => {
          console.error("login hata", err);
          localStorage.removeItem("token");
        });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/products" component={Shop} />
        <Route path="/team" component={TeamPage} />
        <Route path="/about" component={AboutPage} />
        <Route path="/contact" component={ContactPage} />
        <Route path="/productpage" component={ProductPage} />
        <Route path="/signup" component={SignUpForm} />
        <Route path="/login" component={LoginForm} />
      </Switch>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
