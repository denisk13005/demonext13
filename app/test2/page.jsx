"use client";
import { useState, useEffect } from "react";

const page = () => {
  const [load, setLoad] = useState(false);
  useEffect(() => {
    setLoad(true);
    setTimeout(() => {
      setLoad(false);
    }, 2000);
  }, []);
  if (load) {
    return <div>loader</div>;
  } else {
    return <div>page</div>;
  }
};

export default page;
