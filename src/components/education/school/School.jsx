import { Download } from "@mui/icons-material";
import "./school.css";

export default function School(props) {
  let { schLogo, schName, duration, course } = props;

  return (
    <section className="sch">
      <div className="schHeader">
        <img src={schLogo} alt="logo" className="schLogo" />
        <h2 className="schName">{schName}</h2>
        <h6 className="schDuration">{duration}</h6>
      </div>
      <div className="courseContainer">
        <h2 className="courseName">{course}</h2>
        <button className="downloadCertBtn">
          <Download /> &nbsp; See Cert
        </button>
      </div>
    </section>
  );
}
