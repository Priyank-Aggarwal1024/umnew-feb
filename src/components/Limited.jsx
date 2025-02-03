import '../styles/Limited.css';
import girl from '../assets/girl.svg';
import limited from '../assets/limited.svg';
import certified from '../assets/certified.svg';
import book from '../assets/book.svg';
import lecture from '../assets/lecture.svg';
import wallet from '../assets/wallet.svg';
function Limited() {
    return (
        <div className="umnew-limited">
            <div className="umnew-limited-top">
                <h2 className="umnew-limited-heading">How limited time all access offer works ?</h2>
                <img src={limited} alt="Limited" className="umnew-limited-smallimage" />
            </div>
            <div className="umnew-limited-bottom">
                <div className="umnew-lb-left">
                    <div className="umnew-lb-left-card ">
                        <div className="umnew-lb-left-card-circle">
                            <img src={wallet} alt="Wallet" />
                        </div>
                        <div className="umnew-lblc-head umnew-lblc-head1">
                            <span className="text-white">Enroll</span> By Paying  <span className="text-linethrough"><span className="text-white">₹</span>5999</span>  <span className="text-yellow">₹1199</span>
                        </div>
                        <div className="umnew-lblc-no">1</div>
                    </div>
                    <div className="umnew-lb-left-card">
                        <div className="umnew-lb-left-card-circle">
                            <img src={book} alt="book" />
                        </div>
                        <div className="umnew-lblc-head umnew-lblc-head2">Get access to all <span className="text-yellow">26 courses</span> for 1 year </div>
                        <div className="umnew-lblc-no">2</div>

                    </div>
                    <div className="umnew-lb-left-card">
                        <div className="umnew-lb-left-card-circle">
                            <img src={lecture} alt="lecture" />
                        </div>
                        <div className="umnew-lblc-head umnew-lblc-head2">Learn from lectures and assignments </div>
                        <div className="umnew-lblc-no">3</div>

                    </div><div className="umnew-lb-left-card">
                        <div className="umnew-lb-left-card-circle">
                            <img src={certified} alt="certified" />
                        </div>
                        <div className="umnew-lblc-head umnew-lblc-head4">Get certificate & internship/job assistance</div>
                        <div className="umnew-lblc-no">4</div>

                    </div>
                </div>
                <div className="umnew-lb-right">
                    <img src={girl} alt="girl" />
                    <img src={limited} alt="Limited" className="umnew-limited-largelimited-image" />
                </div>
            </div>
        </div>
    );
}

export default Limited;