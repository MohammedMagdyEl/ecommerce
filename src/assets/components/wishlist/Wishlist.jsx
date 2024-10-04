import React, { useContext } from "react";
import { CartContext } from "../context/context";
import { MdDelete } from "react-icons/md";
import "./wishlist.css";

function Wishlist() {
  const { wishlistItems, removeFromWishlist, addToCart } =
    useContext(CartContext);


  return (
    <div className="cart ">
      <div className="title">
        <h2>Shopping Cart</h2>
      </div>

      {wishlistItems.length > 0 ? (
        wishlistItems.map((item) => (
          <div key={item.id} className="cart-item  ">
            <div className="imge ">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="description ">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              <h5>{`${item.price} Egy`}</h5>
              <div className="flex btn ">
                <button
                  onClick={() => removeFromWishlist(item.id)}
                  className=" btn-cart-delet "
                >
                  <span>
                    <MdDelete />
                  </span>
                  <span>Delete</span>
                </button>
                <button className="add-to-card" onClick={() => addToCart(item)}>
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p>Your cart is empty</p>
      )}

      <div className="total"></div>
    </div>
  );
}
export default Wishlist;
