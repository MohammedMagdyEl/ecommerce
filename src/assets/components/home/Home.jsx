import React from "react";
import { Link,NavLink, Outlet } from "react-router-dom";
import "./home.css";


function Home() {
  return (
    <div className="second-header">
      <div className="nav">
        <ul>
          <li>
            <NavLink to="">All Product</NavLink>
          </li>
          <li>
            <Link to="men">Men</Link>
          </li>
          <li>
            <Link to="women">Women</Link>
          </li>
          <li>
            <Link to="jewelery">Jewelery</Link>
          </li>
          <li>
            <Link to="electronics">Electronics</Link>
          </li>
        </ul>
        <Outlet />
      </div>

    </div>
  );
}

export default Home;
