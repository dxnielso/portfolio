import Angular from "@/components/icons/Angular.astro";
import Auth0 from "@/components/icons/Auth0.astro";
import Firebase from "@/components/icons/Firebase.astro";
import Git from "@/components/icons/Git.astro";
import Nestjs from "@/components/icons/Nestjs.astro";
import NextJS from "@/components/icons/NextJS.astro";
import React from "@/components/icons/React.astro";
import SpringBoot from "@/components/icons/SpringBoot.astro";
import type Skill from "@/interfaces/skill.interface";
import Astroo from "../components/icons/Astroo.astro";
import CSS from "../components/icons/CSS.astro";
import ExpressJS from "../components/icons/ExpressJS.astro";
import HTML from "../components/icons/HTML.astro";
import JavaScript from "../components/icons/JavaScript.astro";
import NodeJS from "../components/icons/NodeJS.astro";
import Tailwind from "../components/icons/Tailwind.astro";
import TypeScript from "../components/icons/TypeScript.astro";

const skills: Skill[] = [
  {
    id: 1,
    name: "HTML",
    class: "bg-[#e34f26] text-white",
    icon: HTML,
    domain: true,
  },
  {
    id: 2,
    name: "CSS",
    class: "bg-[#1473b6] text-white",
    icon: CSS,
    domain: true,
  },
  {
    id: 3,
    name: "JavaScript",
    class: "bg-[#323231] text-white",
    icon: JavaScript,
    domain: true,
  },
  {
    id: 4,
    name: "TypeScript",
    class: "bg-[#38b2ac] text-white",
    icon: TypeScript,
    domain: true,
  },
  {
    id: 13,
    name: "Git",
    class: "bg-[#F05032] text-white",
    icon: Git,
    domain: true,
  },
  {
    id: 5,
    name: "TailwindCSS",
    class: "bg-[#38b2ac] text-white",
    icon: Tailwind,
    domain: true,
  },
  {
    id: 8,
    name: "NodeJS",
    class: "bg-[#5fa14f] text-white",
    icon: NodeJS,
    domain: true,
  },
  {
    id: 6,
    name: "Express",
    class: "bg-black text-white",
    icon: ExpressJS,
    domain: true,
  },
  {
    id: 11,
    name: "NestJS",
    class: "bg-[#E0234E] text-white",
    icon: Nestjs,
    domain: true,
  },
  {
    id: 7,
    name: "Astro",
    class: "border-[#ff5d01] text-white",
    icon: Astroo,
    domain: true,
  },
  // {
  //   name: "Java",
  //   class: "bg-[#] text-white",
  //   icon:
  // },
  {
    id: 10,
    name: "Angular",
    class: "bg-[#E40035] text-white",
    icon: Angular,
    domain: true,
  },
  {
    id: 9,
    name: "Spring Boot",
    class: "bg-[#6DB33F] text-white",
    icon: SpringBoot,
    domain: true,
  },
  {
    id: 12,
    name: "Auth0",
    class: "bg-[#EB5424] text-white",
    icon: Auth0,
    domain: true,
  },
  {
    id: 14,
    name: "ReactJS",
    class: "bg-[#403232] text-[#337284]",
    icon: React,
    domain: false,
  },
  {
    id: 15,
    name: "Firebase",
    class: "bg-[#f6820c] text-white",
    icon: Firebase,
    domain: false,
  },
  {
    id: 17,
    name: "NextJS",
    class: "bg-black text-white",
    icon: NextJS,
    domain: false,
  },
];
export default skills;
