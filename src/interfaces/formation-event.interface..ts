import type { AstroComponentFactory } from "astro/runtime/server/index.js";

export default interface FormationEvent {
  title: string;
  current?: boolean;
  date: string;
  description: string;
  entity: string;
  position: number;
  icon: AstroComponentFactory;
}
