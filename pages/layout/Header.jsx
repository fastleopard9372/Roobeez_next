import React from "react";
import Link from "next/link";
import { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { Search } from "react-bootstrap-icons";
import clsx from "clsx";
import styles from "../../styles/Home.module.css";
import useWindowDimensions from "../../utils/useWindowDimensions";
const Header = () => {
  const { width } = useWindowDimensions();
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (width >= 768) {
      setMobile(false);
    } else setMobile(true);
  }, [width]);
  return mobile ? (
    <div>
      <div className={clsx(" bg-light", styles.headerBackground, styles)}>
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
  ) : (
    <div className="header">
      <div className="header-banner">
        <div className="pb-3 ">
          <div className="align-items-center row">
            <div className="p-0 col-lg-2 col-12">
              <div className="logo-text d-flex justify-content-start align-items-center">
                <img
                  className="img-fluid"
                  alt="img"
                  src="/media/logo.8e018b1e.png"
                  style={{ cursor: "pointer" }}
                />
              </div>
            </div>
            <div className="col-lg-5 col-12 mt-3">
              <InputGroup className="mb-3">
                <Form.Select
                  aria-label="All"
                  className="formSelect leftRound"
                  style={{ width: "30px" }}
                >
                  <option value="All">All</option>
                  <option value="Posts">Posts</option>
                  <option value="Products">Products</option>
                  <option value="Services">Services</option>
                </Form.Select>
                <Form.Control type="text" placeholder="Keyword" />
                <Form.Control type="text" placeholder="Location(City, State)" />
                <InputGroup.Text className="searchBtn">
                  <Form.Label className="mx-1 my-0">
                    <Search />
                  </Form.Label>
                </InputGroup.Text>
              </InputGroup>
            </div>
            <div className="after-login-button col-lg-5 col-12">
              <div className="button-part d-flex justify-content-end align-items-center gap-2">
                <div className={styles.honeycomb} style={{ width: "54px", height: "46px" }}>
                  <img src="/media/icon/+.png" width="" />
                </div>
                <div className={styles.honeycomb} style={{ width: "54px", height: "46px" }}>
                  <img src="/media/icon/message.png" width="" />
                </div>
                <div className={styles.honeycomb} style={{ width: "54px", height: "46px" }}>
                  <img src="/media/icon/shop.png" width="" />
                </div>
                <Dropdown
                  className={clsx(styles.honeycomb, "position-relative")}
                  style={{ width: "54px", height: "46px" }}
                >
                  <Dropdown.Toggle variant="link" id="profile1">
                    <img
                      src="/media/user.8b21d8a6.png"
                      className={clsx("position-absolute ", styles.profile)}
                      style={{ top: "7px", left: "11px" }}
                    />
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1"> My Profile</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">My Activities</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">My Favorites</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <button className="btn-danger btn btn-rounded signup pt-1 pb-1">Sign up</button>
                <button className="btn-blue btn btn-rounded login pt-1 pb-1">Log in</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sub-header">
        <div className="container">
          <div className="align-items-center row">
            <div className="col-lg-8 col-sm-12">
              <div className="button-part">
                <div className="d-flex align-items-baseline">
                  <a className="text-capitalize text-decoration-none fw-normal text-black" href="/">
                    Home
                  </a>
                </div>
                <div className="d-flex align-items-baseline">
                  <Link
                    className="text-capitalize text-decoration-none fw-normal text-black"
                    href="/feeds"
                  >
                    Latest Posts
                  </Link>
                </div>
                <div className="d-flex align-items-baseline">
                  <Link
                    className="text-capitalize text-decoration-none fw-normal text-black"
                    href="/products"
                  >
                    Products
                  </Link>
                </div>
                <div className="d-flex align-items-baseline">
                  <Link
                    className="text-capitalize text-decoration-none fw-normal text-black"
                    href="/services"
                  >
                    Services
                  </Link>
                </div>
                <div className="d-flex align-items-baseline">
                  <Link
                    className="text-capitalize text-decoration-none fw-normal text-black"
                    href="/reviews"
                  >
                    Reviews
                  </Link>
                </div>
                <div className="d-flex align-items-baseline">
                  <Link
                    className="text-capitalize text-decoration-none fw-normal text-black"
                    href="/learn"
                  >
                    Learning Library
                  </Link>
                </div>
              </div>
            </div>
            <div className="text-end cursor-pointer col-lg-4 col-sm-12"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
