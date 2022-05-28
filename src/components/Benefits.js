/* This example requires Tailwind CSS v2.0+ */
import { InboxIcon, MapIcon, SparklesIcon } from '@heroicons/react/outline'
import { Zoom } from 'react-reveal'
import benefits_1 from '../images/benefits_1.png'
import benefits_2 from '../images/benefits_2.png'
import benefits_3 from '../images/benefits_3.png'

export default function Benefits() {
  return (
    <div className="relative bg-gradient-to-r from-green-500 to-blue-500  pt-16 pb-32 overflow-hidden">
      <div className="relative">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
            <div>
              <div>
                <span className="h-12 w-12 rounded-md flex items-center justify-center bg-green-500">
                  <SparklesIcon className="h-6 w-6 text-white" aria-hidden="true" />
                </span>
              </div>
              <div className="mt-6">
                <Zoom>
                <h2 className="text-4xl font-extrabold tracking-tight text-white pacifico title-green">
                  CBD PRODUCT
                </h2>
                <div className="mt-4 text-2xl text-white indie">
                The Waldos will have exclusive access to the Waldos Shop: On the menu, varieties of high quality CBD products, tested and approved by the team to satisfy all desires.
                    
                    <ul className='mx-4 my-2'>
                     <li>CBD flowers</li>
                     <li>CBD resins</li>
                     <li>Cosmetic products</li>
                     <li>Products with therapeutic effects</li>
                    </ul>
             

                    But also merchandising such as:
                    <ul className='mx-4 my-2'>
                     <li>A WALDOS brand, Hoodies, Tshirts, hats, etc.</li>
                     <li>Accessories, lighters, grinders, stickers, ect</li>
                    </ul>
                   
                    
                    And above all, Waldos aurton attractive prices depending on the rarity of their NFT ranging from 30% to 50% discount on all CBD products.
                </div>
                </Zoom>
              </div>
            </div>
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0">
            <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <Zoom>
              <img
                className="w-1/2 md:w-full rounded-3xl shadow-3xl ring-1 ring-black ring-opacity-5 "
                src={benefits_3}
                alt="Inbox user interface"
              />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-24">
        <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
          <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
            
          </div>
          <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
            <div className="h-full sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
            <Zoom>
              <img
                className="w-full mt-6 md:mt-0 md:w-full mx-auto rounded-3xl shadow-xl ring-1 ring-black ring-opacity-5 "
                src={benefits_2}
                alt="Customer profile user interface"
              />
              </Zoom>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
