import { AiOutlineArrowRight } from "react-icons/ai";
import BlurContainer from './BlurContainer';

const PortfolioCard = ({ proyecto }) => {
  
  return (
      <BlurContainer>
        <div className="h-full w-full p-5 flex flex-col justify-center gap-y-5 items-start inset-0 bg-white rounded-xl relative border">
          <div className="rounded-2xl overflow-hidden">
            <img src={proyecto.image} alt={proyecto.titulo} />
          </div>
          <div className="flex flex-col gap-y-3">
            <h3 className="text-base font-bold text-gray-800">{proyecto.titulo}</h3>
            <div className="w-full flex justify-start items-center gap-2 flex-wrap">
              {proyecto.tecnologias.map((tecnologia) => (
                <span
                  className="text-xs font-light text-white px-2 py-1 rounded-full bg-[var(--primaryColor)] hover:opacity-80 duration-200"
                  key={tecnologia}
                >
                  {tecnologia}
                </span>
              ))}
            </div>
            <a
              href={proyecto.demo}
              target="_blank"
              className="text-sm text-gray-500 flex justify-start items-center gap-x-1 w-fit hover:gap-x-2 duration-200"
            >
              Demo
              <AiOutlineArrowRight />
            </a>
          </div>
        </div>
      </BlurContainer>
  );
};

export default PortfolioCard;
