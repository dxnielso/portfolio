const AboutMeBox = ({texto, icono, extra}) => {
  return (
    <div className="w-full  bg-white shadow-sm border border-gray-100 flex flex-col justify-center items-center gap-y-3 p-5 rounded-md" data-aos="fade-left">
      <span>{icono}</span>
      <p className="text-sm font-semibold text-gray-800">{texto}</p>
      <p className="text-xs font-light text-gray-500 text-center">{extra}</p>
    </div>
  )
}

export default AboutMeBox