
import NavLinks from "./NavLinks";

function HeaderMenu() {
  return (
    <nav className="">
      <ul className="flex items-center gap-x-2">
        <NavLinks/>
      </ul>
    </nav>
  );
}

export default HeaderMenu;
