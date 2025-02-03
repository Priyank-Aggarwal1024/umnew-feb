import "../styles/GroupStudy.css";
import dash from "../assets/dash.svg";
function GroupStudy() {
  return (
    <>
      <div className="umnew-groupstudy">
        <div className="umnew-groupstudy-left">
          <div className="umnew-groupstudy-left-top">
            <span className="umnew-groupstudy-left-top-text">
              {" "}
              Group Study{" "}
            </span>
            <span className="umnew-groupstudy-left-top-span">📚</span>{" "}
            <span className="umnew-groupstudy-left-top-text">
              with your Peers
            </span>
          </div>
<div className="umnew-gs-lest-small">
<img src={dash} alt="Dash" />

</div>
          <div className="umnew-groupstudy-left-bottom">
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
        <div className="umnew-groupstudy-right umnew-gs-large">
          <img src={dash} alt="Dash" />
        </div>
      </div>
    </>
  );
}

export default GroupStudy;
