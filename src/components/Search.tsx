import { MagnifyingGlassIcon } from "@radix-ui/react-icons";

const Search = ({
  search,
  setSearch,
}: {
  search: string;
  setSearch: (search: string) => void;
}) => {
  return (
    <div
      className="bg-elements transition-all duration-320 rounded-md flex text-text items-center shadow-md 
    md:w-3/5 lg:w-2/5 gap-6 px-8 py-4"
    >
      <MagnifyingGlassIcon className="w-5 h-5" />
      <input
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="bg-transparent outline-none border-none text-sm lg:text-lg"
        type="text"
        placeholder="Search for a country..."
      />
    </div>
  );
};

export default Search;
