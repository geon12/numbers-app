import NumbersList from "./NumbersList"
import {useState,useEffect} from "react"
function PrimeNumbers() {

    
    const [numberFacts, setNumberFacts] = useState({})
    const BASE_URL = 'http://numbersapi.com'

    useEffect(() => {
        const primeNumbers = [2, 3, 5, 7, 11, 13, 17]
        let URL = `${BASE_URL}/${primeNumbers[0]}`;
        primeNumbers.slice(1).forEach((num) => URL += `,${num}`)
        
        fetch(URL)
            .then(resp => resp.json())
            .then(resp => setNumberFacts(resp)) 

    },[])
    return (
        <div>
            <h1>Prime Number Facts!!</h1>
            <NumbersList numberFacts={numberFacts}/>
        </div>
    )
}

export default PrimeNumbers