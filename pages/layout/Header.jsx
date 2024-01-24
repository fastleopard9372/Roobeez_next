import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import clsx from "clsx";
import styles from "../../styles/Home.module.css";

const Header = () => {
  return (
    <div>
      <div className={clsx("header-section bg-light", styles.headerBackground)}>
        <div className={clsx("py-1 row position-relative", styles.headerHoneyComb)}></div>
        <div
          className={styles.honeycomb}
          style={{ width: "54px", height: "46px", top: "18px", left: "5px" }}
        >
          <img src="/media/icon/R_logo.png" width="" />
        </div>
        <div
          className={styles.honeycomb}
          style={{ width: "54px", height: "46px", top: "45px", left: "55px" }}
        >
          <img src="/media/icon/+.png" width="" />
        </div>
        <div
          className={styles.honeycomb}
          style={{ width: "54px", height: "46px", top: "18px", left: "105px" }}
        >
          <img src="/media/icon/book.png" width="" />
        </div>
        <div
          className={styles.honeycomb}
          style={{ width: "54px", height: "46px", top: "45px", left: "160px" }}
        >
          <img src="/media/icon/product_icon.svg" width="" />
        </div>
        <div
          className={styles.honeycomb}
          style={{ width: "63px", height: "54px", top: "15px", left: "217px" }}
        >
          <img src="/media/icon/message.png" width="" />
        </div>
        <div
          className={styles.honeycomb}
          style={{ width: "56px", height: "48px", top: "45px", left: "277px" }}
        >
          <img src="/media/icon/shop.png" width="" />
        </div>
        <Dropdown
          className={styles.honeycomb}
          style={{ width: "68px", height: "60px", top: "11px", left: "335px" }}
        >
          <Dropdown.Toggle variant="link" id="profile">
            <img
              src="/media/user.8b21d8a6.png"
              className={clsx("position-absolute ", styles.profile)}
              style={{ top: "10px", left: "14px" }}
            />
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1"> My Profile</Dropdown.Item>
            <Dropdown.Item href="#/action-2">My Activities</Dropdown.Item>
            <Dropdown.Item href="#/action-3">My Favorites</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Header;
