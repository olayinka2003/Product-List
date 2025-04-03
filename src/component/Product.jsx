import { GiCancel } from "react-icons/gi";
import { AiFillMinusCircle } from "react-icons/ai";
import { AiFillPlusCircle } from "react-icons/ai";
import { BiCartAdd } from "react-icons/bi";
import React, { useState, useEffect, useRef } from "react";
import data from "../data/data.json";
import empty from "../assets/images/illustration-empty-cart.svg";
import carbon from "../assets/images/icon-carbon-neutral.svg";

import imageWaffleThumbnail from "../assets/images/image-waffle-thumbnail.jpg";
import imageWaffleMobile from "../assets/images/image-waffle-mobile.jpg";
import imageWaffleTablet from "../assets/images/image-waffle-tablet.jpg";
import imageWaffleDesktop from "../assets/images/image-waffle-desktop.jpg";

import imageCremeBruleeThumbnail from "../assets/images/image-creme-brulee-thumbnail.jpg";
import imageCremeBruleeMobile from "../assets/images/image-creme-brulee-mobile.jpg";
import imageCremeBruleeTablet from "../assets/images/image-creme-brulee-tablet.jpg";
import imageCremeBruleeDesktop from "../assets/images/image-creme-brulee-desktop.jpg";

import imageMacaronThumbnail from "../assets/images/image-macaron-thumbnail.jpg";
import imageMacaronMobile from "../assets/images/image-macaron-mobile.jpg";
import imageMacaronTablet from "../assets/images/image-macaron-tablet.jpg";
import imageMacaronDesktop from "../assets/images/image-macaron-desktop.jpg";

import imageTiramisuThumbnail from "../assets/images/image-tiramisu-thumbnail.jpg";
import imageTiramisuMobile from "../assets/images/image-tiramisu-mobile.jpg";
import imageTiramisuTablet from "../assets/images/image-tiramisu-tablet.jpg";
import imageTiramisuDesktop from "../assets/images/image-tiramisu-desktop.jpg";

import imageBaklavaThumbnail from "../assets/images/image-baklava-thumbnail.jpg";
import imageBaklavaMobile from "../assets/images/image-baklava-mobile.jpg";
import imageBaklavaTablet from "../assets/images/image-baklava-tablet.jpg";
import imageBaklavaDesktop from "../assets/images/image-baklava-desktop.jpg";

import imageMeringueThumbnail from "../assets/images/image-meringue-thumbnail.jpg";
import imageMeringueMobile from "../assets/images/image-meringue-mobile.jpg";
import imageMeringueTablet from "../assets/images/image-meringue-tablet.jpg";
import imageMeringueDesktop from "../assets/images/image-meringue-desktop.jpg";

import imageCakeThumbnail from "../assets/images/image-cake-thumbnail.jpg";
import imageCakeMobile from "../assets/images/image-cake-mobile.jpg";
import imageCakeTablet from "../assets/images/image-cake-tablet.jpg";
import imageCakeDesktop from "../assets/images/image-cake-desktop.jpg";

import imageBrownieThumbnail from "../assets/images/image-brownie-thumbnail.jpg";
import imageBrownieMobile from "../assets/images/image-brownie-mobile.jpg";
import imageBrownieTablet from "../assets/images/image-brownie-tablet.jpg";
import imageBrownieDesktop from "../assets/images/image-brownie-desktop.jpg";

import imagePannaCottaThumbnail from "../assets/images/image-panna-cotta-thumbnail.jpg";
import imagePannaCottaMobile from "../assets/images/image-panna-cotta-mobile.jpg";
import imagePannaCottaTablet from "../assets/images/image-panna-cotta-tablet.jpg";
import imagePannaCottaDesktop from "../assets/images/image-panna-cotta-desktop.jpg";
import Confirm from "./Confirm";

