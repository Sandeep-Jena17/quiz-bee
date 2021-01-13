import React, { useState } from 'react';

const QuestionBox=({question,options,selected})=>{
    const [answar,setAnswar]=useState(options);
return (
 <div className='questionBox'>
     <div className='question'>{question}</div>
    {
         answar.map((text,index)=>(
            <button className="answerBtn" 
                     key={index}
                     onClick={()=>{setAnswar([text])
                      selected(text)}}>
                       {text}  

              </button>
              ))
    }
    
 </div>
)
}
export default QuestionBox;