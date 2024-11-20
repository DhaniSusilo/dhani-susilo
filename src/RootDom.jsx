// import { Outlet } from "react-router-dom";

// import { useRef } from "react";
import Header from "./header";
import About from "./page/about/about";
import Home from "./page/home/home";
import Works from "./page/work/work";
// /className="w-screen h-screen min-h-fit overflow-x-hidden bg-slate-500 relative"
const RootLayout = () => {
  // const aboutRef = useRef(null);
  return (
    <div className="w-screen h-screen overflow-x-hidden relative">
      <Header />
      <main className="min-h-fit min-w-fit " style={{ height: "100%" }}>
        {/* <Outlet></Outlet> */}
        <Home />
        <About />
        <Works />
      </main>
    </div>
  );
};

export default RootLayout;
