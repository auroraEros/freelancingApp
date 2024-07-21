import { NavLink } from "react-router-dom";

function NavLinkListItem({ children, link }) {
  return (
    <li>
      <NavLink
        to={link}
        className={({ isActive }) =>
          `flex items-center gap-x-2 px-2 py-1.5  rounded-lg transition-all duration-300
    hover:bg-primary-100/50 hover:text-primary-900
    ${isActive ? "bg-primary-100/50 text-primary-900" : ""}`
        }
      >
        {children}
      </NavLink>
    </li>
  );
}

export default NavLinkListItem;
