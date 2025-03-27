import Progress from './Progress'
import Ud from './Ud'

const Wip = () => {
  return (
    <div className='bg-[#EAEDE5] min-h-screen'>
        <Ud />
        <Progress progress={3}/>
    </div>
  )
}

export default Wip