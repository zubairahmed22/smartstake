import React from 'react'
import { Link } from 'react-router-dom'

const BuyToken = () => {
  return (
    <div className="stacking padding-top padding-bottom">
    <div className="container">
    <div className='main'>
       <div className='firstDiv'>
        <div className='HeadingDiv'>
          <h1>
          The SMARTSTAKING<br/>
          Token
          </h1>
          <h5>POWERING THE SMARTSTAKE ECOSYSTEM</h5>
          <p>The SMARTSTAKING Protocol <span>(SMART TOKEN)</span>is a multi-chain that serves <br/>as the utility token for cross-chain transactions and interactions with the SMARTSTAKE Protocol.</p>
        </div>
        
        <button className='stakeBtn'><Link to={'/Staking'}>STAKE SMARTSTAKE </Link></button>
       </div>

       <div>
        <div className='leftDIV'>
          <div className='swap'>
            <div className='imagediv'>
              <img src='\assets\images\shape\logoicon.svg' className='downloadImage'/>
              <h6>SMARTSTAKING Swap</h6>
            </div>
            <button>CONNECT</button>
          </div>
         <div className='inputDIV'>
           <div className='availableHeading'><p>available:</p></div>
           <div className='secondInputDiv'>
           <input className='inputField' type='number 0'/>
           <img src='\assets\images\logo\gas.png' className='BNB_logo'/>
           <button>tBNB</button>
           </div>
           <div className='Btn_collection'>
            <button>25%</button>
            <button>50%</button>
            <button>75%</button>
            <button>MAX%</button>
           </div>
           

           
         </div>

         <div className='inputDIV'>
           <div className='availableHeading'><p>Balance:</p></div>
           <div className='secondInputDiv'>
           <input className='inputField'/>
           <img src='assets\images\shape\logoicon.svg' className='BNB_logo'/>
           <button>STAKING</button>
           </div>
           <div className='Btn_collection1'>
            <button>Approve</button>
            <button>Swap</button>
            
           </div>
           <p className='bottomtext'>Powered by SMARTSTAKE PROTOCOL</p>

           
         </div>





          
        </div>
       </div>
    </div>  
    </div>
</div>
        
  
    
  )
}

export default BuyToken