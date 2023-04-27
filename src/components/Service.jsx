import ViewMore from "./ViewMore"

const Service = ({icono, titulo, descripcion, puntos, onClickOpenModal}) => {
  return (
    <div className="w-full bg-white shadow-sm border border-gray-100 px-5 py-10 flex flex-col justify-center items-start gap-y-3 rounded-md" data-aos="fade-left">
      {icono}
      <h4 className="text-base font-semibold text-gray-900">{titulo}</h4>
      <ViewMore onClick={onClickOpenModal} />
    </div>
  )
}

export default Service