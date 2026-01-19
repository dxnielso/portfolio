import type Project from "@/interfaces/project.interface";
import AmazonShot from "../assets/projectsShots/amazonShot.png";
import SpotifyShot from "../assets/projectsShots/spotifyShot.png";
import StarbucksShot from "../assets/projectsShots/starbucksShot.png";
import skills from "./skills.data";

const projects: Project[] = [
  {
    id: 0,
    title: "Starbucks Landing Page",
    description:
      "Creé una landing page clon de Starbucks utilizando Astro para practicar y mejorar mis habilidades. Se enfoca en replicar la estética y funcionalidad del sitio oficial de Starbucks.",
    image: StarbucksShot,
    link: "https://dxnielso.github.io/starbucks/",
    github: "https://github.com/dxnielso/starbucks",
    tags: skills.filter((skill) => [7, 14, 3, 4, 1, 2, 5].includes(skill.id)),
  },
  {
    id: 1,
    title: "Spotify Stats",
    description:
      "Desarrollé un sitio web que utiliza la API de Spotify para mostrar datos del usuario, replicando la interfaz de usuario de Spotify y utilizando Zustand para la gestión de estados y persistencia de datos.",
    image: SpotifyShot,
    link: "https://spotify-stats-blue.vercel.app/",
    github: "https://github.com/dxnielso/spotify-stats",
    tags: skills.filter((skill) => [17, 14, 3, 4, 1, 5].includes(skill.id)),
  },
  {
    id: 2,
    title: "Amazon Clone",
    description:
      "Desarrollé una réplica de la página principal de Amazon con un enfoque en un carrito de compras funcional y gestión eficiente de datos.",
    image: AmazonShot,
    link: "https://clon-dee88.web.app/",
    github: "https://github.com/dxnielso/amazon-clon",
    tags: skills.filter((skill) => [14, 1, 2, 15].includes(skill.id)),
  },
];
export default projects;
