import React, { useState } from "react";
import Form from "react-bootstrap/Form";

import styles from "../../styles/Home.module.css";
function MSelect(props) {
  const { data } = props;
  const [select, setSelect] = useState(data[0]);
  const handleClick = (e) => {
    setSelect(e);
  };
  return (
    <Form.Select aria-label="All" className={styles.formSelect} style={{ width: "120px" }}>
      {data.map((val, index) => (
        <option value={index} onClick={(e) => handleClick(val)}>
          {val}
        </option>
      ))}
    </Form.Select>
  );
}

export default MSelect;
