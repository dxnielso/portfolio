import AboutMeBox from "./AboutMeBox";
import ButtonIcon from "./ButtonIcon";
import Container from "./Container";
import { BiMedal, BiSupport } from "react-icons/bi";
import { GrBriefcase } from "react-icons/gr";
import { AiOutlineFilePdf } from "react-icons/ai";
import cv from '../assets/CV_Daniel_Ramon_Solis_Medina.pdf'

const AboutMe = () => {
  return (
    <>
      <Container id="about-me">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">About Me</h2>
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 mb-8">
          <AboutMeBox
            texto="Experience"
            icono={<BiMedal className="text-xl" />}
            extra="+1 year"
          />
          <AboutMeBox
            texto="Completed"
            icono={<GrBriefcase className="text-xl" />}
            extra="+10 projects"
          />
          <AboutMeBox
            texto="Support"
            icono={<BiSupport className="text-xl" />}
            extra="Online 24/7"
          />
        </div>
        <p className="text-gray-600 font-normal text-base text-center mb-8">
          Frontend developer, I create web pages with UI/UX user interface. I am a passionate frontend web developer, dedicated to creating unique and effective solutions. I always seek to learn and improve to offer quality work that exceeds customer expectations.
        </p>
        <a href={cv} download="CV_Daniel_Ramon_Solis_Medina">
          <ButtonIcon
            texto="Download CV"
            icono={<AiOutlineFilePdf className="text-2xl text-white" />}
          />
        </a>
      </Container>
    </>
  );
};

export default AboutMe;
