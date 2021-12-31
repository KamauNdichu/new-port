import Navbar from "../../components/navbar/Navbar";
import Project from "../../components/project/Project";
import "./projects.css";

const projects = [
  {
    title: "Image recognition using ML",
    img: "/img/1.jpg",
    github: "https://github.com",
    documentation: "/Kj_cv.pdf",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae error consectetur exercitationem, aliquam porro ex alias mollitia? Architecto ex neque unde explicabo dolorem numquam non odit eum sapiente, cum alias optio doloremque dignissimos voluptatibus temporibus fugit amet voluptates accusantium ea voluptas vero. Neque necessitatibus itaque velit minus, architecto quod!",
  },
  {
    title: "Netflix Clone using react",
    img: "/img/1.jpg",
    github: "https://github.com",
    documentation: "/Kj_cv.pdf",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo vitae error consectetur exercitationem, aliquam porro ex alias mollitia? Architecto ex neque unde explicabo dolorem numquam non odit eum sapiente, cum alias optio doloremque dignissimos voluptatibus temporibus fugit amet voluptates accusantium ea voluptas vero. Neque necessitatibus itaque velit minus, architecto quod!",
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
