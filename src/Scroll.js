import React from "react";

function Scroll({ children }) {
  //   if (true) {
  //     throw new Error("oooooops error");
  //   }
  return (
    <div
      style={{
        overflowY: "scroll",
        border: "1px solid black",
        height: "800px",
      }}
    >
      {children}
    </div>
  );
}

export default Scroll;
