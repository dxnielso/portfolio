import { animateScroll as scroll } from "react-scroll";
import { AiOutlineArrowUp } from "react-icons/ai";

const ButtonTop = ({ estamosTop }) => {
  return (
    <button
      className={`bg-[#000000] hover:opacity-80 duration-200 flex justify-center items-center fixed z-50 right-5 bottom-24 md:bottom-5 p-2 ${estamosTop && 'hidden'}`}
      onClick={() => scroll.scrollToTop()}
    >
      <AiOutlineArrowUp className="text-white text-2xl" />
    </button>
  );
};

export default ButtonTop;
