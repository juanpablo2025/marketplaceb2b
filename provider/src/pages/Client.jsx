import React, { useEffect } from "react";

function Client() {
  useEffect(() => {
    window.location.href = "http://localhost:3000/";
  }, []);

  return <div></div>;
}

export default Client;
