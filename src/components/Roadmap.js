import React from 'react';
import roadmap from '../images/roadmap.png';

const Roadmap = () => (
  <div className="bg-sky-400 pt-8">
      <div className='text-4xl sm:text-7xl text-center my-20 text-white mt-20 pacifico uppercase '>
          Roadmap
      </div>
      <img src={roadmap} alt="roadmap" className='w-full'/>
  </div>
);

export default Roadmap;