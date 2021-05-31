import {useState,useEffect} from "react"
import NumberFact from "./NumberFact";


function DateFact() {

    const [dateFact, setDateFact] = useState({})
    
    const BASE_URL = 'http://numbersapi.com'
    
    function todaysDate() {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        return `${mm}/${dd}`
    }
    
    useEffect(() => {
        fetch(`${BASE_URL}/${todaysDate()}?json`)
            .then(resp => resp.json())
            .then(resp => setDateFact(resp)) 

    },[]);
    
    return (
        <div>
            <h1>Fact about Today's Date!</h1>
            <NumberFact number={todaysDate()} fact={dateFact.text}/>
        </div>
    )
}

export default DateFact;