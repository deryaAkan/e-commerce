import "./App.css";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import Home from "./Pages/Home";
import Shop from "./Pages/Shop";
import { Route, Switch } from "react-router-dom/cjs/react-router-dom.min";
import TeamPage from "./Pages/TeamPage";
import AboutPage from "./Pages/AboutPage";
import ContactPage from "./Pages/ContactPage";

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
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
