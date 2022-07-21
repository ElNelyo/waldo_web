import { useState, React } from 'react';
import Web3 from 'web3';
import ABI from './abi.json';
import background_dino from '../../images/background_dino.png';
import people_dino from '../../images/people_dino.png'
import dino from '../../images/dino.png'
import ReactFloaterJs from 'react-floaterjs'
import { PlusIcon } from '@heroicons/react/solid'




function Mint(){
const [isLogged, setIsLogged] = useState(false);
const handleMint = async (e) => {
  const abi = ABI;

  const web3 = new Web3(Web3.givenProvider);
  const contractAdress = '0x3d155ac6fccf3ea5d5aaacdf33d9fbf09bb923ed';
  const Contract = new web3.eth.Contract(abi, contractAdress);

  const accounts = await window.ethereum.enable();
  const account = accounts[0];

  const amount = web3.utils.toWei(String(0.04), 'ether');
  const priceFromSC = await Contract.methods.mintPrice().call();

  try {
    const result = await Contract.methods
      .WaldosMint(1, account)
      .send({
        from: account,
        gasLimit: '285000',
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


if(isLogged) {return(

<div className='bg-gradient-to-r from-cyan-500 to-blue-500 bottom-0 pb-20'>

<div className='text-center font-bold text-white pacifico pt-4 text-5xl title-green'>Get your waldos</div>
    <div className='pb-12'>
                    <div className='relative sm:mb-72 text-center pt-12 md:pb-10 2xl:pb-32 mx-auto w-full centered' >
                        <img src={background_dino} className="w-full md:w-1/2 absolute rounded-3xl shadow-xl centered"></img>
                        <ReactFloaterJs>
                          <img src={dino} className="w-full md:w-1/2  mx-auto absolute rounded-3xl centered "></img>
                        </ReactFloaterJs>
                        <img src={people_dino} className="w-full md:w-1/2 mx-auto absolute rounded-3xl centered"></img>
                    </div>
        </div>



    <div className='mx-auto text-center  mt-56 '>
      <button onClick={handleMint} 
        type="button"
        className="inline-flex items-center text-center justify-center mx-auto justify-center block flex flex-center px-6 py-3 border border-transparent shadow-sm text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
      >
        Mint Now
        <PlusIcon className="ml-3 -mr-1 h-5 w-5" aria-hidden="true" />
      </button>
      </div>
  </div>
) }else{
  return (
  <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Username </label>
          <input type="text" name="uname" required />
        </div>
        <div className="input-container">
          <label>Password </label>
          <input type="password" name="pass" required />
        </div>
        <div className="button-container">
          <input type="submit" />
        </div>
      </form>
    </div>
  )}
}

export default Mint;