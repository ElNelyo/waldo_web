import React from 'react';
import roadmap from '../images/roadmap.png';
import Zoom from 'react-reveal/Zoom';

/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, CashIcon, GlobeAltIcon, LightningBoltIcon, MapIcon, MoonIcon, ScaleIcon } from '@heroicons/react/outline'

const features = [
  {
    name: 'Waldos Shop access',
    description:
      'Owning an NFT will allow you to access the part reserved for the community on THE WALDOS LEGEND online shop and to be able to easily buy the best CBD products at unbeatable prices! You will also be able to buy the merchandising reserved for holders.',
    icon: GlobeAltIcon,
  },
  {
    name: 'IRL Events',
    description:
      'Thanks to a Waldos NFT, you will be able to benefit from limited access to events reserved for holders: Musical concerts, Festivals, Exhibitions, Meeting of communities',
    icon: MapIcon,
  },
  {
    name: 'Whitelist & Giveaway',
    description:
      'With strong and promising partners, we will offer holders access to super cool WLs and giveaways in unmissable projects in the blockchain! The choice of projects can even be decided in DAO by the community.',
    icon: CashIcon,
  }
]

export default function Utility() {
  return (
    <div className="py-12 bg-gradient-to-r from-cyan-500 to-blue-500" id='utility'> 
    <Zoom>
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <p className="mt-2 text-4xl uppercase pacifico leading-8 font-extrabold tracking-tight text-green-500 sm:text-4xl">
          What will NFTs be used for?
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-700 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-4xl leading-6 font-medium text-orange-800">{feature.name}</p>
                </dt>
                <dd className="mt-4 ml-16 text-2xl text-white">{feature.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
     </Zoom>
    
    </div>
  )
}
