// import { Outlet } from "react-router-dom";

// import { useRef } from "react";
import Header from "./header";
import About from "./page/about/about";
import Contact from "./page/contact/contact";
import Home from "./page/home/home";
import Project from "./page/project/project";
// /className="w-screen h-screen min-h-fit overflow-x-hidden bg-slate-500 relative"
const RootLayout = () => {
  // const aboutRef = useRef(null);
  return (
    <div className="w-screen h-screen overflow-x-hidden relative">
      <Header />
      <main
        className="min-h-fit min-w-fit bg-[#26aff9]"
        style={{ height: "100%" }}
      >
        {/* <Outlet></Outlet> */}
        <Home />
        <About />
        <Project />
        <Contact />
      </main>
      <footer className="w-full bg-black text-white py-4 text-center">
        <p>
          &copy; {new Date().getFullYear()} Dhani Susilo. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default RootLayout;
