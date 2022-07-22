import { useState, React } from 'react';
import Web3 from 'web3';
import ABI from './abi.json';
import background_dino from '../../images/background_dino.png';
import people_dino from '../../images/people_dino.png'
import dino from '../../images/dino.png'
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
const contractAdress = "0x3d155Ac6FCcf3EA5d5AaacdF33D9fBf09Bb923eD"

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

const handleSubmit = (event) => {
  //Prevent page reload
  event.preventDefault();

  var { uname, pass } = document.forms[0];

  if(uname.value=="waldos" && pass.value == "avid4"){
    setIsLogged(true);
  }

}


return(

<div className='bg-gradient-to-r from-cyan-500 to-blue-500 bottom-0 h-full fixed top-0 left-0 w-full h-full pb-20'>

<div className='text-center font-bold text-white pacifico pt-4 text-5xl title-green'>Get your waldos</div>
    <div className='pb-20'>
                    <div className='relative sm:mb-72 text-center pt-12 md:pb-10 2xl:pb-32 mx-auto w-full centered' >
                        <img src={background_dino} className="w-full md:w-1/3 absolute rounded-3xl shadow-xl centered"></img>
                        <ReactFloaterJs>
                          <img src={dino} className="w-full md:w-1/3  mx-auto absolute rounded-3xl centered "></img>
                        </ReactFloaterJs>
                        <img src={people_dino} className="w-full md:w-1/3 mx-auto absolute rounded-3xl centered"></img>
                    </div>
        </div>


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
                <button onClick={connectMetamask}type="button" className='inline-flex items-center px-4 py-2 font-semibold leading-6 text-sm shadow rounded-md text-red-500 bg-white dark:bg-slate-800 transition ease-in-out duration-150 dark:ring-slate-200/20' >
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

    <div className='mx-auto text-center  mt-12 '>
      <button disabled={isMetamaskLogged ? false : true } onClick={handleMint}  type="button" className={`inline-flex items-center text-center justify-center mx-auto justify-center block flex flex-center px-32 py-6 border border-transparent shadow-sm text-xl font-bold rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500  ${isMetamaskLogged ? "" : "cursor-not-allowed"}`} >Mint Now
      </button>
      </div>


      {isMetamaskLogged ? 
        
        
        <div className='text-center text-white font-bold text-xl mt-4'>

          <div>Current Price : {currentPrice} eth</div>
          <div>Current Supply : {currentSupply} / 4200</div>
        </div>
        : <div></div>
         }

  </div>

  
)}

export default Mint;