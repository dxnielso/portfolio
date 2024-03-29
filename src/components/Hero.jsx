import ButtonIcon from "./ButtonIcon";
import { AiOutlineSend, AiOutlineArrowDown, AiOutlineGithub, AiOutlineLinkedin, AiOutlineFilePdf } from "react-icons/ai";
import { Link } from "react-scroll";
import foto from "../assets/foto2.png";
import cv from '../assets/CV_Daniel_Ramon_Solis_Medina.pdf'

const Hero = () => {
  return (
    <main
      className="lg:h-[calc(100vh-80px)] w-full flex flex-col justify-center items-center gap-y-10 lg:gap-y-16 xl:gap-y-20 sm:px-32 lg:px-40 xl:px-40 overflow-hidden"
      id="home"
    >
      <div className="flex flex-col-reverse lg:flex-row justify-center items-center gap-10">
        <div className="flex flex-col gap-y-5 lg:w-1/2" data-aos="fade-right">
          <h1 className="text-6xl font-semibold text-gray-900">Daniel Solís</h1>
          <h2 className="text-gray-800 text-2xl font-medium">
            Frontend Developer
          </h2>
          <div className="flex sm:hidden justify-start items-center gap-x-5 mb-5">
            <a href="https://github.com/dxnielso" target="_blank">
              <AiOutlineGithub className="text-3xl text-gray-900 duration-200 hover:opacity-80" />
            </a>
            <a href="https://www.linkedin.com/in/dxnielso/" target="_blank">
              <AiOutlineLinkedin className="text-3xl text-gray-900 duration-200 hover:opacity-80" />
            </a>
            <a href={cv} download="CV_Daniel_Ramon_Solis_Medina">
              <AiOutlineFilePdf className="text-3xl text-gray-900 duration-200 hover:opacity-80" />
            </a>
          </div>
          <p className="text-gray-500 font-normal text-base">
            Soy estudiante y desarrollador web frontend, comprometido con la
            calidad, la excelencia y el aprendizaje continuo para crear
            soluciones web efectivas y atractivas.
          </p>

          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            offset={-80}
            duration={400}
            className="cursor-pointer hidden md:block"
          >
            <ButtonIcon
              texto="Contáctame"
              icono={<AiOutlineSend className="text-2xl text-white" />}
            />
          </Link>
        </div>
        <div data-aos="zoom-in-up" className="lg:w-1/2">
          <img src={foto} alt="Daniel Solís" />
        </div>
      </div>
      <Link
        activeClass="active"
        to="about-me"
        spy={true}
        smooth={true}
        offset={-80}
        duration={400}
        className="cursor-pointer hidden md:block animate-bounce"
      >
        <AiOutlineArrowDown className="text-2xl" />
      </Link>
    </main>
  );
};

export default Hero;
