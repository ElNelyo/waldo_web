import React from 'react';
import roadmap from '../images/roadmap.png';

const Roadmap = () => (
  <div className="bg-violet-800 pt-8" id='roadmap'>
      <div className='text-4xl sm:text-7xl text-center my-20 text-white mt-20 pacifico uppercase '>
          Roadmap
      </div>
      <img src={roadmap} alt="roadmap" className='w-3/4 mx-auto mb-12'/>
  </div>
);

export default Roadmap;