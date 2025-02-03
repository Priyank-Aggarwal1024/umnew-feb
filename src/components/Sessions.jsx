import "../styles/Sessions.css";
import dash from "../assets/dash.svg";
function Sessions() {
  return (
    <>
      <div className="umnew-sessions">
        <div className="umnew-sessions-left">
          <div className="umnew-sessions-left-top">
            <span className="umnew-sessions-left-top-text">
              Sessions and Webinar
            </span>
          </div>
          <div className="umnew-s-lest-small">
            <img src={dash} alt="Dash" />
          </div>
          <div className="umnew-sessions-left-bottom">
            <ul className="umnew-gslb-ul">
              <li className="umnew-gslb-ul-li">
                Connect, collaborate and learn with your peers
              </li>
              <li className="umnew-gslb-ul-li">
                {" "}
                Work on group projects in virtual college
              </li>
              <li className="umnew-gslb-ul-li">Build lifelong friends </li>
            </ul>
          </div>
        </div>
        <div className="umnew-sessions-right umnew-s-large">
          <img src={dash} alt="Dash" />
        </div>
      </div>
    </>
  );
}

export default Sessions;
