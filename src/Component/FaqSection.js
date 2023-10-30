import React,{useState} from 'react'

const FaqSection = () => {
    const  [showAnswer, setShowAnswer] = useState(false) 
  return (
    <div className='faqs'>
    <div className='Content'>
        {data.map((item ,i) => (
            <div className='item'>
            <div className='title'>
            <h3>{item.title}</h3>
        <span>+</span>
            </div>
           <div className='content'>
            {data.content}
           </div>
                
            </div>
            
        ))}
        
    </div>
    </div>
  )
}

export default FaqSection


const data = [
    {
    "title": "How does Watchvestor work?",
    "content": "Watchvestor is a platform that allows the everyday person to buy, sell and invest in rare multimillion-dollar timepieces in the same way you would buy a share. This is achieved through the fractionalization of our asset-backed NFTs."
    
},
{
"title": "What is the minimum purchase amount?",
"content": "The minimum trade size is $20 or currency equivalent."
}
    
]