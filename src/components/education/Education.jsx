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
    <section className="eduContainer">
      <h2 className="schoolText">education</h2>
      <section className="schContainer">
        {schools.map((school, index) => {
          return (
            <School
              key={index}
              schLogo={school.logo}
              schName={school.name}
              duration={school.duration}
              course={school.course}
            />
          );
        })}
      </section>
    </section>
  );
}
