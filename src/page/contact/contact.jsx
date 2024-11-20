// import { Instagram } from "@mui/icons-material/Instagram";
import { Instagram, LinkedIn, GitHub } from "@mui/icons-material";
import { B, TextShadow } from "../../minicomp/stylecomp";

const Contact = () => {
  const style = { width: "100%", height: "auto" };
  return (
    <div className="w-full h-fit flex justify-center text-white" id="contact">
      <div className="w-full md:w-3/4 flex flex-col justify-center p-5 space-y-10">
        <div className="text-3xl w-full md:text-6xl flex justify-center">
          <TextShadow>
            <B>Contact Me</B>
          </TextShadow>
        </div>
        <div className="text-center">
          jika terdapat hal yang ingin disampaikan silahkan menghubungi saya
          melalui
        </div>
        <div className="w-full flex justify-center space-x-5">
          <a
            className="hover:scale-125 transition w-1/6 sm:w-1/12"
            href="https://www.instagram.com/dhani.susilo/"
          >
            <Instagram style={style} />
          </a>
          <a
            className="hover:scale-125 transition w-1/6 sm:w-1/12"
            href="https://www.linkedin.com/in/dhani-susilo-781133236/"
          >
            <LinkedIn style={style} />
          </a>
          <a
            className="hover:scale-125 transition w-1/6 sm:w-1/12"
            href="https://github.com/DhaniSusilo"
          >
            <GitHub style={style} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
