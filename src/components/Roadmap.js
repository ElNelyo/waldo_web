import React from 'react';
import roadmap from '../images/roadmap.png';
import Zoom from 'react-reveal/Zoom';

const Roadmap = () => (
  <div className="bg-violet-800 py-20 " id='roadmap'>
    <Zoom>
      <div className='text-4xl sm:text-7xl text-center my-20 text-white mt-20 shiny uppercase 2xl:pt-20 title-violet'>
          Roadmap
      </div>
      </Zoom>
      <Zoom>
      <img src={roadmap} alt="roadmap" className=' mx-auto mb-12 rounded-3xl shadow-xl'/>
      </Zoom>
  </div>
);

export default Roadmap;