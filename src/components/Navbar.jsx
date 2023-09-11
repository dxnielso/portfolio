import { TbLayoutGrid } from "react-icons/tb";
import { GrClose } from "react-icons/gr";
import {
  AiOutlineHome,
  AiOutlineUser,
  AiOutlineFileDone,
  AiOutlinePicture,
  AiOutlineSend,
} from "react-icons/ai";
import { BsBriefcase } from "react-icons/bs";

import { useEffect, useState } from "react";
import LinkMenuPhone from "./LinkMenuPhone";
import LinkMenu from "./LinkMenu";

const Navbar = () => {
  const [mostrarMenu, setMostrarMenu] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Activar evento de resize y scroll
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Detectar cuando es una pantalla de laptop
  useEffect(() => {
    if (windowWidth >= 768) setMostrarMenu(false);
  }, [windowWidth]);

  return (
    <>
      {/* laptop menu */}
      <nav className="hidden md:flex">
        <ul className="flex gap-x-7">
          <LinkMenu texto="Inicio" to="home" />
          <LinkMenu texto="Sobre mi" to="about-me" />
          <LinkMenu texto="Habilidades" to="skills" />
          <LinkMenu texto="Servicios" to="services" />
          <LinkMenu texto="Portafolio" to="portfolio" />
          <LinkMenu texto="Contacto" to="contact" />
        </ul>
      </nav>

      {/* Button cellphone */}
      <div className="md:hidden">
        <button onClick={() => setMostrarMenu(!mostrarMenu)}>
          <TbLayoutGrid className="text-2xl" />
        </button>
      </div>

      {/* Menu cellphone */}
      <div
        className={`${
          windowWidth >= 768 && "hidden"
        } absolute right-0 left-0 bottom-0 h-[300px] bg-white duration-200 ${
          mostrarMenu ? "translate-y--[300px]" : "translate-y-[300px]"
        } rounded-tr-lg rounded-tl-lg flex flex-col gap-y-3 p-10 border-t border-gray-100`}
      >
        {/* opciones */}
        <div className="flex-1">
          <ul className="grid grid-cols-3 grid-rows-2 w-full h-full">
            <LinkMenuPhone
              icono={<AiOutlineHome className="text-2xl" />}
              texto="Inicio"
              to="home"
            />
            <LinkMenuPhone
              icono={<AiOutlineUser className="text-2xl" />}
              texto="Sobre mi"
              to="about-me"
            />
            <LinkMenuPhone
              icono={<AiOutlineFileDone className="text-2xl" />}
              texto="Habilidades"
              to="skills"
            />
            <LinkMenuPhone
              icono={<BsBriefcase className="text-2xl" />}
              texto="Servicios"
              to="services"
            />
            <LinkMenuPhone
              icono={<AiOutlinePicture className="text-2xl" />}
              texto="Portafolio"
              to="portfolio"
            />
            <LinkMenuPhone
              icono={<AiOutlineSend className="text-2xl" />}
              texto="Contacto"
              to="contact"
            />
          </ul>
        </div>

        {/* ocultar menu */}
        <div className="w-full h-fit flex justify-end items-center">
          <button onClick={() => setMostrarMenu(!mostrarMenu)}>
            <GrClose className="text-xl" />
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
