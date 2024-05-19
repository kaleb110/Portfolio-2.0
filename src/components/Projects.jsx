import { projects } from "../constants";
const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center gap-14 py-24 containerSub"
      id="projects"
    >
      <div className="w-14 h-[6px] rounded-md bg-white btn-gradient"></div>
      <h1 className="bg-gradient text-3xl font-bold ">
        Projects
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-20 sm:px-14">
        {projects.map((project) => (
          <div key={project.id} className="box-shadow">
            <img src={project.image} alt="img" />
            <div className="flex flex-col gap-4 justify-center items-center px-8 py-3">
              <h1 className="text-slate-400 text-center text-xl ">
                {project.title}
              </h1>
              <p className="text-slate-300  text-justify ">
                {project.description}
              </p>
              <p className="text-slate-400 text-md text-justify">Stack</p>
              <div className="flex flex-wrap justify-around gap-4 w-full">
                {project.tags.map((tag, i) => (
                  <div key={i}>
                    <p className="text-[#d8bfbf]">{tag}</p>
                  </div>
                ))}
              </div>
              <div className="flex justify-between gap-8 items-center mt-8 w-full">
                <a
                  href={project.live}
                  className="text-white bg-blue-500 px-3 py-2 rounded-lg"
                >
                  Live
                </a>
                <a
                  href={project.code}
                  className="text-white bg-blue-500 px-3 py-2 rounded-lg"
                >
                  Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
