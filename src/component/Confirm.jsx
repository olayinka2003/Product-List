import { AiOutlineCheckCircle } from "react-icons/ai";
import React from "react";
import data from "../data/data.json";
import { GiCancel } from "react-icons/gi";

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

export default function Confirm({ cart, total, setCart, setShowConfirm }) {
  const newOrder = () => {
    setCart([]);
    setShowConfirm(false);
  };
  return (
    <div className="lg:w-[30%] md:w-[50%] w-[90%] mx-auto px-5 py-8 bg-white rounded-2xl shadow-2xl">
      <AiOutlineCheckCircle className="text-[#399475] text-3xl" />
      <h1 className="text-[#3B3431] font-semibold text-2xl">Order Confirmed</h1>
      <p>We hope you enjoy your food</p>
      <div className="mt-4">
        {cart.map((item) => (
          <div
            key={item.name}
            className="flex items-center justify-between py-3 border-b border-[#F0E9E7]"
          >
            <div className="flex items-center gap-2 justify-between">
              <img
                src={productMap[item.image.thumbnail]}
                alt={item.name}
                className="w-12 h-12 rounded-lg object-cover"
              />
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
            <b>${item.price}</b>
          </div>
        ))}

        <div className="mt-6 border-t border-[#F0E9E7] pt-4">
          <div className="flex justify-between mb-2">
            <p className="text-[#6D635F] font-medium">Order Total:</p>
            <p className="text-[#372C2A] font-semibold">${total()}</p>
          </div>
          <div>
            <button
              onClick={newOrder}
              className="w-full bg-[#C93B0C] text-white font-medium py-2 rounded-full mt-2 hover:bg-[#943618] transition-colors cursor-pointer"
            >
              Start New Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
