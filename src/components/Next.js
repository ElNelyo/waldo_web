/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, MapIcon, SparklesIcon } from '@heroicons/react/outline'
import next from '../images/next.png'


export default function Benefits() {
  return (
    <div className="relative bg-gradient-to-b from-orange-500 to-violet-500  pt-16 pb-32 overflow-hidden">
    
      <div className='text-4xl mx-auto text-center pacifico uppercase text-white'>What'is next ?</div>
      <div className='text-white text-center text-xl mx-auto mb-12 indie'>
      We have big (well, reasonable) ambitions for the future
In the world of Waldos, we intend to take into consideration the expectations of the community:


<div> Indeed, the DAO will help define future projects for THE WALDOS LEGEND! We are listening!</div>
      </div>
      <img src={next} className="w-1/2 mx-auto rounded-lg"></img>
    </div>
  )
}
