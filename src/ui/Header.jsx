import { useUser } from "../hooks/useUser";
import HeaderMenu from "./HeaderMenu";
import Greeting from "./Greeting";

function Header() {
  const { isLoading } = useUser();
  return (
    <header className="bg-secondary-0 py-4 px-8 border-b border-secondary-200">
      <div
        className={`container xl:max-w-screen-lg flex items-center justify-between gap-x-8
        ${isLoading ? "blur-sm opacity-50" : ""}`}
      >
      
        <Greeting />
        <HeaderMenu />
      </div>
    </header>
  );
}

export default Header;
