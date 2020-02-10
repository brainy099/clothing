import React from "react";

import CustomButton from "../cart-icon/cart-icon.component";
import "./cart-dropdown.styles.scss";

const cartDropdown = () => (
  <div className="cart-dropdown">
    <div className="cart-items"></div>
    <CustomButton>GO TO CHECKOUT</CustomButton>
  </div>
);

export default cartDropdown;
