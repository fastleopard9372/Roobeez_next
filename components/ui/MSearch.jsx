import React from "react";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { Search } from "react-bootstrap-icons";
function MSearch(props) {
  const { name, placeholder } = props;
  return (
    <InputGroup style={{ maxWidth: "400px" }}>
      <Form.Control placeholder={placeholder} aria-label={name} aria-describedby={name} />
      <InputGroup.Text id={name} style={{ background: "white" }}>
        <Search />
      </InputGroup.Text>
    </InputGroup>
  );
}

export default MSearch;
