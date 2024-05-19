const Hero = () => {
  return (
    <section
      className="flex justify-center items-start containerSub sm:py-12"
      id="home"
    >
      <div className="py-6 sm:py-12 flex flex-col items-start justify-center gap-6">
        <h1 className="bg-gradient text-[42px] font-bold">
          Hi, <br />
          This Is My Portfolio
        </h1>
        <p className="text-slate-400 text-md uppercase max-w-[520px] pb-4">
          front-end web developer
        </p>
        <button className="btn-gradient text-white text-lg px-12 py-3 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Hero;
