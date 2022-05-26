import React from 'react';
import { Zoom } from 'react-reveal';
import distribution from '../images/distribution.png';

const Distribution = () => (
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-8" id='distribution'>
     <Zoom>
      <div className='text-4xl sm:text-5xl text-center my-12 text-white title-green mt-20 pacifico uppercase '>
          Distribution
      </div>
      </Zoom>
      <Zoom>
      <div className='text-white text-2xl text-center mx-auto mb-12 indie'>We want to have a policy of transparency with the community. You can find a pie chart detailing the distribution of funds raised from the sale of the NFT collection.</div>
      </Zoom>
      <Zoom>
      <img src={distribution} alt="distribution" className='w-full md:w-1/2 mx-auto rounded-3xl shadow-xl mb-20'  />
      </Zoom>
  </div>
);

export default Distribution;