const productMap = {
  "./assets/images/image-waffle-thumbnail.jpg": imageWaffleThumbnail,
  "./assets/images/image-waffle-mobile.jpg": imageWaffleMobile,
  "./assets/images/image-waffle-tablet.jpg": imageWaffleTablet,
  "./assets/images/image-waffle-desktop.jpg": imageWaffleDesktop,

  "./assets/images/image-creme-brulee-thumbnail.jpg": imageCremeBruleeThumbnail,
  "./assets/images/image-creme-brulee-mobile.jpg": imageCremeBruleeMobile,
  "./assets/images/image-creme-brulee-tablet.jpg": imageCremeBruleeTablet,
  "./assets/images/image-creme-brulee-desktop.jpg": imageCremeBruleeDesktop,

  "./assets/images/image-macaron-thumbnail.jpg": imageMacaronThumbnail,
  "./assets/images/image-macaron-mobile.jpg": imageMacaronMobile,
  "./assets/images/image-macaron-tablet.jpg": imageMacaronTablet,
  "./assets/images/image-macaron-desktop.jpg": imageMacaronDesktop,

  "./assets/images/image-tiramisu-thumbnail.jpg": imageTiramisuThumbnail,
  "./assets/images/image-tiramisu-mobile.jpg": imageTiramisuMobile,
  "./assets/images/image-tiramisu-tablet.jpg": imageTiramisuTablet,
  "./assets/images/image-tiramisu-desktop.jpg": imageTiramisuDesktop,

  "./assets/images/image-baklava-thumbnail.jpg": imageBaklavaThumbnail,
  "./assets/images/image-baklava-mobile.jpg": imageBaklavaMobile,
  "./assets/images/image-baklava-tablet.jpg": imageBaklavaTablet,
  "./assets/images/image-baklava-desktop.jpg": imageBaklavaDesktop,

  "./assets/images/image-meringue-thumbnail.jpg": imageMeringueThumbnail,
  "./assets/images/image-meringue-mobile.jpg": imageMeringueMobile,
  "./assets/images/image-meringue-tablet.jpg": imageMeringueTablet,
  "./assets/images/image-meringue-desktop.jpg": imageMeringueDesktop,

  "./assets/images/image-cake-thumbnail.jpg": imageCakeThumbnail,
  "./assets/images/image-cake-mobile.jpg": imageCakeMobile,
  "./assets/images/image-cake-tablet.jpg": imageCakeTablet,
  "./assets/images/image-cake-desktop.jpg": imageCakeDesktop,

  "./assets/images/image-brownie-thumbnail.jpg": imageBrownieThumbnail,
  "./assets/images/image-brownie-mobile.jpg": imageBrownieMobile,
  "./assets/images/image-brownie-tablet.jpg": imageBrownieTablet,
  "./assets/images/image-brownie-desktop.jpg": imageBrownieDesktop,

  "./assets/images/image-panna-cotta-thumbnail.jpg": imagePannaCottaThumbnail,
  "./assets/images/image-panna-cotta-mobile.jpg": imagePannaCottaMobile,
  "./assets/images/image-panna-cotta-tablet.jpg": imagePannaCottaTablet,
  "./assets/images/image-panna-cotta-desktop.jpg": imagePannaCottaDesktop,
};

