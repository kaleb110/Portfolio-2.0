import { Service } from "../constants";

const Services = () => {
  return (
    <div className="containerSub flex flex-col items-start gap-12 py-14">
      <h1 className="bg-gradient text-3xl font-bold">What I Do</h1>
      <div className="text-white grid grid-cols-1 sm:grid-cols-3 gap-12 justify-start ">
        {Service.map((item) => (
          <div key={item.text} className="flex flex-col items-start gap-4">
            <div>
              {item.icon}
            </div>
            <h1 className="text-lg font-bold">{item.text}</h1>
            <p className="text-slate-400 text-md leading-5 font-montserrat max-w-[70%]">
              {item.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services