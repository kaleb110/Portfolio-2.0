import { socialLinks } from "../constants";

const Footer = () => {
  return (
    <div className="flex justify-between max-sm:flex-col max-sm:items-center  gap-4 py-4 px-2">
      <p className="text-slate-400">designed & developed by kaleb</p>
      <p className="text-slate-400">copyright©2024 kal</p>
      <ul className="list-none flex justify-center items-center gap-4">
        {socialLinks.map((social) => (
          <a
            key={social.id}
            href={social.href}
            className="text-white transition-[0.3] p-[6px] rounded-full hover:bg-slate-800 hover:scale-125 hover:cursor-pointer"
          >
            {social.icon}
          </a>
        ))}
      </ul>
    </div>
  );
};

export default Footer;
