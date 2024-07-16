import type ITag from "./ITag";

export default interface Project {
  id: number;
  title: string;
  description: string;
  image: ImageMetadata;
  link: string;
  github: string;
  tags: ITag[];
}
