// import ViewMore from "./ViewMore";
import BlurContainer from "./BlurContainer";
import Blob from "../assets/blob.svg";

const Service = ({ icono, titulo, descripcion, onClickOpenModal }) => {
  return (
    <BlurContainer>
      <div className="h-full w-full px-6 pt-10 pb-16 flex flex-col justify-center items-center inset-0 bg-white rounded-xl relative border">
        <div className="relative w-32 h-32">
          <img src={Blob} alt="" className="" />
          {icono}
        </div>
        <h4 className="text-base font-semibold text-gray-900 text-center mb-4">{titulo}</h4>
        <p className="text-sm font-light text-gray-900 text-center leading-6">{descripcion}</p>
        {/* <ViewMore onClick={onClickOpenModal} /> */}
      </div>
    </BlurContainer>
  );
};

export default Service;