/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Disclosure, Menu, Transition } from '@headlessui/react'
import { BellIcon, MenuIcon, ShoppingBagIcon, XIcon } from '@heroicons/react/outline'
import { PlusSmIcon } from '@heroicons/react/solid'
import i18n from "../translations/i18n";
import ReactCountryFlag from "react-country-flag"
import {NotificationContainer, NotificationManager} from 'react-notifications';

import logo from '../images/favicon.png'

const navigation = [
  { name: 'About', href: '#about', current: true },
  { name: 'Community', href: '#community', current: false },
  { name: 'Collection', href: '#collection', current: false },
  { name: 'DAO', href: '#DAO', current: false },
  { name: 'Roadmap', href: '#roadmap', current: false },
  { name: 'Utility', href: '#utility', current: false },
  { name: 'Distribution', href: '#distribution', current: false },
  { name: 'Team', href: '#team', current: false },
]

const changeLanguage = (lng) => {
  NotificationManager.info('Language changed');
  i18n.changeLanguage(lng);
}

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example() {
  return (
    <Disclosure as="nav" className="bg-indigo-800">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex">
                <div className="-ml-2 mr-2 flex items-center md:hidden">
                  {/* Mobile menu button */}
                  <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                    <span className="sr-only">Open main menu</span>
                    {open ? (
                      <XIcon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </Disclosure.Button>
                </div>
                <div className="flex-shrink-0 flex items-center">
                <img
                    className="block h-12 w-auto rounded-full"
                    src={logo}
                    alt="Logo"
                  />
                </div>
                <div className="hidden md:ml-6 md:flex md:items-center md:space-x-4">
                  {navigation.map((item) => (
                    <a
                      key={item.name}
                      href={item.href}
                      className={classNames(
                        item.current ? 'bg-indigo-700 text-white' : 'text-white hover:bg-indigo-500 hover:text-white',
                        'px-3 py-2 rounded-md text-xl font-medium decoration-0 indie'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center">

              <NotificationContainer/>
              <div className='flex space-x-4 mr-4'>
                <button  onClick={() => changeLanguage('fr')}>
                <ReactCountryFlag
                countryCode="FR"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title=""
            />

                </button>
                <button onClick={() => changeLanguage('en')}>
                <ReactCountryFlag
                countryCode="US"
                svg
                style={{
                    width: '2em',
                    height: '2em',
                }}
                title=""
            />
               </button>
    
              </div>

                <div className="flex-shrink-0">
                  <a href='https://discord.gg/4jYmvufSFT' target="_blank">
                  <button
                    type="button"
                    className="relative indie inline-flex items-center px-2 py-1 xl:px-4 xl:py-2  border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <PlusSmIcon className="-ml-1 mr-2 h-2 w-2 xl:h-5 xl:w-5" aria-hidden="true" />
                    <span>JOIN DISCORD</span>
                  </button>
                  </a>
                </div>
               

                <div className="flex-shrink-0 ml-2">
                  <a href='https://shop.waldoslegend.com/' target="_blank">
                  <button
                    type="button"
                    className="relative indie inline-flex items-center px-2 py-1 xl:px-4 xl:py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                  >
                    <ShoppingBagIcon className="-ml-1 mr-2 h-2 w-2 xl:h-5 xl:w-5" aria-hidden="true" />
                    <span>SHOP</span>
                  </button>
                  </a>
                </div>


              </div>
            </div>
          </div>

          <Disclosure.Panel className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                    'block px-3 py-2 rounded-md text-base font-medium'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
            <div className="pt-4 pb-3 border-t border-gray-700">
              <div className="flex items-center px-5 sm:px-6">
              </div>
              <div className="mt-3 px-2 space-y-1 sm:px-3">
               
              </div>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  )
}
