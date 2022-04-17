import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import Logout from "./Auth/Logout";

export default function NavigationBar() {
  const [callLogout, setCallLogout] = useState(false);
  const isUserLoggedIn = useSelector(state => state.auth.isUserLoggedIn);
  return (
    <header>
      <Link to="/">
        <h1>eShopify</h1>
      </Link>

      <ul>
        <li>
          <NavLink to="/shop/men">Men</NavLink>
        </li>

        <li>
          <NavLink to="/shop/women">Women</NavLink>
        </li>

        <li>
          <NavLink to="/shop/electronics">Electronics</NavLink>
        </li>

        <li>
          <NavLink to="/shop/all">All</NavLink>
        </li>

        <li>
        {!isUserLoggedIn && <NavLink to="/auth">Login</NavLink> }
        </li>

        <li>
        {isUserLoggedIn && <NavLink to="/profile">Profile</NavLink> }
        </li>

        <li>
        {isUserLoggedIn && <button onClick={()=>setCallLogout(true)}>Logout</button> }
        </li>

      </ul>
      {callLogout && <Logout setCallLogout={setCallLogout}/>}
    </header>
  );
}
