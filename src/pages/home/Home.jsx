import Education from "../../components/education/Education";
import Experience from "../../components/experience/Experience";
import Footer from "../../components/footer/Footer";
import Landing from "../../components/landing/Landing";
import Navbar from "../../components/navbar/Navbar";
import Skills from "../../components/skills/Skills";
import "./home.css";

const work = [
  {
    logo: "/img/company-logo.jpg",
    company: "Pefrank Smart Solutions Ltd.",
    location: "Thika, Kenya",
    website: "https://www.pefranksmartsolutions.com",
    duration: "Oct 2021 - Present",
    duties: [
      "Frontend development with HTML5, CSS3, Javascript, React.js",
      "Wordpress Development",
      "Working with relational Databases MySQL",
      "MPESA integrations Daraja API",
      "System Testing Evaluation and Documentation",
      "Building prototypes",
    ],
  },
  {
    logo: "/img/tac.jpeg",
    company: "Transafric College.",
    location: "Thika, Kenya",
    website: "https://transafriccollege.co.ke",
    duration: "Jan 2019 - Jan 2020",
    duties: [
      "Taught C and PASCAL programming",
      "Taught ICT, Networking, and Cybersecurity",
      "Computer Hardware/Software update & maintanance",
      "Syllabus coverage in the ICT department",
      "Co-Curricular activities planning",
    ],
  },
];

export default function Home() {
  return (
    <section className="homeContainer">
      <Navbar />
      <Landing />
      <Skills />
      <h2 className="expTitle">Working Experience</h2>
      {work.map((workItem) => {
        return (
          <Experience
            companyLogo={workItem.logo}
            companyName={workItem.company}
            workDuration={workItem.duration}
            workLocation={workItem.location}
            Duties={workItem.duties}
            website={workItem.website}
          />
        );
      })}
      <Education />
      <Footer />
    </section>
  );
}
