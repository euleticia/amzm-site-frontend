import React from "react";

const SimpleDivComponent = ({ text, backgroundColor }) => {
  const divStyle = {
    backgroundColor: backgroundColor || "#ebebeb",
    padding: "30px",
  };

  return (
    <div style={divStyle}>
      <h3
        style={{
          fontFamily: "Prompt",
          textAlign: "center",
          color: "black",
          fontSize: "36px",
          fontWeight: '400'
        }}
      >
        {text}
      </h3>
    </div>
  );
};

export default SimpleDivComponent;
