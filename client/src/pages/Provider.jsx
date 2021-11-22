import React, { useEffect } from "react";

function Provider() {
  useEffect(() => {
    window.location.href = "http://localhost:3002";
  }, []);

  return <div></div>;
}

export default Provider;
