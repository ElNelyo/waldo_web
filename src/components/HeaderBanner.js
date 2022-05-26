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

const HeaderBanner = () => (
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


    <div className='relative sm:mb-72'>
      <video src={banniere_video} autoPlay muted loop type="video/mp4" className='w-full absolute'></video>
        <div id="pot" className='mb-72'>
          <img  src={plane} alt="banniere" className='w-full h-32 hidden sm:block mt-72 mb-72 ' />
        </div>
        
    </div>


    <div className="bg-gradient-to-r from-violet-900 to-blue-500 md:mt-72 2xl:mt-[600px] sm:mt-72 w-full block pb-32" id='genesis'>
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="flex flex-col">
          <Zoom>
          <div className='mt-20 z-2 '>
              <div className='uppercase text-center text-4xl md:text-7xl text-white shiny mb-12 mt-20 md:mt-72 title-green'>
                  The Waldos Legend
              </div>

              <div className='text-white indie'>
                  <div className='text-white indie text-2xl'><strong className='text-green-400'>THE WALDOS LEGEND</strong> is the realization of a wacky project created by a talented and ambitious team. Passionate about blockchain, NFT and especially hemp cultivation, we are creating through the Waldos the first NFT project focused on CBD.</div>
                

                  <div className='mt-12 text-2xl'>What is this legend that everyone is talking about in the metaverse? It is rooted in the story of the Waldos, dreamy young students full of ideals, like all of us, who sneaked out to meet up with friends and heard about a mysterious marijuana field abandoned by a coast guard who could not take care of it anymore. Thus, once a week at 4:20 p.m. after school, the Waldos met to go on an adventure to find this treasure... But in the end, they couldn't make it...
                  </div>

                  <div className='mt-12 text-2xl'>
                      Finally, it is today, in the metaverse, that the legend reappears through THE WALDOS LEGEND and all Waldos can now search for the real abandoned field!
                  </div>

                <div className='mt-12 text-2xl'>Thus, we offer Waldos access to truly exclusive advantages through this crazy project!</div>
                <div className='mt-12 text-2xl'>To do so, the TWL team already has all the cards in hand to satisfy the Waldos: the best supplier of flowers and CBD-derived products in Europe is already our trusted partner, ready to provide the best qualities. of the world to the Waldos to encourage them to find this treasure.</div>
                <div className='mt-12 text-2xl'>But before you run into the metaverse to get your hands on the One Piece of the Waldos, please read up on all aspects of THE WALDOS LEGEND!</div>
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
);

export default HeaderBanner;
