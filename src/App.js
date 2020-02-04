import React from "react";
import "./App.css";
import Homepage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import { Route } from "react-router-dom";

const HatsPage = () => <div>Hats</div>;

function App() {
  return (
    <div>
      <Route exact path="/" component={Homepage} />
      <Route path="/shop" component={ShopPage} />
    </div>
  );
}

export default App;
