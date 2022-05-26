/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, MapIcon, SparklesIcon } from '@heroicons/react/outline'
import next from '../images/next.png'
import Zoom from 'react-reveal/Zoom';

export default function Benefits() {
  return (
    <div className="relative bg-gradient-to-t from-orange-500 to-violet-500  pt-16 pb-32 overflow-hidden">
    
    <Zoom>
      <div className='text-4xl sm:text-7xl text-center my-20 text-white mt-20 shiny uppercase 2xl:pt-20 title-orange'>Next</div>
      </Zoom>
      <Zoom>
      <div className='text-white text-center text-2xl mx-auto mb-12 indie'>
      We have big (well, reasonable) ambitions for the future
        In the world of Waldos, we intend to take into consideration the expectations of the community:
        </div>
    </Zoom>


  <Zoom><div className='text-white text-center text-2xl mx-auto mb-12 indie'> Indeed, the DAO will help define future projects for THE WALDOS LEGEND! We are listening!</div> </Zoom>
     <Zoom><img src={next} className="w-full md:w-1/2 mx-auto rounded-lg"></img></Zoom>
    </div>
  )
}
