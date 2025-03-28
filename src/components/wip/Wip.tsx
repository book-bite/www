import Contact from './Contact'
import Features from './Features'
import Progress from './Progress'
import Savry from './Savry'
import Ud from './Ud'

const Wip = () => {
  return (
    <div className='bg-[#EAEDE5] min-h-screen flex flex-col'>
        <Ud />
        <Progress progress={1}/>
        <Features />
        <Savry />
        <Contact />
    </div>
  )
}

export default Wip