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
      <Container id="about-me" titulo="Sobre mi">
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mb-12">
          <AboutMeBox
            texto="Experiencia"
            icono={<BiMedal className="text-2xl" />}
            extra="+2 años"
          />
          <AboutMeBox
            texto="Completados"
            icono={<GrBriefcase className="text-2xl" />}
            extra="+10 projectos"
          />
          <AboutMeBox
            texto="Soporte"
            icono={<BiSupport className="text-2xl" />}
            extra="Online 24/7"
          />
        </div>
        {/* <p className="text-gray-600 font-normal text-base text-center mb-10">
        Soy un Desarrollador Frontend que crea impresionantes páginas web con interfaces de usuario cautivadoras. Mi pasión y dedicación se traducen en soluciones web únicas y altamente efectivas. Siempre me esfuerzo por superar las expectativas del cliente, comprometiéndome con la excelencia en cada proyecto.
        </p> */}
        <a href={cv} download="CV_Daniel_Ramon_Solis_Medina" >
          <ButtonIcon
            texto="Descargar CV"
            icono={<AiOutlineFilePdf className="text-2xl text-white" />}
          />
        </a>
      </Container>
    </>
  );
};

export default AboutMe;
