import Features from './Features'
import Progress from './Progress'

import Ud from './Ud'

const Wip = () => {
  return (
    <div className='bg-[#EAEDE5] min-h-screen flex flex-col'>
        <Ud />
        <Progress progress={1}/>
        <Features />
        
    </div>
  )
}

export default Wip