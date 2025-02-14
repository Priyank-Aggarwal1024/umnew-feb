import '../styles/Navbar.css'
import logo from '../assets/review/logo.svg'
function Navbar() {
    return ( <>
    <div className="tutedude-navbar">
        <div className="tutedude-navbar-left">
            <img src={logo} alt="Logo" />
        </div>
        <div className="tutedude-navbar-right">
            <div className="tutedude-navbar-loginbtn">Login </div>
            <div className="tutedude-navbar-signupbtn">Sign Up</div>
        </div>
    </div>
    </> );
}

export default Navbar;