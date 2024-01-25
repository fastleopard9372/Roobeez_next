import React from "react";

const MobileNavIcon = (props) => {
  const { icon_path, href } = props;
  const handleClick = () => {
    console.log(href);
  };
  return (
    <button type="button" className="bg-transparent border-0 p-2 rounded-pill btn btn-primary">
      <img
        alt=""
        srcset={`${icon_path}, ${icon_path}`}
        src={icon_path}
        width="24"
        height="24"
        decoding="async"
        data-nimg="1"
        loading="lazy"
        style={{ color: "transparent" }}
        onClick={handleClick}
      />
    </button>
  );
};

export default MobileNavIcon;
