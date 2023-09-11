import Container from "./Container";
import SkillTypeBox from "./SkillTypeBox";
import { skills } from "../data/data";
import {SiAstro, SiTailwindcss, SiExpress} from 'react-icons/si';
import {AiFillHtml5, AiFillGithub} from 'react-icons/ai';
import {DiCss3, DiJavascript1} from 'react-icons/di';
import {FaReact, FaNode} from 'react-icons/fa';

const Skills = () => {
  return (
    <>
      <Container id="skills" titulo="Habilidades">
        <div className="w-full my-10 flex justify-center [&>*]:text-[80px] [&>*]:duration-200 gap-x-10 gap-y-5 flex-wrap" data-aos="fade-left" >
          <AiFillHtml5 className="text-[#f06529] hover:opacity-90 hover:scale-110" />
          <DiCss3 className="text-[#2965f1] hover:opacity-90 hover:scale-110" />
          <DiJavascript1 className="text-[#F0DB4F] hover:opacity-90 hover:scale-110" />
          <SiTailwindcss className="text-[#38BDF8] hover:opacity-90 hover:scale-110" />
          <SiAstro className="text-[#FF5D01] hover:opacity-90 hover:scale-110" />
          <FaReact className="text-[#5DD1F0] hover:opacity-90 hover:scale-110" />
          <AiFillGithub className="text-[#000] hover:opacity-90 hover:scale-110" />
          <FaNode className="text-[#58A149] hover:opacity-90 hover:scale-110" />
          <SiExpress className="text-[#000] hover:opacity-90 hover:scale-110" />
          {/* <SkillTypeBox titulo="Fontend developer" skills={skills.frontend} />
          <SkillTypeBox titulo="Backend developer" skills={skills.backend} /> */}
        </div>
      </Container>
    </>
  );
};

export default Skills;
