import { FaHandshake } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="border-b border-secondary-200 pb-2">
      <NavLink
        to="/"
        className="group flex items-center gap-x-2 px-2 py-1.5 text-secondary-600 rounded-lg transition-all duration-300  hover:text-primary-900 "
      >
        <FaHandshake className="w-8 h-8 text-primary-600 group-hover:text-primary-900 transition-colors duration-300" />
        <p>
          <span className="text-primary-900 group-hover:text-secondary-800 transition-colors duration-300">
            ورک
          </span>
          <span className="group-hover:text-primary-900 transition-colors duration-300">
            ستان
          </span>
        </p>
      </NavLink>
    </div>
  );
}

export default Logo;
