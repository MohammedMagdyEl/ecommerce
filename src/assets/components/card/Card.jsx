import React, { useContext } from "react";
import { CartContext } from "../context/context";
import "./card.css";
import { FaHeart } from "react-icons/fa6";
import Footer from "../footer/Footer";

function Card({ data }) {
  const { addToCart, addToWishlist } = useContext(CartContext);

  return (
    <>
      <div className="cards">
        {data.map((item) => (
          <div key={item.id} className="card">
            <div className="imge">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="title">
              <h3>{item.title}</h3>
            </div>
            <div className="pargraph">
              <p>{item.description}</p>
            </div>
            <div className="price">
              <h5>{`${item.price} Egy`}</h5>
            </div>
            <div className="btn">
              <button className="add-to-card" onClick={() => addToCart(item)}>
                Add to Cart
              </button>
              <button
                className="add-to-wishlist"
                onClick={() => addToWishlist(item)}
              >
                <FaHeart />
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footer/>
    </>
  );
}

export default Card;
