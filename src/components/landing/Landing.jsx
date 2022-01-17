import {
  FileDownloadRounded,
  GitHub,
  Instagram,
  LinkedIn,
  Twitter,
} from "@mui/icons-material";
import "./landing.css";

export default function Landing() {
  return (
    <div className="landingContainer">
      <div className="landingProfile">
        <img src="/img/profile.JPG" alt="myPic" className="landingImg" />
        <h3 className="landingProfileName">John K. Ndichu</h3>
        <h2 className="landingProfileText">full stack web developer</h2>
        <div className="landingSocial">
          <a href="https://github.com/KamauNdichu" className="landingIcon">
            <GitHub />
          </a>
          <a
            href="https://www.instagram.com/kj_ndichu/"
            className="landingIcon"
          >
            <Instagram />
          </a>
          <a
            href="https://www.linkedin.com/in/kj-ndichu-819186208/"
            className="landingIcon"
          >
            <LinkedIn />
          </a>
          <a href="https://twitter.com/kj_ndichu" className="landingIcon">
            <Twitter />
          </a>
        </div>
      </div>

      <div className="landingAbout">
        <a className="resume" href="/Kj_cv.pdf" target="_blank">
          <FileDownloadRounded /> &nbsp; resume
        </a>
        <p className="aboutMe">
          Hi, I'm John Ndichu a Full Stack Web Developer with over 1 year
          experience building web applications using MERN stack and Django.
        </p>
        <h2 className="skillsText"> my stack </h2>
        <ul className="landingAboutSkills">
          <li>
            <code>HTML5, CSS3, Javascript</code>
          </li>
          <li>
            <code>React, Express, Node.js, Mongo DB</code>
          </li>
          <li>
            <code>Django, DjangoREST, MySQL</code>
          </li>
          <li>
            <code>REST API</code>
          </li>
          <li>
            <code>Agile, Scrum</code>
          </li>
          <li>
            <code>AWS</code>
          </li>
        </ul>
      </div>
    </div>
  );
}
