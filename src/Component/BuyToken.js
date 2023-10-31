import React from 'react'

const BuyToken = () => {
  return (
    <div className="stacking padding-top padding-bottom">
    <div className="container">
    <div className='main'>
       <div className='firstDiv'>
        <div className='HeadingDiv'>
          <h1>
          The METTA<br/>
          Token
          </h1>
          <h5>POWERING THE METTA ECOSYSTEM</h5>
          <p>The METTA Protocol <span>(METTA TOKEN)</span>is a multi-chain that serves <br/>as the utility token for cross-chain transactions and interactions with the METTA Protocol.</p>
        </div>
        <div className='BtnDiv'>
          <button className='metaBtn'>GET METTA</button>
          <button className='Bridge'>BRIDGE METTA</button>
        </div>
        <button className='stakeBtn'> STAKE MEETA</button>
       </div>

       <div>
        <div className='leftDIV'>
          <div className='swap'>
            <div className='imagediv'>
              <img src='\assets\images\logo\download.png' className='downloadImage'/>
              <h5>METTA Swap</h5>
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
           <img src='assets\images\logo\logo192.png' className='BNB_logo'/>
           <button>Metta</button>
           </div>
           <div className='Btn_collection1'>
            <button>Approve</button>
            <button>Swap</button>
            
           </div>
           <p className='bottomtext'>Powered by METTA PROTOCOL</p>

           
         </div>





          
        </div>
       </div>
    </div>  
    </div>
</div>
        
  
    
  )
}

export default BuyToken