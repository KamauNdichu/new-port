import Navbar from "../../components/navbar/Navbar";
import Project from "../../components/project/Project";
import "./projects.css";

const projects = [
  {
    title: "Image recognition using ML",
    img: "/img/machine-learning.png",
    github: "https://github.com/KamauNdichu/dermatologist-ai",
    documentation: "#",
    description:
      "This project is a deep learning model that aims to visually diagnose melanoma, the deadliest form of skin cancer. In particular, the algorithm will distinguish this malignant skin tumor from two types of benign lesions (nevi and seborrheic keratoses).The problem being addressed here apart from visually dignosing the malignant skin tumor is, trying to come up with a noninvasive, easy to use system that can be used by actual dermatologists in their work. It's also meant to reduce miss-classification of lesions and diagnosis time.",
  },
  {
    title: "Exercise tracker app",
    img: "/img/excercise-tracker.png",
    github: "https://github.com/KamauNdichu/exercise-tracker",
    documentation: "#",
    description:
      "This project is a web application which will be later deployed cross platform to enable one to track their fitness journey. This project is aimed at mastering MERN stack",
  },
];

export default function Projects() {
  return (
    <div>
      <Navbar />
      <h2 className="title">Projects</h2>
      <div className="projectsContainer">
        {projects.map((project) => {
          return (
            <Project
              projectImg={project.img}
              projectDescription={project.description}
              projectTitle={project.title}
              sourceCode={project.github}
              documentation={project.documentation}
            />
          );
        })}
      </div>
    </div>
  );
}
