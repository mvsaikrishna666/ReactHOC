import React from 'react'
import {useState} from 'react' 
const withCounter = (Wrappedcomponent) => {
    
        const NewComponent =(props)=>{
                const [count,setCount]=useState(0);

                const handleClick=() => {
                    setCount(count+1)
                }
            return <Wrappedcomponent count={count} handleClick={handleClick} name='Sai' {...props}/>
        }
    return NewComponent
}

export default withCounter
