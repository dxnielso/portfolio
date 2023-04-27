import { AiOutlineClose, AiOutlineCheckCircle } from "react-icons/ai";

const Modal = ({ servicio, onClickCloseModal }) => {
  return (
    <div className="fixed z-50 top-0 bottom-0 left-0 right-0 bg-[#000000b0] flex justify-center items-center">
      <div className="w-full md:w-3/4 lg:w-2/5 bg-white m-5 rounded-2xl p-7 md:p-12">
        <div className="w-full flex justify-end items-center">
          <button onClick={onClickCloseModal}>
            <AiOutlineClose className="text-xl" />
          </button>
        </div>
        <div className="flex flex-col justify-center items-center gap-y-5">
          <h3 className="text-lg font-semibold text-gray-900">
            {servicio.titulo}
          </h3>
          <p className="text-base font-base text-gray-600 text-center">
            {servicio.descripcion}
          </p>
          <ul className="w-full flex flex-col justify-center items-start gap-y-3">
            {servicio.puntos.map((punto) => (
              <li className="text-base font-base text-gray-600 flex justify-start items-center gap-x-1">
                <AiOutlineCheckCircle />
                <p>{punto}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Modal;
