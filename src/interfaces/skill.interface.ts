import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export default interface Skill {
  id: number;
  name: string;
  class: string;
  icon: AstroComponentFactory;
  domain: boolean;
}
