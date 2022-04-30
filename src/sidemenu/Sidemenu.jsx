import React from "react";
import {
  FaPhone,
  FaClock,
  FaEnvelope,
  FaTwitter,
  FaInstagram,
  FaFacebook,
  FaYoutube,
} from "react-icons/fa";
import "./sidemenu.css";

const Sidemenu = () => {
  return (
    <section className="sidemenu">
      <div className="toplogo">
        <img
          src="https://web.whatsapp.com/b17e2594-2f8f-41fe-8cce-4bc751c81c4d"
          alt=""
        />
      </div>
      <div className="paragraph">
        <p>
          Feugiat nulla facilisis at vero eros et curt accumsan et iusto odio
          dignissim qui blandit praesent luptatum zzril.
        </p>
        <div className="afterpara">
          <span>
            <FaClock />
          </span>

          <div>
            <h5>Mon - Fri: 9:00AM - 10:00PM </h5>
            <p>Sat - Sun: Closed</p>
          </div>
        </div>
        <div className="phone">
          <span>
            <FaPhone />
          </span>

          <div>
            <p>+ 123 1800-567-8990</p>
            <p>+ 123 1800-453-1546</p>
          </div>
        </div>
        <div className="envolope">
          <span>
            <FaEnvelope />
          </span>
          &nbsp;
          <div>
            <h5>mediclinic@qodeinteractive.com</h5>
            <p>clinic@qodeinteractive.com</p>
          </div>
        </div>
      </div>
      <hr />

      <section className="endsec">
        <h4 style={{ fontsize: "larger" }}>Related Posts</h4>
        <div className="sidemidsecdiv">
          <div>
            <img
              src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-1-186x186.jpg"
              alt="sidemenu"
            />
          </div>

          <div>
            <h4>Amazing Technology</h4>
            <h5>April 13, 2017</h5>
          </div>
        </div>

        <div className="sidemidsecdiv">
          <div>
            <img
              src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-2-186x186.jpg"
              alt="sidemenu"
            />
          </div>

          <div>
            <h4>Medical Research</h4>
            <h5>April 12, 2017</h5>
          </div>
        </div>

        <div className="sidemidsecdiv">
          <div>
            <img
              src="https://mediclinic.qodeinteractive.com/wp-content/uploads/2017/04/blog-post-3-186x186.jpg"
              alt="sidemenu"
            />
          </div>

          <div>
            <h4>Achieving Better Health</h4>
            <h5>April 13, 2017</h5>
          </div>
        </div>
      </section>
      <hr />

      <div className="logos">
        <span>
          <FaTwitter />
        </span>
        <span>
          <FaFacebook />
        </span>
        <span>
          <FaInstagram />
        </span>
        <span>
          <FaYoutube />
        </span>
      </div>
    </section>
  );
};

export default Sidemenu;
