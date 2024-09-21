import { useState } from "react";
import Filter from "./Filter";
import FlagList from "./FlagList";
import Search from "./Search";

const Home = () => {
  const [filter, setFilter] = useState("all");
  const [search, setSearch] = useState("");
  return (
    <div className="flex flex-col px-4 py-6 md:px-20 md:py-12 gap-10 md:gap-12">
      <div className="flex flex-col md:flex-row justify-between gap-4 md:gap-0">
        <Search search={search} setSearch={setSearch} />
        <Filter filter={filter} setFilter={setFilter} />
      </div>
      <FlagList filter={filter} search={search} />
    </div>
  );
};

export default Home;
