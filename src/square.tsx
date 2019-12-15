import React from "react";

export default function Square(props: any): JSX.Element {
  return (
    <div
      style={{
        backgroundColor: props.color,
        width: "100px",
        height: "100px"
      }}
    ></div>
  );
}
