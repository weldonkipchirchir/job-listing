import { TbBrandTorchain } from "react-icons/tb";
import { useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { links } from "../../utils/links";
import { getActiveStyles } from "../../utils/links";
function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <div className="flex p-6 justify-between border-b-2 border-gray-400">
      <div className="flex items-center gap-3 max-[900px]:items-start">
        <TbBrandTorchain className="h-9 w-9 text-primary font-bold" />
        <NavLink to="/" className="text-4xl font-bold">
          Jobly
        </NavLink>
      </div>
      <div className="flex-col">
        <div className="hidden max-[900px]:flex items-center justify-end">
          {showMenu ? (
            <IoClose
              className="text-primary w-10 h-10 text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          ) : (
            <HiMenuAlt2
              className="text-primary w-10 h-10 text-3xl cursor-pointer"
              onClick={toggleMenu}
            />
          )}
        </div>
        <div
          className={`flex gap-4 items-center text-[22px] max-[900px]:flex-col max-[900px]:items-center ${
            showMenu ? "flex" : " max-[900px]:hidden"
          }`}
        >
          <div>
            <ul className="flex gap-4 max-[900px]:flex-col">
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
        </div>
      </div>
    </div>
  );
}

export default Nav;