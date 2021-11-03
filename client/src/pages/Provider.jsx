import React, { useEffect } from "react";

function Provider() {
  useEffect(() => {
    window.location.href = "http://nodox.co:8801/";
  }, []);

  return <div></div>;
}

export default Provider;
