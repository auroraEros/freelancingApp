import EditProfileLink from "../features/authentication/EditProfileLink";
import LogoutButton from "./LogoutButton";
import ThemeToggle from "./ThemeToggle";

function NavLinks() {
  return (
    <>
      <li className="flex">
        <EditProfileLink />
      </li>
      <li className="flex">
        <ThemeToggle />
      </li>
      <li className="flex">
        <LogoutButton className="text-primary-900 hover:text-error" />
      </li>
    </>
  );
}

export default NavLinks;
