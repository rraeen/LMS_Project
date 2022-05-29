import React from "react";

function Tech({ technologies = "" }) {
  return (
    <span
      style={{
        background: "#086288",
        borderRadius: "8px",
        margin: "3px",
        padding: "3px",
        color: "white",
      }}
    >
      {" "}
      {technologies}
    </span>
  );
}

export default Tech;
