import { Contacts } from "../constants";

const Contact = () => {
  return (
    <section
      className="containerSub grid grid-cols-1 sm:grid-cols-2 justify-start gap-8 items-center py-20"
      id="contact-us"
    >
      <div className="flex flex-col gap-6 items-start text-white">
        <div className="w-14 h-[6px] rounded-md bg-white btn-gradient"></div>
        <h1 className="bg-gradient text-3xl font-bold mb-3">Contact Me</h1>
        {Contacts.map((item) => (
          <div key={item.text} className="flex items-center gap-6">
            <div>
              {item.icon}
            </div>
            <p className="text-slate-400 text-md">{item.text}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-6">
        <input
          type="text"
          className="text-white bg-black border border-white-400 p-2"
          placeholder="Your Name"
        />
        <input
          type="email"
          className="text-white bg-black border border-white-400 p-2"
          placeholder="Your Email"
        />
        <textarea
          name="message"
          id="message"
          rows={3}
          className="text-white bg-black border border-white-400 p-2"
          placeholder="Message"
        ></textarea>
        <button className="btn-gradient text-white text-lg px-12 py-3 rounded-full">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default Contact;
