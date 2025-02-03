import '../styles/Topbar.css';
import topbar from '../assets/topbar.png'
function Topbar() {
    return ( <>
    <div className="umnew-topbar"
    style={{
        backgroundImage: `url(${topbar})`,
        width: "100%",
        minHeight: "68px", // Adjust height as needed
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
    }}
    >
        <div className="umnew-topbar-top">Limited time, All Access Offer <span className="text-underline fw-700">Know more</span> </div>
        <div className="umnew-topbar-bottom">Offer Ending Tonight </div>
    </div>
    </> );
}

export default Topbar;