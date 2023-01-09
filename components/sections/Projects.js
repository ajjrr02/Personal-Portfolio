import ProjectCard from "../ProjectCard";

const listOfProjects = [
  {
    projectName: "Electronic Wallet(E-Wallet)",
    projectLink: "https://github.com/ajjrr02/cuddly-happiness/tree/main/E-Wallet%20Secured",
    projectRepo: "https://github.com/ajjrr02/cuddly-happiness",
    projectDescription:
      "This is an Example of a secure android Electronic Wallet Using latest Security Mesures.",
    projectStack: [
      "SQL",
      "GitLab",
      "MongoDB",
      "C",
      "C++",
      "Python",
      "Socket.io",
      "JAVA",
      "Heroku",
    ],
  },
  {
    projectName: "Personal Website v2.3",
    projectLink: "https://anassjardane.netlify.app",
    projectRepo: "https://github.com/ajjrr02/P-Website",
    projectDescription:
      "This is the first version of my personal website. Built using frameworks, libraries and hosting platforms I wanted to experiment with and learn more about.",
    projectStack: ["React", "Next.js", "Tailwind CSS", "Vercel"],
  },
];

function Projects() {
  return (
    <section id='projects' className='px-8 py-8 sm:px-14'>
      <h2 className='mb-4 text-3xl font-bold text-custom-light-tarawera dark:text-custom-dark-off-by-one sm:text-4xl md:mb-6'>
        Projects
      </h2>
      <div className='md:grid md:grid-cols-2 md:gap-4'>
        {listOfProjects.map((project, index) => {
          return <ProjectCard project={project} key={project.projectName} />;
        })}
      </div>
    </section>
  );
}

export default Projects;
