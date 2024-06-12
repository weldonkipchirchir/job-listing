import { NavLink } from "react-router-dom";
import { CiTwitter } from "react-icons/ci";
import { CiLinkedin } from "react-icons/ci";
import { AiOutlineMail } from "react-icons/ai";
import { guestLinks, userLinks, adminLinks, getActiveStyles } from "../../utils/links";
function Footer() {
  const year = new Date().getFullYear();

  const loggedIn = true;
  // const account = "";
  const account = "user";

  let links;

  if (loggedIn && account == "user") {
    links = userLinks;
  } else if (loggedIn && account == "admin") {
    links = adminLinks;
  } else {
    links = guestLinks;
  }

  return (
    <div className=" padding border-t-2 border-gray-400">
      <div>
        <ul className="flex justify-evenly gap-4 flex-wrap">
          {links.map((link, index) => (
            <NavLink
              key={index}
              to={link.link}
              style={({ isActive }) => getActiveStyles(isActive, link.name)}
              className="border-b-2 dark:text-white hover:border-primary text-center"
            >
              {link.name}
            </NavLink>
          ))}
        </ul>
      </div>
      <div className="flex justify-center gap-5 py-8">
        <CiTwitter className="w-9 h-9 dark:text-white" />
        <CiLinkedin className="w-9 h-9 dark:text-white" />
        <AiOutlineMail className="w-9 h-9 dark:text-white" />
      </div>
      <div className="flex justify-center">
        <p className="text-xl dark:text-white">@{year} Jobly Inc.</p>
      </div>
    </div>
  );
}

export default Footer;
