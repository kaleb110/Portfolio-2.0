
import { Progress } from "../constants";

const About = () => {
  return (
    <section
      className="containerSub grid grid-cols-1 sm:grid-cols-2 items-start gap-12 py-12"
      id="about-us"
    >
      <div className="flex flex-col gap-4">
        <h1 className="text-white text-3xl bg-gradient pb-2 ">About Me</h1>
        <h1 className="text-blue-400 uppercase text-xl">Web Developer</h1>
        <p className="text-slate-400 text-md leading-5">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque in
          suscipit ea inventore quaerat sed rem animi aspernatur facere.
        </p>
      </div>
      <div className="flex flex-col gap-6 py-6">
        {Progress.map((item) => (
          <div key={item.text} className="flex flex-col gap-2">
            <div className="flex justify-between">
              <a className="text-white text-lg ">{item.text}</a>
              <a className="text-white text-lg pl-5 ">{item.label}</a>
            </div>
            <div className="bg-white w-full h-1.5 rounded-md ">
              <div
                className={`bg-blue-500 h-full rounded-md ${item.label === "80%" ? "w-[80%]" : item.label === "70%" ? "w-[70%]" : "w-[55%] "}`}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;
