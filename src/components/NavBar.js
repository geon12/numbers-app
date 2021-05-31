import {Link} from 'react-router-dom'

function NavBar() {
    return (
        <nav>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/prime-numbers'>Prime Numbers</Link>
                </li>
                <li>
                    <Link to='/todays-date'>Today's Date</Link>
                </li>
                
            </ul>
        </nav>
    )
}

export default NavBar