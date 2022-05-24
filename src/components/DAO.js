import DAO_IMG from '../images/DAO.png';

/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import {
  BookmarkAltIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorClickIcon,
  MenuIcon,
  PhoneIcon,
  PlayIcon,
  RefreshIcon,
  ShieldCheckIcon,
  SupportIcon,
  ViewGridIcon,
  XIcon,
} from '@heroicons/react/outline'
import { ChevronDownIcon } from '@heroicons/react/solid'

const features = [
  {
    name: 'Analytics',
    href: '#',
    description: 'Get a better understanding of where your traffic is coming from.',
    icon: ChartBarIcon,
  },
  {
    name: 'Engagement',
    href: '#',
    description: 'Speak directly to your customers in a more meaningful way.',
    icon: CursorClickIcon,
  },
  { name: 'Security', href: '#', description: "Your customers' data will be safe and secure.", icon: ShieldCheckIcon },
  {
    name: 'Integrations',
    href: '#',
    description: "Connect with third-party tools that you're already using.",
    icon: ViewGridIcon,
  },
  {
    name: 'Automations',
    href: '#',
    description: 'Build strategic funnels that will drive your customers to convert',
    icon: RefreshIcon,
  },
]
const callsToAction = [
  { name: 'Watch Demo', href: '#', icon: PlayIcon },
  { name: 'Contact Sales', href: '#', icon: PhoneIcon },
]
const resources = [
  {
    name: 'Help Center',
    description: 'Get all of your questions answered in our forums or contact support.',
    href: '#',
    icon: SupportIcon,
  },
  {
    name: 'Guides',
    description: 'Learn how to maximize our platform to get the most out of it.',
    href: '#',
    icon: BookmarkAltIcon,
  },
  {
    name: 'Events',
    description: 'See what meet-ups and other events we might be planning near you.',
    href: '#',
    icon: CalendarIcon,
  },
  { name: 'Security', description: 'Understand how we take your privacy seriously.', href: '#', icon: ShieldCheckIcon },
]
const recentPosts = [
  { id: 1, name: 'Boost your conversion rate', href: '#' },
  { id: 2, name: 'How to use search engine optimization to drive traffic to your site', href: '#' },
  { id: 3, name: 'Improve your customer experience', href: '#' },
]

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DAO() {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-500  " id='DAO'>
      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight pacifico uppercase font-extrabold text-white sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              <span className="block xl:inline">Waldos </span>{' '}
              <span className="block text-blue-400 xl:inline">DAO</span>
            </h1>
            <div className="mt-3 max-w-md mx-auto text-lg text-gray-100 sm:text-xl md:mt-5 md:max-w-3xl">
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-100 sm:text-xl md:mt-5 md:max-w-3xl">
            The involvement of the Waldos is very important: being the holder of a Waldos will allow its owner to be able to give his opinion and influence the direction of THE WALDOS LEGEND project.</p>
            <p className='mt-3'>The Waldos will be able to decide on the desired events for partnerships, collaborations. They will be able to decide on future projects: play 2 earn, second NFT collection, choice of variety of products for the community, etc.</p>
            <p className='mt-3'> In short, be ambitious, original and we will make the community a real strength!</p>
          
            </div>
           
          </div>
        </div>
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-contain rounded-xl"
            src={DAO_IMG}
            alt=""
          />
        </div>
      </main>
    </div>
  )
}
