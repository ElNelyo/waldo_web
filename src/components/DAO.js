import DAO_IMG from '../images/DAO.png';

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Zoom } from 'react-reveal'
import { useTranslation } from 'react-i18next';

const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DAO() {
  const { t, i18n } = useTranslation();

  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  " id='DAO'>
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
          <Zoom>
            <h1 className="text-4xl mb-12 title-orange tracking-tight shiny uppercase font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Waldos </span>{' '}
              <span className="block text-white xl:inline">DAO</span>
            </h1>
            <div className="mt-3 max-w-md mx-auto text-2xl text-white sm:text-xl md:mt-5 md:max-w-3xl">
            <p className="mt-3 max-w-md mx-auto text-2xl text-white sm:text-xl md:mt-5 md:max-w-3xl">
              {t("DAO_text_1")}
            </p>
            <p className='mt-3'>{t("DAO_text_2")}</p>
            <p className='mt-3'> {t("DAO_text_3")}</p>
          
            </div>
            </Zoom>
          </div>
         
        </div>
        <div className="relative w-full shadow-3xl rounded-3xl h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
        <Zoom>
          <img
            className="shadow-3xl absolute inset-0 w-full h-full object-contain rounded-3xl" 
            src={DAO_IMG}
            alt=""
          />
        </Zoom>
        </div>
      </main>
    </div>
  )
}
