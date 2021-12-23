import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Products from "./components/Products";
import Categories from "./components/Categories";
import Contact from "./components/Contact";
import ProductOverview from "./components/ProductOverview";
import Login from "./components/Login";
import Registration from "./components/Registration";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <Categories />
      <Products />
      <Contact />
      {/*<ProductOverview />
      <Login />
      <Registration />*/}
    </div>
  );
}

export default App;
