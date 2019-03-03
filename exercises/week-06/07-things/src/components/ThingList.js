import React from 'react'
import Thing from './Thing.js'

const ThingList = (props) => {
    const mappedThings = props.things.map(thing => 
        <Thing 
            {...thing} 
            deleteThing={props.deleteThing} 
            editThing={props.editThing}
            key={thing._id}
        />)

    return (
        <>
            { mappedThings }
        </>
    )
}

export default ThingList