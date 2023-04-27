import {AiFillCheckCircle} from 'react-icons/ai'

const Skill = ({nombre, nivel}) => {
  return (
    <div className='flex justify-center items-center gap-x-3'>
      <div className='h-full flex justify-center items-start'>
        <AiFillCheckCircle className='text-xl'/>
      </div>
      <div className='flex-1 flex flex-col justify-between items-start'>
        <h4 className='text-gray-900 font-semibold text-base'>{nombre}</h4>
        <h5 className='text-gray-700 font-normal text-sm'>{nivel}</h5>
      </div>
    </div>
  )
}

export default Skill