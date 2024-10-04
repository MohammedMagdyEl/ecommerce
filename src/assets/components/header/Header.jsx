import React from "react";
import { Link } from "react-router-dom";
import { FaCartShopping } from "react-icons/fa6";
import { AiOutlineUserAdd } from "react-icons/ai";
import { AiTwotoneHeart } from "react-icons/ai";
import "./header.css";
function Header() {
  return (
    <>
      <div className=" ">
        <div className="header ">
          
            <div className="logo">
              <Link to="/">Mohammed</Link>
            </div>
            <div className="search ">
              <input type="text" placeholder="What are you Looking dor ?" />
            </div>
       
          <div className="nav">
            <ul>
              <li>
                <Link to="login">
                  <span>Log in</span> <AiOutlineUserAdd />
                </Link>
              </li>
              <li>
                <Link to="wishlist">
                  <span>Wishlist</span> <AiTwotoneHeart />
                </Link>
              </li>
              <li>
                <Link to="cart">
                  <span>Cart</span> <FaCartShopping />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
