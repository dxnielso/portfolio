import { AiOutlineArrowRight } from "react-icons/ai";

const ViewMore = ({onClick}) => {
  return (
    <button className="flex justify-center items-center gap-x-2" onClick={onClick}>
      <span className="text-sm font-base text-gray-600">View More</span>
      <AiOutlineArrowRight className="text-sm text-gray-600" />
    </button>
  );
};

export default ViewMore;
