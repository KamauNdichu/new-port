import "./education.css";
import School from "./school/School";

const schools = [
  {
    logo: "/img/lu-logo.png",
    name: "Laikipia University",
    duration: "2016- 2021",
    course: "Bsc Computer Science",
  },
  {
    logo: "/img/huawei-logo.png",
    name: "Huawei Academy",
    duration: "2020",
    course: "HCIA Security",
  },
  {
    logo: "/img/cisco-logo.png",
    name: "Cisco Networking Academy",
    duration: "2018, 2019",
    course: "CCNA, Linux, IoT",
  },
];

export default function Education() {
  return (
    <div className="eduContainer">
      <div className="school">
        <h2 className="schoolText">education</h2>
        {schools.map((school) => {
          return (
            <School
              schLogo={school.logo}
              schName={school.name}
              duration={school.duration}
              course={school.course}
            />
          );
        })}
      </div>
      <div className="interests">
        <h2 className="interestsText">interests</h2>
      </div>
    </div>
  );
}
