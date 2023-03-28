import { Link } from 'react-router-dom'

function Navbar() {
    return (
        <nav>
            <div className="brand">
                <h1>Car Collection</h1>
            </div>
            <div className="links"></div>
                <ul className="header">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Profile">Profile</Link></li>
                    <li><Link to="/Dashboard">Dashboard</Link></li>
                </ul>
        </nav>
    )
}

export default Navbar