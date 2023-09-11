import { Link } from "react-scroll";
import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { RiWhatsappFill } from "react-icons/ri";

const Footer = () => {
  return (
    <footer className="bg-white pb-28 border-t border-gray-200 flex flex-col justify-start items-center py-10 gap-y-6 select-none">
      <h5 className="text-3xl font-semibold text-gray-800">Daniel Solís</h5>
      <ul className="flex justify-center items-center gap-x-6 text-gray-800 text-base font-normal">
        <Link
          activeClass=""
          to="about-me"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="cursor-pointer duration-200 hover:opacity-80"
        >
          Sobre mi
        </Link>
        <Link
          activeClass=""
          to="portfolio"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="cursor-pointer duration-200 hover:opacity-80"
        >
          Portafolio
        </Link>
        <Link
          activeClass=""
          to="services"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          className="cursor-pointer duration-200 hover:opacity-80"
        >
          Servicios
        </Link>
      </ul>

      <div className="flex justify-center items-center gap-x-5 mb-8">
        <a href="https://www.facebook.com/dxnielsolis" target="_blank">
          <AiFillFacebook className="text-3xl text-gray-900 hover:opacity-80 duration-200" />
        </a>
        <a href="https://www.instagram.com/dxnielso/?hl=es-la" target="_blank">
          <AiFillInstagram className="text-3xl text-gray-900 hover:opacity-80 duration-200" />
        </a>
        <a href="https://wa.me/524622835737?text=Hola, me interesa trabajar contigo." target="_blank">
          <RiWhatsappFill className="text-3xl text-gray-900 hover:opacity-80 duration-200" />
        </a>
      </div>

      <p className="text-sm font-light">Designed by Daniel Solís</p>
    </footer>
  );
};

export default Footer;
