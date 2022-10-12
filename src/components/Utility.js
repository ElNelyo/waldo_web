import React from 'react';
import roadmap from '../images/roadmap.png';
import Zoom from 'react-reveal/Zoom';
import { useTranslation } from 'react-i18next';

/* This example requires Tailwind CSS v2.0+ */
import { AnnotationIcon, CashIcon, GlobeAltIcon, LightningBoltIcon, MapIcon, MoonIcon, ScaleIcon } from '@heroicons/react/outline'



export default function Utility() {
  const { t, i18n } = useTranslation();


  const features = [
    {
      name: 'Waldos Shop access',
      description:
        t('utility_text_1'),
      icon: GlobeAltIcon,
    },
    {
      name: 'IRL Events',
      description:
        t('utility_text_2'),
      icon: MapIcon,
    },
    {
      name: 'Whitelist & Giveaway',
      description:
        t('utility_text_3'),
      icon: CashIcon,
    },
    {
      name: 'Rewards & Franchise Partnership',
      description:
        t('utility_text_4'),
      icon: GlobeAltIcon,
    },
  ]

  
  return (
    <div className="py-12 bg-gradient-to-r from-cyan-500 to-blue-500" id='utility'> 
 
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <Zoom>
            <p className="text-4xl sm:text-7xl text-center my-20 text-white mt-20 shiny uppercase 2xl:pt-20 title-orange">
            {t('utility_text_title')}
            </p>
          </Zoom>
        </div> 

        <div className="mt-20">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {features.map((feature) => (
              <div key={feature.name} className="relative">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-400 text-white">
                    <feature.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <Zoom>
                  <p className="ml-16 text-4xl pt-3 leading-6 font-bold font-medium text-orange-400 uppercase">{feature.name}</p>
                  </Zoom>
                </dt>
                <Zoom>
                  <dd className="mt-4 ml-16 text-2xl text-white">{feature.description}</dd>
                </Zoom>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}
