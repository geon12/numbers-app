import { useState } from "react"

function NumbersForm({onNumberSubmit}) {
    const [number,setNumber] = useState("")

    function handleNumberSubmit(e) {
        e.preventDefault();
        
        
        if (number) {
            onNumberSubmit(number)
        }
        
        
        setNumber("")
    }

    function handleChange(e) {
        if ((!isNaN(parseInt(e.target.value,10) && Number.isInteger(e.target.value))) || e.target.value === "" ) {
            setNumber(e.target.value)
        }


    }
    return (
        <form onSubmit={handleNumberSubmit}>
            <label>What number are you interested in? </label>
            <input type="number" name="number" step="1" value={number} onChange={handleChange}/>
            
            <button>Submit</button>
        </form>

    )

}

export default NumbersForm