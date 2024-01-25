import React from "react";
import clsx from "clsx";
import styles from "../styles/Home.module.css";
const Post = (props) => {
  const { _id, avatar, username, created_at, content, like_cnt, answer_cnt } = props;

  return (
    <div className={clsx("position-relative", styles.postItem)}>
      <div className={clsx("d-flex justify-content-between w-100 p-1 pt-2 align-items-center")}>
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
          <h6 className="text-secondary px-1 mb-0 fle">{created_at}</h6>
        </div>
      </div>
      <hr className="m-2" />
      <div className={clsx(styles.mobProductName, "p-1 mb-1 flex-grow-1")}>{content}</div>
      <div
        className={clsx(styles.postImg, "position-relative")}
        style={{ backgroundImage: "url(/media/back.jpg)" }}
      >
        <div className={styles.postAction}>
          <div>
            <img src="/media/icon/likes.svg" alt="" />
            <p className="mb-1">{like_cnt}</p>
          </div>
          <div>
            <img src="/media/icon/message.svg" alt="" />
            <p className="mb-1">{answer_cnt}</p>
          </div>
          <a href="#">Reply</a>
          <a href="#">Share</a>
        </div>
      </div>
    </div>
  );
};

export default Post;
