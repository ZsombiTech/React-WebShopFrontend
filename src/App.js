import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import ProductOverview from "./components/ProductOverview";
import Login from "./components/Login";
import Registration from "./components/Registration";
import ProductList from "./components/ProductList";
import ShoppingCart from "./components/ShoppingCart";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import CheckoutForm from "./components/CheckoutForm";
import PayDeliver from "./components/PayDeliver";

function App() {
  const [opencart, setopencart] = useState(false);
  return (
    <div>
      <Router>
        <Navbar opencart={opencart} setopencart={setopencart} />

        <Switch>
          <Route exact path="/">
            <Main />
            <Categories />
            <Products />
            <Contact />
            <ShoppingCart opencart={opencart} setopencart={setopencart} />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/registration">
            <Registration />
          </Route>
          <Route path="/productoverview">
            <ProductOverview />
            <ShoppingCart opencart={opencart} setopencart={setopencart} />
          </Route>
          <Route path="/productlist">
            <ProductList />
            <ShoppingCart opencart={opencart} setopencart={setopencart} />
          </Route>
          <Route path="/checkoutform">
            <CheckoutForm />
          </Route>
          <Route path="/paydeliver">
            <PayDeliver />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
