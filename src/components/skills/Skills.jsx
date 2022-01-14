import "./skills.css";

export default function Skills() {
  return (
    <div className="skillsContainer">
      <div className="skillsSection">
        <h2 className="skillsText">skills</h2>
        <ul className="skillsUl">
          <li>
            <code>Modern UI/UX design</code>
          </li>
          <li>
            <code>Wordpress development</code>
          </li>
          <li>
            <code>Web apps development</code>
          </li>
          <li>
            <code>Apps integrations and APIs</code>
          </li>
          <li>
            <code>Working with databases</code>
          </li>
          <li>
            <code>Computer Software/Hardware update & maintanance</code>
          </li>
          <li>
            <code>Basic networking essentials</code>
          </li>
          <li>
            <code>Linux Administration</code>
          </li>
        </ul>
      </div>
      <div className="email">
        <a href="mailto:kjndichu01@gmail.com">
          <img
            className="skillsImg"
            src="/img/desktop-email.png"
            alt="wedDev"
          />
        </a>
      </div>
    </div>
  );
}
