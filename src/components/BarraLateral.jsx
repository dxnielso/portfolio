import {AiOutlineGithub, AiOutlineLinkedin, AiOutlineFilePdf} from 'react-icons/ai'
import cv from '../assets/CV_Daniel_Ramon_Solis_Medina.pdf'

const BarraLateral = () => {
  return (
    <div className='fixed left-5 md:left-auto top-[30%] md:top-[50%] flex flex-col gap-y-7'>
      <a href="https://github.com/dxnielso" target='_blank'><AiOutlineGithub className='text-3xl text-gray-900 duration-200 hover:opacity-80' /></a>
      <a href="https://www.linkedin.com/in/dxnielso/" target='_blank'><AiOutlineLinkedin className='text-3xl text-gray-900 duration-200 hover:opacity-80' /></a>
      <a href={cv} download="CV_Daniel_Ramon_Solis_Medina"><AiOutlineFilePdf className='text-3xl text-gray-900 duration-200 hover:opacity-80' /></a>
    </div>
  )
}

export default BarraLateral