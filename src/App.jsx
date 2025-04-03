import { useEffect, useState } from "react";
import React from "react";
import "./App.css";
import Product from "./component/Product";
import Confirm from "./component/Confirm";
import data from './data/data.json'


function App() {
  const [cart, setCart] = useState(() => {
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const addToCart = (product) => {
    setSelectedProduct(product.name);
    const existingItem = cart.find((item) => item.name === product.name);

    if (existingItem) {
      setCart(
        cart.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const removeFromCart = (productName) => {
    setCart(cart.filter((item) => item.name !== productName));
  };

  const incrementQuantity = (productName) => {
    setCart(
      cart.map((item) =>
        item.name === productName
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decrementQuantity = (productName) => {
    setCart(
      cart
        .map((item) =>
          item.name === productName && item.quantity > 1
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const calculateTotal = () => {
    return cart
      .reduce((total, item) => total + item.price * item.quantity, 0)
      .toFixed(2);
  };
  return (
    <div className="bg-[#FCF8F5]">
      <Product  cart={cart} 
        selectedProduct={selectedProduct}
        addToCart={addToCart}
        removeFromCart={removeFromCart}
        incrementQuantity={incrementQuantity}
        decrementQuantity={decrementQuantity}
        calculateTotal={calculateTotal} 
        setCart={setCart}
        
        />
      
    </div>
  );
}

export default App;
