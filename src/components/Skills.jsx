import Container from "./Container";
import SkillTypeBox from "./SkillTypeBox";
import { skills } from "../data/data";

const Skills = () => {
  return (
    <>
      <Container id="skills" titulo="Skills">
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <SkillTypeBox titulo="Fontend developer" skills={skills.frontend} />
          <SkillTypeBox titulo="Backend developer" skills={skills.backend} />
        </div>
      </Container>
    </>
  );
};

export default Skills;
