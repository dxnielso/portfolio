import Backpack from "../components/icons/Backpack.astro";
import Briefcase from "../components/icons/Briefcase.astro";
import Device from "../components/icons/Device.astro";
import School from "../components/icons/School.astro";
import type FormationEvent from "../interfaces/formation-event.interface.";

const formationEvents: FormationEvent[] = [
  {
    title: "Programador",
    current: true,
    date: "enero, 2025 - Actualmente",
    description:
      "Como programador en FLENSA, aplico buenas prácticas de desarrollo para optimizar procesos internos y resolver necesidades de los usuarios mediante soluciones digitales. Cada día aprendo y perfecciono mis habilidades, transformando retos en sistemas eficientes que aportan valor tangible a la empresa.",
    entity: "FLENSA",
    position: 1,
    icon: Briefcase,
  },
  {
    title: "Practicante de Desarrollo de Software",
    current: false,
    date: "agosto, 2024 - enero, 2025",
    description:
      "Durante mis prácticas participé en proyectos reales que mejoraban procesos internos de la empresa, aplicando conocimientos adquiridos en la universidad. Fue mi primera experiencia profesional, donde aprendí metodologías de desarrollo, asumí responsabilidades y fortalecí mis habilidades de trabajo en equipo y comunicación.",
    entity: "FLENSA",
    position: 2,
    icon: Device,
  },
  {
    title: "Ingeniería en Software",
    current: false,
    date: "1 de septiembre, 2021 - diciembre, 2024",
    description:
      "Exploré diversas áreas del desarrollo de software: aplicaciones web, móviles, de escritorio, inteligencia artificial, videojuegos, ciberseguridad y redes. Realicé múltiples proyectos, lo que me permitió adquirir una visión integral para decidir mi camino profesional en la tecnología.",
    entity: "Universidad Politécnica de Pénjamo",
    position: 3,
    icon: School,
  },
  {
    title: "Técnico en Programación",
    current: false,
    date: "20 de agosto, 2018 - 30 de junio, 2021",
    description:
      "Obtuve bases sólidas en programación, aprendiendo mi primer lenguaje, lógica de algoritmos y principios de POO. Desarrollé mis primeros proyectos y adquirí los fundamentos esenciales del desarrollo de software, que marcaron el inicio de mi trayectoria tecnológica.",
    entity: "CBTis 171",
    position: 4,
    icon: Backpack,
  },
];

export default formationEvents;
