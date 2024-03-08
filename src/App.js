import React from "react";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import TeamPage from "./Pages/TeamPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";
import SignUpForm from "./Components/SignUpForm";
import LoginForm1 from "./Components/LoginForm1";

function App() {
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
        <Route path="/login" component={LoginForm1} />
      </Switch>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
