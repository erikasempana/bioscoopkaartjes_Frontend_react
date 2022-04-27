import React from "react";
import "./member.css";
import Jumbotrontag from "../../assets/img/Jumbotrontag.png";

function Member() {
  return (
    <>
      {/* JOIN A MEMBER */}
      <div className="tickitz_container-member">
        <div className="tickitz_member__title">
          <img src={Jumbotrontag} alt="" />
        </div>
        <div className="tickitz_member__email">
          <form>
            <input
              type="email"
              id="email"
              name="email"
              value="Type your email"
              className="tickitz_member__email-input1"
            />
            <input
              type="submit"
              value="Join Now"
              className="tickitz_member__email-input2"
            />
          </form>
        </div>
        <div className="tickitz_member__tagline">
          <div className="tickitz_tagline1">
            By joining you as a Tickitz member,
          </div>
          <div className="tickitz_tagline2">
            we will always send you the latest updates via email .
          </div>
        </div>
      </div>

      {/* END OF JOIN A MEMBER */}
    </>
  );
}

export default Member;