export default function Product({
  cart,
  selectedProduct,
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
  calculateTotal,
  setCart,
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const modalRef = useRef(null);
  const confirmButtonRef = useRef(null);
  const lastFocusedElementRef = useRef(null);

  const handleClick = () => {
    lastFocusedElementRef.current = document.activeElement;
    setShowConfirm(true);
  };

  // Handle keyboard event for closing modal with Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (showConfirm && e.key === "Escape") {
        setShowConfirm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [showConfirm]);

  // Focus trap for modal
  useEffect(() => {
    if (showConfirm && modalRef.current) {
      // Focus first focusable element in modal
      const focusableElements = modalRef.current.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      
      if (focusableElements.length > 0) {
        focusableElements[0].focus();
      }
    } else if (!showConfirm && lastFocusedElementRef.current) {
      // Return focus to trigger element when modal closes
      lastFocusedElementRef.current.focus();
    }
  }, [showConfirm]);

  const getItemQuantity = (productName) => {
    const item = cart.find((item) => item.name === productName);
    return item ? item.quantity : 0;
  };

  // Keyboard handler for buttons
  const handleKeyDown = (e, action) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      action();
    }
  };

  return (
    <div className="w-[80%] mx-auto pb-10 relative">
      <h1 className="pt-10 font-black text-3xl text-[#351F18]">Desserts</h1>
      <main className="flex md:flex-row flex-col mt-5 gap-5">
        <div className="lg:w-[70%] w-full grid lg:grid-cols-3 gap-5">
          {data.map((product) => {
            const isInCart = cart.some((item) => item.name === product.name);
            const quantity = getItemQuantity(product.name);

            return (
              <div key={product.name}>
                <div className="flex flex-col items-center">
                  <img
                    src={productMap[product.image.desktop]}
                    alt={product.name}
                    className={`${
                      isInCart
                        ? "border-2 border-[#C6ACA3] rounded-2xl"
                        : "rounded-2xl"
                    }`}
                  />
                  {isInCart ? (
                    <span className="bg-[#CA3B10] border border-[#C2BAB8] rounded-4xl py-2 flex items-center gap-1 justify-center w-[60%] -mt-5 cursor-pointer transition-colors">
                      <div className="flex items-center justify-around text-white w-full text-[15px]">
                        <AiFillMinusCircle
                          onClick={() => decrementQuantity(product.name)}
                          onKeyDown={(e) => handleKeyDown(e, () => decrementQuantity(product.name))}
                          tabIndex="0"
                          role="button"
                          aria-label={`Decrease quantity of ${product.name}`}
                          className="cursor-pointer"
                        />
                        <p>{quantity}</p>
                        <AiFillPlusCircle
                          onClick={() => incrementQuantity(product.name)}
                          onKeyDown={(e) => handleKeyDown(e, () => incrementQuantity(product.name))}
                          tabIndex="0"
                          role="button"
                          aria-label={`Increase quantity of ${product.name}`}
                          className="cursor-pointer"
                        />
                      </div>
                    </span>
                  ) : (
                    <span
                      onClick={() => addToCart(product)}
                      onKeyDown={(e) => handleKeyDown(e, () => addToCart(product))}
                      tabIndex="0"
                      role="button"
                      aria-label={`Add ${product.name} to cart`}
                      className="bg-white border border-[#C2BAB8] rounded-4xl py-2 flex items-center gap-1 justify-center w-[60%] -mt-5 cursor-pointer hover:bg-[#F5F0EF] transition-colors focus:outline-none focus:ring-2 focus:ring-[#B3705A]"
                    >
                      <BiCartAdd className="text-[#B3705A] font-medium text-2xl" />
                      <p className="text-[#332B29] font-semibold text-[12.5px]">
                        Add to Cart
                      </p>
                    </span>
                  )}
                </div>
                <p className="text-[#D0C6C4] font-medium mt-3">
                  {product.category}
                </p>
                <h1 className="text-[#372C2A] font-semibold">{product.name}</h1>
                <p className="text-[#9B664D] font-semibold">${product.price}</p>
              </div>
            );
          })}
        </div>
        <aside className="lg:w-[30%] w-full">
          <div className="w-full bg-white rounded-2xl pb-10 p-5 shadow-sm">
            <h1 className="font-bold text-[#B34022] text-start">
              Your Cart ({cart.length})
            </h1>

            {cart.length === 0 ? (
              <div className="flex flex-col items-center mt-6">
                <img src={empty} alt="Empty cart" className="w-32 mb-3" />
                <p className="text-[#938988] font-semibold text-[12px]">
                  Your added items will appear here
                </p>
              </div>
            ) : (
              <div className="mt-4">
                {cart.map((item) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-3 border-b border-[#F0E9E7]"
                  >
                    <div className="flex items-center gap-2 justify-between">
                      <div>
                        <p className="text-[#372C2A] font-medium text-sm">
                          {item.name}
                        </p>
                        <div className="flex items-center gap-2">
                          <p className="text-[#C93C0E] font-semibold text-xs">
                            {item.quantity}X
                          </p>
                          <p className="text-[#9B664D] font-semibold text-xs ml-1">
                            @{item.price}
                          </p>
                          <p className="text-[#9B664D] font-semibold text-xs">
                            ${item.price}
                          </p>
                        </div>
                      </div>
                    </div>
                    <GiCancel
                      onClick={() => removeFromCart(item.name)}
                      onKeyDown={(e) => handleKeyDown(e, () => removeFromCart(item.name))}
                      tabIndex="0"
                      role="button"
                      aria-label={`Remove ${item.name} from cart`}
                      className="text-[#C6C1C0] cursor-pointer focus:outline-none focus:text-[#B34022]"
                    />
                  </div>
                ))}

                <div className="mt-6 border-t border-[#F0E9E7] pt-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-[#6D635F] font-medium">Order Total:</p>
                    <p className="text-[#372C2A] font-semibold">
                      ${calculateTotal()}
                    </p>
                  </div>
                  <div>
                    <div className="py-2.5 mt-2 rounded-full bg-[#FCF8F5] text-[12px] flex items-center justify-center gap-2">
                      <img src={carbon} alt="" />{" "}
                      <p>
                        This is a <b>carbon-neutral</b> delivery
                      </p>
                    </div>
                    <button
                      ref={confirmButtonRef}
                      onClick={handleClick}
                      className="w-full bg-[#C93B0C] text-white font-medium py-2 rounded-full mt-2 hover:bg-[#943618] transition-colors cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#943618]"
                    >
                      Confirm Order
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </aside>
      </main>
      {showConfirm && (
        <div 
          className="flex fixed top-0 bottom-0 h-full left-0 right-0 bg-black/50 w-full items-center justify-center z-50"
          ref={modalRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="order-confirmation-title"
        >
          <Confirm
            cart={cart}
            total={calculateTotal}
            setCart={setCart}
            setShowConfirm={setShowConfirm}
          />
        </div>
      )}
    </div>
  );
}