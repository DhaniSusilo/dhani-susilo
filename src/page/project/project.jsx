import { B, TextShadow } from "../../minicomp/stylecomp";
import hr1 from "../../assets/hr1.png";
import hr2 from "../../assets/hr2.png";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Project = () => {
  return (
    <div className="w-full h-full flex justify-center text-white" id="project">
      <div className="text-sm w-full h-full flex flex-col justify-center items-center text-center md:text-lg md:w-3/4 space-y-5">
        <div className="text-3xl w-full md:text-6xl">
          <TextShadow>
            <B>My Project</B>
          </TextShadow>
        </div>
        <div>
          <div>
            <B>Employee Management Systems</B>
          </div>
          <div>PT Hexaon Bussiness Mitrasindo sebagai Full Stack Developer</div>
        </div>
        <ImageCarousel />
        <div className="p-2">
          Sebuah website yang berfungsi untuk membatu pencatatan data, kinerja,
          serta alat bantu lain dalam kegiatan pekerjaan, sperti data karyawan,
          data absen, pengajuan izin dan cuti, hingga perhitungan gaji
        </div>
      </div>
    </div>
  );
};

export default Project;

const ImageCarousel = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isSliding, setIsSliding] = useState(false);
  const images = [hr1, hr2]; // Add your image sources here

  const handlePrev = () => {
    if (isSliding) return; // Prevent overlapping animations
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === 0 ? images.length - 1 : prevIndex - 1
      );
      setIsSliding(false);
    }, 500); // Match the animation duration
  };

  const handleNext = () => {
    if (isSliding) return; // Prevent overlapping animations
    setIsSliding(true);
    setTimeout(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
      setIsSliding(false);
    }, 500); // Match the animation duration
  };

  return (
    <div className="relative w-3/4 h-fit md:w-full shadow-md shadow-gray-800 rounded-lg flex items-center overflow-hidden hover:scale-105 transition">
      <div className="absolute z-10 w-full flex justify-between md:px-2 text-[#26aff9]">
        <button
          onClick={handlePrev}
          className="p-2 rounded-md opacity-75 hover:opacity-100 h-20 hover:scale-125 transition"
        >
          <FaChevronLeft size={"4vh"} />
        </button>
        <button
          onClick={handleNext}
          className="p-2 rounded-md opacity-75 hover:opacity-100 h-20 hover:scale-125 transition"
        >
          <FaChevronRight size={"4vh"} />
        </button>
      </div>

      <div
        className="flex transition-transform duration-300 ease-in-out"
        style={{
          transform: `translateX(-${currentImageIndex * 100}%)`,
        }}
      >
        <img src={hr1} alt="" className="w-full h-auto flex-shrink-0" />
        <img src={hr2} alt="" className="w-full h-auto flex-shrink-0" />
      </div>
    </div>
  );
};
