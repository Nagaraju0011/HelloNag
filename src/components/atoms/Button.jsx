import React from "react";

function Button(props) {
  return (
    <>
      <Button variant={props.variant} size={props.size}>
        {props.text}
      </Button>
    </>
  );
}

export default Button;
