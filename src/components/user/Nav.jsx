import Avatar from "react-avatar";
import { TbBrandTorchain } from "react-icons/tb";
import { useState, useContext, useEffect, useRef } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../context/ThemeContext";
import { useAuth } from "../../context/auth";
import {
  guestLinks,
  userLinks,
  getActiveStyles,
  adminLinks,
} from "../../utils/links";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";
import { IoMdArrowDropdown } from "react-icons/io";
import { IoMdArrowDropup } from "react-icons/io";
import { useNavigate } from "react-router-dom";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const { theme, toggleTheme } = useContext(ThemeContext);
  const dropdownRef = useRef(null);
  const { isLoggedIn, userInfo, setToken, setIsLoggedIn, setUserInfo } = useAuth();
  const navigate = useNavigate();
  let userName;

  let links;

  if (isLoggedIn && userInfo && userInfo.user) {
    if (userInfo.user.role === "user") {
      links = userLinks;
      userName = userInfo.user.name;
    } else if (userInfo.user.role === "admin") {
      links = adminLinks;
      userName = userInfo.user.name;
    }
  } else {
    links = guestLinks;
  }

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const handleLogout = () => {
    // Handle logout logic here
    setIsLoggedIn(false);
    setToken("");
    setUserInfo(null)
    navigate("/", { replace: true });
    console.log("User logged out");
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="flex p-6 justify-between border-b-2 border-gray-400">
      <div className="flex items-center gap-3 max-[900px]:items-start">
        <TbBrandTorchain className="h-9 w-9 text-primary font-bold" />
        <NavLink to="/" className="text-4xl font-bold dark:text-white">
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
                  className="border-b-2 hover:border-primary text-center dark:text-white"
                >
                  {link.name}
                </NavLink>
              ))}
            </ul>
          </div>
          {isLoggedIn && (
            <div className="relative" ref={dropdownRef}>
              <div
                className="flex items-center justify-center gap-1 cursor-pointer"
                onClick={toggleDropdown}
              >
                <Avatar name={userName} size="40" round={true} />
                {showDropdown ? (
                  <IoMdArrowDropup className="dark:text-white" />
                ) : (
                  <IoMdArrowDropdown className="dark:text-white" />
                )}
              </div>
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded shadow-lg z-20">
                  <div
                    onClick={toggleTheme}
                    className="cursor-pointer p-2 flex items-center justify-between dark:bg-gray-900 text-gray-800 dark:text-gray-200"
                  >
                    {theme === "dark" ? (
                      <>
                        <div className="flex justify-center items-center gap-2">
                          <IoSunnyOutline className="w-6 h-6" />
                          <span className="text-lg">Light mode</span>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex justify-center items-center gap-2">
                          <IoMdMoon className="w-6 h-6" />
                          <span className="text-lg">Dark Mode</span>
                        </div>
                      </>
                    )}
                  </div>
                  <NavLink
                    to={
                      userInfo.user.role == "admin"
                        ? `/settings`
                        : `/user-settings`
                    }
                    className="block px-4 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-lg"
                  >
                    Settings
                  </NavLink>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-2 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 text-lg"
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
