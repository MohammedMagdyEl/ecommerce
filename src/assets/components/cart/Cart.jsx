import React, { useContext } from "react";
import { CartContext } from "../context/context";
import "./cart.css";
import { MdDelete } from "react-icons/md";

function Cart() {
  const { cartItems, removeFromCart } = useContext(CartContext);

  return (
    <div className="cart  ">
      <div className="title">
        <h2>Shopping Cart</h2>
      </div>
      <div className=" ">
        <div className="lift-Section">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <div key={item.id} className="cart-item  ">
                <div className="imge ">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="description ">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <h5>{`${item.price} Egy`}</h5>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className=" btn-cart-delet "
                  >
                    <span>
                      <MdDelete />
                    </span>
                    <span>Delete</span>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>Your cart is empty</p>
          )}
        </div>
        <div className="right-section ">
          <div className="order-summary border">
            <h3>Order Summary</h3>
            <div className="coupon-code">
              <input type="text" placeholder="Coupon Code" />
              <button>APPLY</button>
            </div>
            <div className="subtotal">
              <h6>Subtotal </h6>
              <h6>Shipping Fee </h6>
              <hr />
              <div className="total">
                <h2>Total span 35663456</h2>
              </div>
              <div className="checkout">
                <button>CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
