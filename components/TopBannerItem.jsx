import React from "react";
import clsx from "clsx";
import Link from "next/link";
import styles from "../styles/Home.module.css";
const TopBannerItem = (props) => {
  const { image, title, content, href } = props;
  return (
    <div className={styles.carouselCell}>
      <img className={styles.carouselImage} src={image} />
      <div className={styles.carouselText}>
        <h1 className={clsx(styles.carouselTextTitle, "m-0 fs-3")}>{title}</h1>
        <h4 className={clsx(styles.carouselTextContent, "m-0 fs-3")}>{content}</h4>
        <Link className={styles.more} href={href}>
          See More
        </Link>
      </div>
    </div>
  );
};

export default TopBannerItem;
