import { NavLink } from "react-router-dom";
import { links } from "../../utils/links";
import { getActiveStyles } from "../../utils/links";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className=" padding border-t-2 border-gray-400">
      <div>
        <ul className="flex justify-evenly gap-4 flex-wrap">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              style={({ isActive }) => getActiveStyles(isActive, link.name)}
              className="border-b-2 hover:border-primary text-center"
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex justify-center gap-5 py-8">
        <CiTwitter className="w-9 h-9" />
        <CiLinkedin className="w-9 h-9" />
        <AiOutlineMail className="w-9 h-9" />
      </div>
      <div className="flex justify-center">
        <p className="text-xl">@{year} Jobly Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
