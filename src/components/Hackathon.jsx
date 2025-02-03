import '../styles/Hackathon.css'
import hack from '../assets/hackathon.svg'
function Hackathon() {
    return ( <>
    <div className="umnew-hackathon">
        <div className="umnew-hackathon-left">
            <div className="umnew-hackathon-left-content">
                <span className="umnew-hlc-text">Team up and win</span>
                <span className="">🏆 </span>
                <span className="umnew-hlc-text">up to Rs. 10,000 in monthly Hackathons!</span>
            </div>
        </div>
        <div className="umnew-hackathon-right">
            <img src={hack} alt="Hack" />
        </div>
    </div>
    </> );
}

export default Hackathon;