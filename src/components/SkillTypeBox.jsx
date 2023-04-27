import Skill from "./Skill";

const SkillTypeBox = ({ titulo, skills }) => {
  return (
    <div className="w-full p-6 bg-white rounded-md mb-5 shadow-sm" data-aos="fade-left">
      <h3 className="text-gray-900 font-bold text-base text-center mb-4">{titulo}</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {skills.map((skill) => (
          <Skill key={skill.id} nombre={skill.nombre} nivel={skill.nivel} />
        ))}
      </div>
    </div>
  );
};

export default SkillTypeBox;
