import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMagnifyingGlass,
  faUser,
  faHeart,
  faCartShopping,
} from "@fortawesome/free-solid-svg-icons";

function header() {
  return (
    <div className="App-header">
      <section className="header-first">
        <div className="row">
          <div className="header-contact">
            <ul className="header-contact-left">
              <li className="header-contact-left-mail">
                <FontAwesomeIcon icon={faEnvelope} className="icon-contact" />{" "}
                sample@example.com
              </li>
              <li className="header-contact-left-phone">
                <FontAwesomeIcon icon={faPhone} className="icon-contact" />
                0000 - 123456789
              </li>
            </ul>

            <div className="header-contact-right">
              <form action="">
                <select name="" id="" className="header-contact-right-form">
                  <option value="USD">USD</option>
                </select>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="header-second">
        {/* LOGO */}
        <div className="header-logo">
          <div className="header-logo-row">
            <div className="left_icon">
              <a href="/search" className="left_icon_icon">
                <FontAwesomeIcon icon={faMagnifyingGlass} />
              </a>
              <Link
                to="/login"
                className="left_icon_icon"
                style={{ marginLeft: "13px" }}
              >
                <FontAwesomeIcon icon={faUser} />
              </Link>
            </div>
            <div className="center_logo">
              <a href="/">
                <img
                  src="https://dt-cakes-bakes.myshopify.com/cdn/shop/files/logo_1_300x300.png?v=1623817950"
                  alt="logo"
                  style={{ maxWidth: "150px" }}
                />
              </a>
            </div>
            <div className="right_icon">
              <a href="/favourite" className="right_icon_icon">
                <FontAwesomeIcon icon={faHeart} />
              </a>
              <a href="/cart" className="right_icon_icon cart_count">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  style={{ marginLeft: "13px" }}
                />
                <div
                  id="CartCount"
                  data-cart_item_count="1"
                  className="site-header__cart-count"
                >
                  <span className="number_cart_count">1</span>
                </div>
              </a>
            </div>
          </div>
        </div>

        {/* MENU */}
        <div className="header-menu">
          <nav className="menu_container">
            <ul className="menu_ul">
              <li className="menu_li">
                <a href="/home" className="menu_li_link">
                  Home
                </a>
              </li>

              <li className="menu_li">
                <a href="/collections" className="menu_li_link">
                  Collection
                  <span class="menu-icon-dropdown"></span>
                </a>

                <div className="header-sub-menu">
                  <div className="collections-dropdown">
                    <ul className="header-dropdown-list">
                      <li className="collections-dropdown-product">
                        <div className="product_item-image">
                          <a href="/products/angel-food-cake">
                            <img
                              src={require("../../Images/header-menu/product13.jpg")}
                              alt="product13"
                              className="product_item-image-detail"
                            />
                          </a>
                        </div>
                        <div className="product_item-info">
                          <a
                            class="product_item-info__title"
                            href="/products/angel-food-cake"
                          >
                            Angel Food Cake
                          </a>
                          <span class="product_item-info__price">$369.00</span>
                        </div>
                      </li>
                      <li className="collections-dropdown-product">
                        <div className="product_item-image">
                          <a href="/products/angel-food-cake">
                            <img
                              src={require("../../Images/header-menu/product32.jpg")}
                              alt="product13"
                              className="product_item-image-detail"
                            />
                          </a>
                        </div>
                        <div className="product_item-info">
                          <a
                            class="product_item-info__title"
                            href="/products/angel-food-cake"
                          >
                            Celebration Cake
                          </a>
                          <span class="product_item-info__price">$469.00</span>
                        </div>
                      </li>
                      <li className="collections-dropdown-product">
                        <div className="product_item-image">
                          <a href="/products/angel-food-cake">
                            <img
                              src={require("../../Images/header-menu/product21.jpg")}
                              alt="product13"
                              className="product_item-image-detail"
                            />
                          </a>
                        </div>
                        <div className="product_item-info">
                          <a
                            class="product_item-info__title"
                            href="/products/angel-food-cake"
                          >
                            Children's Cup Cake
                          </a>
                          <span class="product_item-info__price">$300.00</span>
                        </div>
                      </li>
                      <li className="collections-dropdown-product">
                        <div className="product_item-image">
                          <a href="/products/angel-food-cake">
                            <img
                              src={require("../../Images/header-menu/product23.jpg")}
                              alt="product13"
                              className="product_item-image-detail"
                            />
                          </a>
                        </div>
                        <div className="product_item-info">
                          <a
                            class="product_item-info__title"
                            href="/products/angel-food-cake"
                          >
                            Ellen Cup Cake
                          </a>
                          <span class="product_item-info__price">$528.00</span>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu_li">
                <a href="/collections/all" className="menu_li_link">
                  Shop
                  <span class="menu-icon-dropdown"></span>
                </a>

                <div className="header-sub-menu">
                  <div className="shop-dropdown">
                    <ul className="header-dropdown-list">
                      <li className="shop-dropdown-menu">
                        <h5>
                          <a href="/">Butter Cake</a>
                        </h5>
                        <ul className="shop-dropdown-menu-detail">
                          <li>
                            <a href="/">A World Of Cup Cake</a>
                          </li>
                          <li>
                            <a href="/">Angel Food Cake</a>
                          </li>
                          <li>
                            <a href="/">Banana Snack Cake</a>
                          </li>
                          <li>
                            <a href="/">Birthday Giant Cup Cake</a>
                          </li>
                        </ul>
                      </li>
                      <li className="shop-dropdown-menu">
                        <h5>
                          <a href="/">Pound Cake</a>
                        </h5>
                        <ul className="shop-dropdown-menu-detail">
                          <li>
                            <a href="/">Celebration Cake</a>
                          </li>
                          <li>
                            <a href="/">Children's Cup Cake</a>
                          </li>
                          <li>
                            <a href="/">Chocolate Cake</a>
                          </li>
                          <li>
                            <a href="/">Chocolate Cup Cake</a>
                          </li>
                        </ul>
                      </li>
                      <li className="shop-dropdown-menu">
                        <h5>
                          <a href="/">Sponge Cake</a>
                        </h5>
                        <ul className="shop-dropdown-menu-detail">
                          <li>
                            <a href="/">Classic Carrot Cake</a>
                          </li>
                          <li>
                            <a href="/">Cookies Crispy Cake</a>
                          </li>
                          <li>
                            <a href="/">Deeper Cup Cake</a>
                          </li>
                          <li>
                            <a href="/">Ellen Cup cake</a>
                          </li>
                        </ul>
                      </li>
                      <li className="shop-dropdown-menu">
                        <h5>
                          <a href="/">Chocolate Cake</a>
                        </h5>
                        <ul className="shop-dropdown-menu-detail">
                          <li>
                            <a href="/">Belgium Cho Cake</a>
                          </li>
                          <li>
                            <a href="/">Lava Cho Cake</a>
                          </li>
                          <li>
                            <a href="/">Black Forest Cake</a>
                          </li>
                          <li>
                            <a href="/">Coco Cup Cake</a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>

              <li className="menu_li">
                <a href="/collections/best" className="menu_li_link">
                  Cookies Cakes
                </a>
              </li>
              <li className="menu_li">
                <a href="/collections/butter-scotch" className="menu_li_link">
                  Wedding Cakes
                </a>
              </li>
              <li className="menu_li">
                <a href="/collections/chocolate" className="menu_li_link">
                  Cup Cakes
                </a>
              </li>

              <li className="menu_li">
                <a href="/pages/about-us" className="menu_li_link">
                  Pages
                  <span class="menu-icon-dropdown"></span>
                </a>

                <div className="header-sub-menu page">
                  <div className="pages-dropdown">
                    <ul className="header-dropdown-list page">
                      <li className="header-dropdown-contact">
                        <a href="/about">About</a>
                      </li>
                      <li className="header-dropdown-contact">
                        <a href="/contact">Contact</a>
                      </li>
                      <li className="header-dropdown-contact">
                        <a href="/blog">Blog</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </li>
            </ul>
          </nav>
        </div>
      </section>
    </div>
  );
}

export default header;
