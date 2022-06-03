import React from 'react';
import banniere from '../images/banniere.png';
import banniere_video from '../video/banniere.mp4';
import plane from '../images/plane_small.png';
import background_dino from '../images/background_dino.png';
import people_dino from '../images/people_dino.png'
import dino from '../images/dino.png'

import BackToTop from 'react-back-to-top';
import { Zoom } from 'react-reveal';
import ReactFloaterJs from 'react-floaterjs'
import { useTranslation } from 'react-i18next';


export default function HeaderBanner() {
    const { t, i18n } = useTranslation();
  
  return(
  
  <div className="">
    <BackToTop isPercent="false"
    mainStyle={{
        width:'100%',
        height:'100%',
        background: 'url(cbd_small.png)',
        zIndex:999,

    }}
    percentStyle={{
        display:'none'
    }}
    animate='zoom'
    offsetTop={20}
    step={50}
    percent={false}
    visiblePercent={10}
  />


    <div className='relative md::mb-72'>
      <video src={banniere_video} autoPlay muted loop type="video/mp4" className='w-full absolute'></video>
        <div id="pot" className='mb-72'>
          <img  src={plane} alt="banniere" className='w-full md:h-32 h-12 sm:block mt-20 md:mt-72 mb-72 ' />
        </div>
        
    </div>


    <div className="bg-gradient-to-r from-violet-900 to-blue-500 md:mt-72 2xl:mt-[600px] sm:mt-72 w-full block pb-32" id='genesis'>
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="flex flex-col">
          <Zoom>
          <div className='mt-20 z-2 '>
              <h1 id="about"className='uppercase text-center text-4xl md:text-7xl text-white shiny mb-12 mt-20 md:mt-72 title-green'>
                  The Waldos Legend
                 
              </h1>

              <div className='text-white indie'>
                  <div className='text-white indie text-2xl'>{t("header_banner_text_1")}</div>
                

                  <div className='mt-12 text-2xl'>{t("header_banner_text_2")}
                  </div>

                  <div className='mt-12 text-2xl'>
                  {t("header_banner_text_3")}
                  </div>

                <div className='mt-12 text-2xl'>{t("header_banner_text_4")}</div>
                <div className='mt-12 text-2xl'>{t("header_banner_text_5")}</div>
                <div className='mt-12 text-2xl'>{t("header_banner_text_6")}</div>
                </div>
              </div>
            </Zoom>
            <div className='pb-12'>
                <div className='relative sm:mb-72 text-center mt-10 md:pb-10 2xl:pb-32 mx-auto w-full centered' >
                    <img src={background_dino} className="w-full md:w-1/2 absolute rounded-3xl shadow-xl centered"></img>
                    <ReactFloaterJs>
                      <img src={dino} className="w-full md:w-1/2  mx-auto absolute rounded-3xl centered "></img>
                    </ReactFloaterJs>
                    <img src={people_dino} className="w-full md:w-1/2 mx-auto absolute rounded-3xl centered"></img>
                </div>
            </div>
            
         </div>
        </div>
      </div>
  

 

  </div>
)
}
