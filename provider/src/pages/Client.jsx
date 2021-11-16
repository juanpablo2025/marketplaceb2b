import React, { useEffect } from "react";

function Provider() {
  useEffect(() => {
    window.location.href = "http://159.203.177.18:3001/";
  }, []);

  return <div></div>;
}

export default Provider;
