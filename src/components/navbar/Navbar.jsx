import { DeveloperModeRounded } from "@mui/icons-material";
import { Link } from "react-router-dom";

import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navContainer">
      <div className="navLogo">
        <DeveloperModeRounded sx={{ fontSize: 50 }} className="icon" />
      </div>
      <nav className="nav">
        <Link style={{ textDecoration: "none" }} to="/">
          <button className="navItem">about me</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/projects">
          <button className="navItem">projects</button>
        </Link>
        <Link style={{ textDecoration: "none" }} to="/blog">
          <button className="navItem">blog</button>
        </Link>
      </nav>
    </header>
  );
}
