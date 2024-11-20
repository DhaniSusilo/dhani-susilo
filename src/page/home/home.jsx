import logo from "../../assets/logo.svg";
import StandImg from "../../assets/StandImg.svg";

const Home = () => {
  //h-[calc(100%-66.71px)]
  return (
    <div
      className="w-full h-full  relative flex justify-center bg-[#26aff9] overflow-hidden"
      id="home"
    >
      <div className="w-full h-full sm:w-3/4 sm:items-start judul font-jost font-bold text-[20vh] xl:text-[15vw] text-white flex flex-col justify-center">
        <div className="w-fit h-fit">
          <div className="z-0 sm:ml-20 lg:ml-40 lg:left-0">DEV</div>
        </div>
        <div className="z-10 ml-10 sm:ml-40 lg:ml-72">ELO</div>
        <div className="z-20 sm:ml-32 lg:ml-96">PER</div>
      </div>
      <div className="w-64 sm:w-2/5 md:w-1/3 lg:w-1/4 h-fit absolute right-0 bottom-0 flex justify-end">
        <div className="z-20 absolute bottom-5 left-1/2 -translate-x-1/2  text-white font-bold w-full flex justify-center text-center font-jost text-[10vw] sm:text-[5vw] md:text-[3vw]">
          Dhani Susilo
        </div>
        <img className="w-full z-10 rounded-s-2xl" src={StandImg} alt="" />
      </div>
      <img
        className="absolute top-0 right-0 translate-x-1/2 opacity-30"
        src={logo}
        alt=""
      />
    </div>
  );
};

export default Home;
