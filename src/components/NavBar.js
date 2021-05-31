import {NavLink} from 'react-router-dom'
import './NavBar.css'

function NavBar() {
    const activeStyle={
        fontWeight: "bold",
        color: "red",
        backgroundColor: "black"
      }
    
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact to='/' activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact to='/prime-numbers' activeStyle={activeStyle}>Prime Numbers</NavLink>
                </li>
                <li>
                    <NavLink exact to='/todays-date' activeStyle={activeStyle}>Today's Date</NavLink>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar