import React, { useEffect, useState } from "react"
import NumbersList from "./NumbersList"

function NumberContainer() {
    const [numberFacts, setNumberFacts] = useState({})
    const BASE_URL = 'http://numbersapi.com'
    function createRandomNumbersArr(size) {
        const randomArray = []
        for (let i=0;i<size;i++) {
            let randomNum = Math.floor(Math.random()*101) //random number between 0 and 100

            if (!randomArray.includes(randomNum)) {
                randomArray.push(randomNum)
            } else {
                while(!randomArray.includes(randomNum)) {
                    randomNum = Math.floor(Math.random()*101)
                }
                randomArray.push(randomNum)
            }

        }

        return randomArray
    }

    useEffect(() => {
        const randomNumbers = createRandomNumbersArr(5);
        let URL = `${BASE_URL}/${randomNumbers[0]}`;
        randomNumbers.slice(1).forEach((num) => URL += `,${num}`)
        
        fetch(URL)
            .then(resp => resp.json())
            .then(resp => setNumberFacts(resp)) 

    },[])
    return (
        <NumbersList numberFacts={numberFacts}/>
    )
}

export default NumberContainer;