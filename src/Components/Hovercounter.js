import React from 'react'
import withCounter from './withCounter'
const Hovercounter = (props) => {

   
    return (
        <div>
            <h1 onMouseOver={props.handleClick} >{props.name} Hovered {props.count} times</h1>
            <p>{props.username}</p>
        </div>
    )
}

export default withCounter(Hovercounter)
