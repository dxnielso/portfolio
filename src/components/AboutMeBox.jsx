import BlurContainer from './BlurContainer';
const AboutMeBox = ({texto, icono, extra}) => {
  return (
    <BlurContainer>
      <div className="h-full w-full p-5 flex flex-col items-center justify-center gap-y-4 inset-0 bg-white rounded-xl relative border">
        <span>{icono}</span>
        <p className="text-md font-semibold text-gray-800">{texto}</p>
        <p className="text-sm font-light text-gray-500 text-center">{extra}</p>
      </div>
    </BlurContainer>
  )
}

export default AboutMeBox