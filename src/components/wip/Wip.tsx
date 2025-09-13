import Contact from './Contact'
import Features from './Features'
import Md from './Md'
import Progress from './Progress'
import Savry from './Savry'
import Ud from './Ud'

const Wip = () => {
  return (
    <div className='bg-[#EAEDE5] min-h-screen flex flex-col'>
        <Ud />
        <Md />
        <Progress progress={1}/>
        <Features />
        <Savry />
        <Contact />
    </div>
  )
}

export default Wip