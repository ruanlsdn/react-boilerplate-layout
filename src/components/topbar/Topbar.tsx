import React, { useEffect } from "react";
import {
  IoMenuOutline,
  IoSearchOutline,
  IoPersonOutline,
} from "react-icons/io5";
import { useStateContext } from "../../contexts/StateContext";
import "./topbar.css";

const Topbar = () => {
  const { screenSize, setScreenSize, setSearchText, setIsSidebarActive } =
    useStateContext();

  useEffect(() => {
    const handleResize = () => setScreenSize(window.innerWidth);
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (screenSize! <= 900) {
      setIsSidebarActive(false);
    } else {
      setIsSidebarActive(true);
    }
  }, [screenSize]);

  return (
    <div className="topbar">
      <div className="topbar-options">
        <button onClick={() => setIsSidebarActive((prev) => !prev)}>
          <IoMenuOutline size={25} />
        </button>
        <div className="topbar-options-form">
          <input
            placeholder="Search something..."
            onChange={(event) => setSearchText(event.target.value)}
          />
          <button onClick={() => {}}>
            <IoSearchOutline size={20} />
          </button>
        </div>
      </div>
      <div className="topbar-user">
        <button onClick={() => {}}>
          <IoPersonOutline size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default Topbar;
