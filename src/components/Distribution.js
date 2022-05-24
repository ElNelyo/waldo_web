import React from 'react';
import distribution from '../images/distribution.png';

const Distribution = () => (
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-8" id='distribution'>
      <div className='text-4xl sm:text-5xl text-center my-12 text-white mt-20 pacifico uppercase '>
          Distribution
      </div>
      <div className='text-white text-center mx-auto mb-12 indie'>We want to have a policy of transparency with the community. You can find a pie chart detailing the distribution of funds raised from the sale of the NFT collection.</div>
      <img src={distribution} alt="distribution" className='w-1/2 mx-auto rounded-lg mb-20'  />
  </div>
);

export default Distribution;