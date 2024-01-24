import React from "react";

const Header = () => {
  return (
    <div>
      <div className="header-section bg-light header-background">
        <div className="py-1 row position-relative header-honey-comb"></div>
        <div
          className="honeycomb"
          style={{ width: "54px", height: "46px", top: "18px", left: "5px" }}
        >
          <img src="/media/icon/R_logo.png" width="" />
        </div>
        <div
          className="honeycomb"
          style={{ width: "54px", height: "46px", top: "45px", left: "55px" }}
        >
          <img src="/media/icon/+.png" width="" />
        </div>
        <div
          className="honeycomb"
          style={{ width: "54px", height: "46px", top: "18px", left: "105px" }}
        >
          <img src="/media/icon/book.png" width="" />
        </div>
        <div
          className="honeycomb"
          style={{ width: "54px", height: "46px", top: "45px", left: "160px" }}
        >
          <img src="/media/icon/product_icon.svg" width="" />
        </div>
        <div
          className="honeycomb"
          style={{ width: "63px", height: "54px", top: "15px", left: "217px" }}
        >
          <img src="/media/icon/message.png" width="" />
        </div>
        <div
          className="honeycomb"
          style={{ width: "56px", height: "48px", top: "45px", left: "277px" }}
        >
          <img src="/media/icon/shop.png" width="" />
        </div>
        <div
          className="honeycomb dropdown-toggle"
          data-bs-toggle="dropdown"
          style={{ width: "68px", height: "60px", top: "11px", left: "335px" }}
        >
          <img src="/media/user.8b21d8a6.png" className="position-absolute profile" width="" />
        </div>
        <ul className="dropdown-menu">
          <li>
            <a className="dropdown-item" href="#">
              My Profile
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              My Activities
            </a>
          </li>
          <li>
            <a className="dropdown-item" href="#">
              My Favorites
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
