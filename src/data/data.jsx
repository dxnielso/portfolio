import { BiCodeAlt } from "react-icons/bi";
import { RiPagesLine } from "react-icons/ri";
import { AiOutlineUser } from "react-icons/ai";
import Amazon from "../assets/amazon_capture.png";
import AirTravel from "../assets/airtravel_capture.png";
import PolloPepe from "../assets/pollopepe_capture.png";
import Bank from "../assets/bank_capture.png";
import BarberShop from '../assets/fadefinder_capture.png'
import Starbucks from '../assets/starbucks_capture.png';

export const skills = {
  frontend: [
    {
      id: 0,
      nombre: "HTML",
      nivel: "Intermediate",
    },
    {
      id: 1,
      nombre: "CSS",
      nivel: "Intermediate",
    },
    {
      id: 2,
      nombre: "Javascript",
      nivel: "Intermediate",
    },
    {
      id: 3,
      nombre: "TailwindCSS",
      nivel: "Intermediate",
    },
    {
      id: 4,
      nombre: "Git",
      nivel: "Basic",
    },
    {
      id: 5,
      nombre: "React JS",
      nivel: "Intermediate",
    },
  ],
  backend: [
    {
      id: 0,
      nombre: "Node JS",
      nivel: "Basic",
    },
    {
      id: 1,
      nombre: "MySQL",
      nivel: "Basic",
    },
    {
      id: 2,
      nombre: "Express",
      nivel: "Basic",
    },
    {
      id: 3,
      nombre: "Firebase",
      nivel: "Basic",
    },
  ],
};

export const services = [
  {
    id: 0,
    titulo: "Desarrollo de Landing page",
    icono: <RiPagesLine className="text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
    descripcion:
      "El servicio Landing page implica la creación de una página web diseñada para captar visitantes y persuadirlos a actuar, con diseño limpio y enfoque claro.",
  },
  {
    id: 1,
    titulo: "Diseño y desarrollo de interfaces de usuario (UI/UX).",
    icono: <BiCodeAlt className="text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
    descripcion:
      "Servicios de Diseño y Desarrollo de Interfaz de Usuario (UI/UX) que mejoran la experiencia del usuario y la interacción.",
  },
  {
    id: 2,
    titulo: "Desarrollo de sitios web personales",
    icono: <AiOutlineUser className="text-3xl text-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />,
    descripcion:
      "Servicio de Desarrollo de Sitio Web Personalizado que refleja la identidad del cliente y destaca habilidades y logros.",
  },
];

export const portfolio = [
  {
    id: 0,
    titulo: "Amazon Clon | Web App",
    tecnologias: ["React JS", "HTML", "CSS", "Firebase"],
    image: Amazon,
    demo: "https://clon-dee88.web.app/",
  },
  {
    id: 1,
    titulo: "AirTravel | Landing Page",
    tecnologias: ["HTML", "TailwindCSS", "Javascript"],
    image: AirTravel,
    demo: "https://dxnielso.github.io/airtravel/",
  },
  {
    id: 2,
    titulo: "Pollo Pepe | Landing Page",
    tecnologias: ["HTML", "CSS", "Javascript"],
    image: PolloPepe,
    demo: "https://dxnielso.github.io/landingpage_pollo-pepe/",
  },
  {
    id: 3,
    titulo: "Bank card form validation",
    tecnologias: ["HTML", "CSS", "Javascript"],
    image: Bank,
    demo: "https://dxnielso.github.io/bank-card-form/",
  },
  {
    id: 4,
    titulo: "Barbershop App",
    tecnologias: ["HTML", "TailwindCSS", "Javascript", "React JS", "Express", "Node.js", "MySQL"],
    image: BarberShop,
    demo: "",
  },
  {
    id: 5,
    titulo: "Starbucks | Landing page",
    tecnologias: ["Astro", "TailwindCSS", "React JS"],
    image: Starbucks,
    demo: "https://dxnielso.github.io/starbucks/",
  },
];
