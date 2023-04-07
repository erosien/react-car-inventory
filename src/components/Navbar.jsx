import { Link } from 'react-router-dom'
import { signInWithPopup, signOut } from 'firebase/auth'
import { auth, Providers } from '../config/firebase'

function Navbar() {

    const signOutOnClick = () => {
        signOut(auth)
        location.reload();
    }

    const signInOnClick = async () => {
        const response = await signInWithPopup(auth, Providers.google);
        if ( response.user ) {
            // location.reload();
            console.log(response)
        }
    }

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
                    {
                        !auth.currentUser ?
                            <li><Link to="/" onClick={ () => { signInOnClick() }}>Login</Link></li>
                        :
                            <li><Link to="/" onClick={ () => { signOutOnClick() }}>Log Out</Link></li>
                    }
                </ul>
        </nav>
    )
}

export default Navbar