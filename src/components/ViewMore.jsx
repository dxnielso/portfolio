import { AiOutlineArrowRight } from "react-icons/ai";

const ViewMore = ({onClick}) => {
  return (
    <button className="flex justify-center items-center gap-x-2 text-gray-600 hover:text-[var(--primaryColor)] duration-200" onClick={onClick}>
      <span className="text-sm font-base">View More</span>
      <AiOutlineArrowRight className="text-sm" />
    </button>
  );
};

export default ViewMore;
