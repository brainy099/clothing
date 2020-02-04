import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import Header from "./components/header/header.component";
import ShopPage from "./pages/shop/shop.component";
import { Route, Switch } from "react-router-dom";

const HatsPage = () => <div>Hats</div>;

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
