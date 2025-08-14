import Logo from "../assets/logo.svg";

const Header = ({ setCurrentPage }) => {
  return (
    <header className="flex items-center mb-12 justify-between">
      <div className="flex items-center">
        <img src={Logo} className="h-10" />
      </div>
      <ul className="ml-4 text-sm text-zinc-400 flex gap-8">
        <span
          onClick={() => setCurrentPage("create")}
          className="hover:text-zinc-200 font-medium text-zinc-200 cursor-pointer transition-all"
        >
          Create Image
        </span>
        <span
          onClick={() => setCurrentPage("download")}
          className="hover:text-zinc-200 cursor-pointer transition-all"
        >
          Downloaded
        </span>
      </ul>
    </header>
  );
};

export default Header;
