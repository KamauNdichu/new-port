import { DocumentScannerRounded, GitHub } from "@mui/icons-material";
import "./project.css";

export default function Project(props) {
  let {
    projectImg,
    projectDescription,
    sourceCode,
    projectTitle,
    documentation,
  } = props;

  return (
    <div className="projectContainer">
      <img src={projectImg} alt="projectImg" className="projectImg" />
      <h2 className="projectTitle">{projectTitle}</h2>
      <p className="projectDescription">{projectDescription}</p>
      <div className="actionButtons">
        <a href={documentation} className="btn documentation">
          <DocumentScannerRounded /> &nbsp; Documentation
        </a>
        <a href={sourceCode} className="btn sourceCode">
          <GitHub /> &nbsp; Source Code
        </a>
      </div>
    </div>
  );
}
