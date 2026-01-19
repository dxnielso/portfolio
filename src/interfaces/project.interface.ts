import type Skill from "./skill.interface";

export default interface Project {
  id: number;
  title: string;
  description: string;
  image: ImageMetadata;
  link: string;
  github: string;
  tags: Skill[];
}
