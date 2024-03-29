import { useState, React } from 'react';
import Web3 from 'web3';
import ABI from './abi.json';
import mint_image from '../../images/mint.png'
import ReactFloaterJs from 'react-floaterjs'
import { PlusIcon } from '@heroicons/react/solid'
require('dotenv').config()



function Mint(){

const [isMetamaskLogged, setIsMetamaskLogged] = useState(false);
const [clientAddress, setClientAddress] = useState("");
const [startClientAddress, setStartClientAddress] = useState("");
const [endClientAddress, setEndClientAddress] = useState("");
const [currentPrice, setCurrentPrice] = useState("");
const [currentSupply, setcurrentSupply] = useState("");
const [NFTtoBuy, setNFTtoBuy] = useState(1);
const contractAdress = "0x1C20acf90f08643B922Cd7Db7946663EE8fcC173"

if(isMetamaskLogged){
  const interval = setInterval(async function() {
    const web3 = new Web3(Web3.givenProvider);
    const Contract = new web3.eth.Contract(ABI, contractAdress);
    const _currentPrice = await Contract.methods.mintPrice().call()
    const _currentSupply = await Contract.methods.totalSupply().call()
    setCurrentPrice(web3.utils.fromWei(String(_currentPrice), 'ether'));
    setcurrentSupply(_currentSupply);

  }, 10000);
}
const connectMetamask = async (e) => {
    window.ethereum.request({method:'eth_requestAccounts'})
    .then(res=>{
            // Return the address of the wallet
            setClientAddress(String(res[0]))
            setIsMetamaskLogged(true)
            setStartClientAddress(res[0].slice(0,6))
            setEndClientAddress(res[0].slice(res[0].length - 4))
    })
}

const handleMint = async (e) => {
  const abi = ABI;
  const web3 = new Web3(Web3.givenProvider);
  const Contract = new web3.eth.Contract(abi, contractAdress);
  const accounts = await window.ethereum.enable();
  const account = accounts[0];
  const amount = currentPrice
  const priceFromSC = await Contract.methods.mintPrice().call();
  const gasPrice = await web3.eth.getGasPrice();
  const functionGasFees = await Contract.methods.WaldosMint(1, account).estimateGas({value: priceFromSC});
  const finalGasPrice = Math.floor(1.10 * functionGasFees);
  
  try {
    const result = await Contract.methods
      .WaldosMint(1, account)
      .send({
        from: account,
        gasLimit: finalGasPrice,
        value: priceFromSC,
      })
      .on('error', (error, receipt) => {
        alert('ERROR ' + error.message);
      })
      .on('receipt', function (receipt) {
        alert('Minted!');
      });
  } catch (error) {
    alert(error.message);
  }
};

const buyOneMoreNFT = (event) => {
  if(NFTtoBuy == 5){
    setNFTtoBuy(5)
  }else{
    setNFTtoBuy(NFTtoBuy+1)
  }
 
}
const buyOneLessNFT = (event) => {
  if(NFTtoBuy == 1){
    setNFTtoBuy(1)
  }else{
    setNFTtoBuy(NFTtoBuy-1)
  }
  
}
const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  if(uname.value=="waldos" && pass.value == "avid4"){
    setIsLogged(true);
  }

}

return(

<div> 


<div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover xl:object-fill"
                    src={mint_image}
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 mix-blend-multiply" />
                </div>
                
<div className="relative">


        <div className="right-10 top-5 fixed">
          <span className="relative inline-flex">{isMetamaskLogged ?
            <div>
              <button onClick={connectMetamask}type="button" className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-green-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 dark:ring-slate-200/20' >
                      {startClientAddress } ... {endClientAddress}
                  </button>
                <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                </span>
             </div>
                : 
                <div>
                <button onClick={connectMetamask}type="button" className='z-20 inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-red-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 dark:ring-slate-200/20' >
                        Connect Metamask
                    </button>
                    <span className="flex absolute h-3 w-3 top-0 right-0 -mt-1 -mr-1">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                </div>
          }
     
          </span>
        </div>

    <div className='mx-auto text-center mt-120 xl:mt-[360px]'>
      
      
      <button disabled={isMetamaskLogged ? false : true } onClick={handleMint}  type="button" className={`inline-flex items-center text-center justify-center mx-auto justify-center block flex flex-center 2xl:px-32 px-12 py-6 border border-transparent shadow-sm text-xl font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  ${isMetamaskLogged ? "" : "cursor-not-allowed"}`} >Mint Now
      </button>
      </div>


      {isMetamaskLogged ? 
        
        
        <div className='text-center text-white font-bold text-xl mt-4 title-violet'>

          <div className='mb-6'>Current Price : {currentPrice} eth</div>
          <div>Current Supply : {currentSupply} / 420</div>
        </div>
        : <div></div>
         }

    </div>
  </div>

  
)}

export default Mint;