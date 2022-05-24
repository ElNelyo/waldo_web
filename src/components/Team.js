import avida from '../images/people/avida.png';
import crespix from '../images/people/crespix.png';
import baba from '../images/people/baba.png';
import nelyo from '../images/people/nelyo.png';

const people = [
    {
      name: 'Gaël AKA "Avida"',
      role: 'Founder',
      imageUrl:avida,
      bio: 'IRL painter and 2D/3D graphic designer in the blockchain, is the initiator of the project: NFT enthusiast and aficionados of the CBD, he is the creator of all the graphic charter and the NFT collection.',
      twitterUrl: 'https://twitter.com/Avidadollart'
    },
    {
        name: 'Laurent AKA "Crespix"',
        role: 'Founder',
        imageUrl:crespix,
        bio: 'connoisseur of the Blockchain and NFT environment, CBD lover, is Head of communication: He is the one who will find us quality partners, very interesting collaborations to offer rewards to the Waldos. He also takes care of the management of social networks.',
        twitterUrl: 'https://twitter.com/crespiix'
    },
    {
        name: 'Bastien AKA "Baba"',
        role: 'Founder',
        imageUrl:baba,
        bio: 'manager of an IRL company in the field of the sale of culture products, also specialized in CBD, is in charge of the "products and logistics" part. With a long experience in the CBD business, it is thanks to him that the Waldos have rare and qualitative products.',
        twitterUrl: '#'
    },
  ]
  
  const friends = [
    {
      name: 'Nelyo',
      role: 'Friends',
      imageUrl:nelyo,
      bio: 'Talented blockchain developer, is the magician who brings THE WALDOS LEGEND project to life thanks to the smart contract, the legal integration with NFTs, the proper functioning of the ecosystem. ( pfp by @missingwatcher) ',
      twitterUrl: 'https://twitter.com/ElNelyo'
    }
  ]

  const advisor = [
    {
      name: 'JPHI',
      role: 'Advisor',
      imageUrl:avida,
      bio: 'Crypto and NFT veteran in the blockchain, founder of the French-speaking community "Les Collectionneurs NFT", is a major asset in THE WALDOS LEGEND. The knowledge and the network it provides are indispensable in all the processes we encounter in the project.',
      twitterUrl: '#'
    }
  ]

  export default function Team() {
    return (
      <div className="bg-gradient-to-t from-orange-500 to-cyan-500">
        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl pacifico text-white">Team</h2>
              <p className="text-xl text-white">
              Our team is a group of friends who each have great skills to give birth to THE WALDOS LEGEND.
              </p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {people.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className='text-2xl pacifico text-indigo-700 mb-2'>{person.name}</h3>
                        <p className="text-indigo-800">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-100">{person.bio}</p>
                      </div>
  
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-pink-600 hover:text-orange-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>



        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Friends</h2>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {friends.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3 className='text-2xl pacifico text-indigo-700 mb-2'>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-100">{person.bio}</p>
                      </div>
  
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-pink-700 hover:text-pink-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>





        <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8 lg:py-24">
          <div className="space-y-12 lg:grid lg:grid-cols-3 lg:gap-8 lg:space-y-0">
            <div className="space-y-5 sm:space-y-4">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Advisor</h2>
              <p className="text-xl text-gray-500"></p>
            </div>
            <div className="lg:col-span-2">
              <ul
                role="list"
                className="space-y-12 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:space-y-0 lg:gap-x-8"
              >
                {advisor.map((person) => (
                  <li key={person.name}>
                    <div className="space-y-4">
                      <div className="aspect-w-3 aspect-h-2">
                        <img className="object-cover shadow-lg rounded-lg" src={person.imageUrl} alt="" />
                      </div>
                      <div className="text-lg leading-6 font-medium space-y-1">
                        <h3>{person.name}</h3>
                        <p className="text-indigo-600">{person.role}</p>
                      </div>
                      <div className="text-lg">
                        <p className="text-gray-500">{person.bio}</p>
                      </div>
  
                      <ul role="list" className="flex space-x-5">
                        <li>
                          <a href={person.twitterUrl} className="text-gray-400 hover:text-gray-500">
                            <span className="sr-only">Twitter</span>
                            <svg className="w-5 h-5" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M6.29 18.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0020 3.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.073 4.073 0 01.8 7.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 010 16.407a11.616 11.616 0 006.29 1.84" />
                            </svg>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>


      </div>



    )
  }
  