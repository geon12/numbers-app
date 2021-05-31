import React from "react"
import NumberFact from './NumberFact'
import { v4 as uuidv4 } from 'uuid';

function NumbersList({numberFacts}) {
    
    return (
        <div>
            {Object.keys(numberFacts).map((number) => <NumberFact key={uuidv4()} number={number} fact={numberFacts[number]}/>)}
        </div>
    )
}

export default NumbersList