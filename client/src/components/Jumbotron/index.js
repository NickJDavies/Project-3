import React from "react";

function Jumbotron({ children }) {
  return (
    <div style={{ height: 300, clear: "both", paddingTop: 120, paddingBottom: 250, textAlign: "center" }} >
      {children}
    </div>
  );
}

export default Jumbotron;
