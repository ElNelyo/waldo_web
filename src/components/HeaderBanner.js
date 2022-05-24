import React from 'react';
import banniere from '../images/banniere.png';
import plane from '../images/plane_small.png';
import end_banner from '../images/end_banner.png';

const HeaderBanner = () => (
  <div className="">



    <div className='relative mb-40'>
      <img src={banniere} alt="banniere" className='w-full absolute ' />
      <div id="pot">
      <img  src={plane} alt="banniere" className='w-full hidden sm:block mt-72 ' />
      </div>
 

   
    </div>
 

    <div>
        The Waldos Legend: What is it?!
    </div>

    <div>THE WALDOS LEGEND is the realization of a wacky project created by a talented and ambitious team. Passionate about blockchain, NFT and especially hemp cultivation, we are creating through the Waldos the first NFT project focused on CBD.</div>
   

    <div>What is this legend that everyone is talking about in the metaverse? It is rooted in the story of the Waldos, dreamy young students full of ideals, like all of us, who sneaked out to meet up with friends and heard about a mysterious marijuana field abandoned by a coast guard who could not take care of it anymore. Thus, once a week at 4:20 p.m. after school, the Waldos met to go on an adventure to find this treasure... But in the end, they couldn't make it...
    </div>

    <div>
        Finally, it is today, in the metaverse, that the legend reappears through THE WALDOS LEGEND and all Waldos can now search for the real abandoned field!
    </div>

    <div>Thus, we offer Waldos access to truly exclusive advantages through this crazy project!</div>
    <div>To do so, the TWL team already has all the cards in hand to satisfy the Waldos: the best supplier of flowers and CBD-derived products in Europe is already our trusted partner, ready to provide the best qualities. of the world to the Waldos to encourage them to find this treasure.</div>
    <div> But before you run into the metaverse to get your hands on the One Piece of the Waldos, please read up on all aspects of THE WALDOS LEGEND!</div>


  </div>
);

export default HeaderBanner;
