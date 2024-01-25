import React from "react";
import clsx from "clsx";
import styles from "../styles/Home.module.css";
const Product = (props) => {
  const { _id, avatar, username, image, created_at, content, price } = props;

  return (
    <div className={styles.productItem}>
      <div className={clsx("position-relative", styles.productBanner)}>
        <div className="position-relative rounded">
          <img
            alt="product-img"
            src={image}
            decoding="async"
            data-nimg="1"
            className="myfeedimg"
            loading="lazy"
            style={{ color: "transparent" }}
          />
          <div className="wb_ProductPrice d-flex align-items-end flex-column p-0"></div>
        </div>
        <div className="user-part-2 d-flex justify-content-between w-100 p-1 pt-2 align-items-center">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div>
              <img
                alt=""
                src={avatar}
                width="30"
                height="30"
                decoding="async"
                data-nimg="1"
                className=""
                loading="lazy"
                style={{ color: "transparent" }}
              />
            </div>
            <div className="ms-2 flex-grow-1">
              <h6 className="text-black fw-bold m-0">
                <span>{username}</span>
              </h6>
            </div>
            <h6 className={clsx("fw-bold color-red px-1 mb-0", styles.priceBox)}>
              ${price.toFixed(2)}
            </h6>
          </div>
        </div>
        <div className="d-flex p-1">
          <div className={clsx(styles.mobProductName, "pt-2 px-1 flex-grow-1")}>{content}</div>
          <div className="d-flex justify-content-between align-items-center">
            <button type="button" className="cart-btn btn btn-primary">
              <svg
                stroke="currentColor"
                fill="currentColor"
                stroke-width="0"
                viewBox="0 0 16 16"
                color="white"
                height="18"
                width="18"
                xmlns="http://www.w3.org/2000/svg"
                style={{ color: "white" }}
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
