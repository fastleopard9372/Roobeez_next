import React from "react";
import styles from "../styles/Home.module.css";
const Ads = (props) => {
  const { _id, created_at, content, image, title } = props;

  return (
    <div>
      <img src={image} />
      <div class={styles.clickTextArea}>
        <h1>{title}</h1>
        <h4>{content}</h4>
      </div>
    </div>
  );
};

export default Ads;
