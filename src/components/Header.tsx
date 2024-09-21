import { MoonIcon, SunIcon } from "@radix-ui/react-icons";

interface HeaderProps {
  theme: "light" | "dark";
  toggleTheme: () => void;
}

const Header = ({ theme, toggleTheme }: HeaderProps) => {
  return (
    <header className="flex transition-all duration-310 justify-between bg-elements items-center py-8 px-4 md:px-20 shadow-md">
      <h1 className="text-sm sm:text-lg xl:text-xl font-bold text-text">
        Where in the world?
      </h1>

      <button
        className="flex items-center gap-2 text-text"
        onClick={toggleTheme}
      >
        {theme === "dark" ? (
          <SunIcon className="w-4 h-4 xl:w-5 xl:h-5" />
        ) : (
          <MoonIcon className="w-4 h-4 xl:w-5 xl:h-5" />
        )}
        <span className="text-sm xl:text-lg font-medium">
          {theme === "dark" ? "Light" : "Dark"} Mode
        </span>
      </button>
    </header>
  );
};

export default Header;
