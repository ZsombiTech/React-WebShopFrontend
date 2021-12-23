import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import ProductOverview from "./components/ProductOverview";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ProductList from "./components/ProductList";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Main />
            <Categories />
            <Products />
            <Contact />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/productoverview">
            <ProductOverview />
          </Route>
          <Route path="/productlist">
            <ProductList />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
