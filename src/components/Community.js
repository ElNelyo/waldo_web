import React from 'react';
import { Zoom } from 'react-reveal';
import community from '../images/community.png';

const posts = [
    {
      title: 'Who can join the gang and how',
      description:
        'To be part of the Waldos, it\'s as simple as igniting the rocket: create a crypto wallet, deposit some money, snipe the launch and nab your NFT Waldos. Better than a lottery ticket, NFTs give access to real advantages.',
    },
    {
      title: 'Why become a Waldos?',
      description: 'Being part of the community is simply being part of a family. Not a club, a brotherhood and other bullshit, no. It\'s finding friends, passionate like us, who want to share their passions, their desires, their visions.',
    }
  ]
  
  export default function Community() {
    return (
      <div className="bg-gradient-to-r from-violet-500 to-pink-500 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div className="relative max-w-lg mx-auto lg:max-w-7xl">
          <div>
          <Zoom>
            <h2 className="text-4xl sm:text-7xl title-green tracking-tight mb-12 mt-20 shiny text-center font-extrabold text-white uppercase pacifico" id="community">Community</h2>
          </Zoom>
          </div>
          <div className="mt-6 pt-10 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {posts.map((post) => (
              <Zoom>
              <div key={post.title}>
                  <p className="text-4xl font-semibold text-green-500 pacifico">{post.title}</p>
                  <p className="mt-3 text-2xl text-white">{post.description}</p>
              </div>
              </Zoom>
            ))}
            <Zoom>
              <img src={community} alt="community" className='rounded-3xl'></img>
            </Zoom>
          </div>
        </div>
      </div>
    )
  }
  