import { useEffect } from "react";
import logo from "./assets/logo.svg";

const Header = () => {
  const navBasic =
    "h-full p-2 flex items-center text-white rounded-lg font-jost hover:underline hover:scale-125 transition duration-300 ease-in-out";

  const goThere = (path) => {
    const element = document.getElementById(path);
    element?.scrollIntoView({
      behavior: "smooth",
    });
    console.log(element ? true : false);
  };

  useEffect(() => {
    goThere("home");
  }, []);
  return (
    <header
      className="top-0 left-0 sticky w-full flex flex-row justify-between space-x-10 p-4 bg-[#26AFF9] z-50 shadow-sm shadow-black"
      style={{ height: "10%" }}
    >
      <div className=" h-full min-w-fit flex items-center">
        <img src={logo} alt="" className="w-10" />
      </div>
      <div className="h-full w-fit flex items-center space-x-0 sm:space-x-10 md:space-x-20">
        <button onClick={() => goThere("home")} className={navBasic}>
          Home
        </button>
        <button onClick={() => goThere("about")} className={navBasic}>
          About
        </button>
        <button onClick={() => goThere("works")} className={navBasic}>
          Works
        </button>
        <button onClick={() => goThere("contact")} className={navBasic}>
          Contact
        </button>
      </div>
    </header>
  );
};

export default Header;
