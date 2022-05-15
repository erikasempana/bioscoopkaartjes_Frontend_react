import React from "react";
import "./member.css";
import Membership from "../../assets/img1/membership.png";

function Member() {
  return (
    <>
      {/* JOIN A MEMBER */}
      <section id="membership">
        <div className="container membership_container text-center">
          <div className="row membership_img ms-auto py-5">
            <img src={Membership} alt="" />
          </div>
          <div className="row membership_email">
            <form>
              <input
                type="email"
                id="email"
                name="email"
                value="Type your email"
                className="d-lg input"
              />
              <button type="button" value="Join Now" className="submit d-lg btn-outline-primary">
                Join Now
              </button>
            </form>
          </div>
          <footer className="row membership_footer py-5">
            <p className="lh-base">
              By joining you as a Tickitz member, <br />
              we will always send you the latest updates via email .
            </p>
          </footer>
        </div>
      </section>

      {/* END OF JOIN A MEMBER */}
    </>
  );
}

export default Member;
