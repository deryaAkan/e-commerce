import './App.css';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';
import Home from './Pages/Home'
import ProductList from './Pages/ProductList';
import { Route, Switch } from 'react-router-dom/cjs/react-router-dom.min';


function App() {
  return (
      <div className="App">
        <Header />
        <Switch> 
          <Route path="/" exact component={Home} /> 
          <Route path="/products" component={ProductList} />
        </Switch>
        <Footer />
      </div>
  );
}

export default App;
