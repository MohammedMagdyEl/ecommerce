import React, { createContext, useState } from "react";

// Create a Context
const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);

  // Add item to the cart
  const addToCart = (item) => {
    setCartItems((prevItems) => {
      const itemExists = prevItems.some((cartItem) => cartItem.id === item.id);
      if (itemExists) {
        // If item exists, update quantity (optional)
        return prevItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 } // Increment quantity
            : cartItem
        );
      } else {
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Remove item from the cart
  const removeFromCart = (itemId) => {
    setCartItems((prevItems) => {
      return prevItems.filter((cartItem) => cartItem.id !== itemId);
    });
  };

  // Add item to the wishlist
  const addToWishlist = (item) => {
    setWishlistItems((prevItems) => {
      const itemExists = prevItems.some(
        (wishlistItem) => wishlistItem.id === item.id
      );
      if (itemExists) {
        return prevItems; // If the item exists, don't add again
      } else {
        return [...prevItems, item];
      }
    });
  };

  // Remove item from the wishlist
  const removeFromWishlist = (itemId) => {
    setWishlistItems((prevItems) => {
      return prevItems.filter((wishlistItem) => wishlistItem.id !== itemId);
    });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        wishlistItems,
        addToCart,
        removeFromCart,
        addToWishlist,
        removeFromWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export { CartContext, CartProvider };
