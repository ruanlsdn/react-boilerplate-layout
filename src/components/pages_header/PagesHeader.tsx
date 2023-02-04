import React from "react";
import { useStateContext } from "../../contexts/StateContext";
import "./pages_header.css";

const PagesHeader = () => {
  const { activeRoute } = useStateContext();
  return (
    <div className="header">
      <p>{activeRoute.title}</p>
      <p>{activeRoute.description}</p>
    </div>
  );
};

export default PagesHeader;
