import React, { useEffect } from "react";

function Provider() {
  useEffect(() => {
    window.location.href = "http://nodox.co/";
  }, []);

  return <div></div>;
}

export default Provider;
