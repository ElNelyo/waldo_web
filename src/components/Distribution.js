import React from 'react';
import { Zoom } from 'react-reveal';
import distribution from '../images/distribution.png';

import { useTranslation } from 'react-i18next';

export default function Distribution() {
  const { t, i18n } = useTranslation();
  return(
  <div className="bg-gradient-to-r from-cyan-500 to-blue-500 pt-8" id='distribution'>
     <Zoom>
      <div className='text-4xl sm:text-7xl text-center my-20 text-white mt-20 shiny uppercase 2xl:pt-20 title-green'>
          {t('distribution_text_title')}
      </div>
      </Zoom>
      <Zoom>
      <div className='text-white text-2xl text-center mx-auto mb-12 indie'> {t('distribution_text_1')}</div>
      </Zoom>
      <Zoom>
      <img src={distribution} alt="distribution" className='w-full md:w-1/2 mx-auto rounded-3xl shadow-xl mb-20'  />
      </Zoom>
  </div>
)
  }
