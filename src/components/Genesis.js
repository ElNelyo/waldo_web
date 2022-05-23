/* This example requires Tailwind CSS v2.0+ */
import { CheckIcon } from '@heroicons/react/outline'
import GenesisImg from '../images/genesis.png'

const hobbyFeatures = ['30% discount on CBD products']
const scaleFeatures = ['40% off CBD products']
const growthFeatures = [
    '40% off CBD products',
  'all THE WALDOS LEGEND merchandising'
]

export default function Genesis() {
  return (
      <div>
 <div className="bg-gradient-to-r from-cyan-500 to-blue-500 ">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 pacifico font-semibold text-gray-100 uppercase tracking-wider">What are the rarities ?</h2>
          <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl pacifico">
            GENESIS COLLECTION
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-100 sm:mt-5 sm:text-2xl">
          The collection consists of 4200 NFTs. 4200 unique and super cool Waldos that from the first level of rarity will provide amazing benefits !
          </p>
        </div>
      </div>

      <div className="mt-16 bg-gradient-to-r from-cyan-500 to-blue-500  pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gradient-to-r from-cyan-500 to-blue-500  lg:h-2/3" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-orange-300 px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-100" id="tier-hobby">
                          COMMON
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-100">
                            <span className="font-extrabold">3700</span>
                          </span>
                          <span className="text-xl font-medium text-gray-100">NFTs</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between p-6 bg-orange-200 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {hobbyFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-orange-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-100">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                    
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div
                    className="pointer-events-none absolute inset-0 rounded-lg border-2 border-indigo-600"
                    aria-hidden="true"
                  />
                  <div className="bg-green-400 rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3 className="text-center text-3xl font-semibold text-gray-100 sm:-mx-6" id="tier-growth">
                        MYTHIC
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-100 sm:text-6xl">
                          <span className="font-extrabold">100</span>
                        </span>
                        <span className="text-2xl font-medium text-gray-100">NFTs</span>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-b-lg pt-10 pb-8 px-6 bg-green-300 sm:px-10 sm:py-10">
                    <ul role="list" className="space-y-4">
                      {growthFeatures.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-100">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-10">
                      <div className="rounded-lg shadow-md">
                      
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-pink-300 px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-100" id="tier-scale">
                          RARE
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                          <span className="px-3 flex items-start text-6xl tracking-tight text-gray-100">
                            <span className="font-extrabold">400</span>
                          </span>
                          <span className="text-xl font-medium text-gray-100">NFTs</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between p-6 bg-pink-200 sm:p-10 lg:p-6 xl:p-10">
                      <ul role="list" className="space-y-4">
                        {scaleFeatures.map((feature) => (
                          <li key={feature} className="flex items-start">
                            <div className="flex-shrink-0">
                              <CheckIcon className="flex-shrink-0 h-6 w-6 text-pink-500" aria-hidden="true" />
                            </div>
                            <p className="ml-3 text-base font-medium text-gray-100">{feature}</p>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-8">
                        <div className="rounded-lg shadow-md">
                        
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <img src={GenesisImg} alt="genesis"></img>
      </div>
   
  )
}