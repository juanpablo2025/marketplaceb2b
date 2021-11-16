import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import Messenger from "./pages/messenger/Messenger";
import Client from "./pages/Client";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Cart from "./pages/Cart";
function App() {
  const { user } = useContext(AuthContext);
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messenger">
          {!user ? <Redirect to="/" /> : <Messenger />}
        </Route>
        <Route path="/product">
          <Product />
        </Route>
        <Route path="/productList">
          <ProductList />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/client">
          <Client />
        </Route>
        <Route path="/profile/:username">
          <Profile />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
