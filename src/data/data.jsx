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
    titulo: "Landing page development",
    icono: <RiPagesLine className="text-2xl" />,
    descripcion:
      "The Landing Page Development service involves the creation of a web page specifically designed to capture the attention of visitors and persuade them to perform a certain action. Landing pages are typically single page and have a very sharp focus, with a clean design and clear structure.",
    puntos: [
      "I develop the user interface",
      "Web page development",
      "I create ux element interactions",
    ],
  },
  {
    id: 1,
    titulo: "Design and development of user interfaces (UI/UX)",
    icono: <BiCodeAlt className="text-2xl" />,
    descripcion:
      "User Interface Design and Development (UI/UX) services that improve the user experience, increase retention and maximize interaction with your brand or product.",
    puntos: [
      "I develop the user interface",
      "Web page development",
      "I create ux element interactions",
    ],
  },
  {
    id: 2,
    titulo: "Development of personal websites",
    icono: <AiOutlineUser className="text-2xl" />,
    descripcion:
      "Customized Personal Website Development service, which reflects the client's identity and highlights their skills and achievements, with a modern and attractive design to impress visitors and employers.",
    puntos: [
      "I develop the user interface",
      "Web page development",
      "I create ux element interactions",
    ],
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
