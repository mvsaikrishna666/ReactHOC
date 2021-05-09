import React from 'react'
import withCounter from './withCounter'
const Clickcounter = (props) => {
    
    return (
        <div>
            <button onClick={props.handleClick} >{props.name} Clicked {props.count} times</button>
            <p>{props.username}</p>
        </div>
    )
}

export default withCounter(Clickcounter)
