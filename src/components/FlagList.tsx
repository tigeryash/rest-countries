import { useQuery } from "@tanstack/react-query";
import { Country } from "../lib/types";
import CountryCard from "./CountryCard";

type FlagListProps = {
  filter: string;
  search: string;
};

const FlagList = ({ filter, search }: FlagListProps) => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["flags", filter],
    queryFn: async () => {
      const response = await fetch(
        `https://restcountries.com/v3.1/${
          filter === "all" ? "all" : `region/${filter}`
        }`
      );
      const data = await response.json();
      return data;
    },
  });

  if (isPending) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  const filteredData = data.filter((country: Country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );
  return (
    <div
      className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 xl:grid-cols-4 px-9 md:px-0 gap-10 
    xl:gap-16"
    >
      {filteredData.map((country: Country) => (
        <CountryCard key={country.name.common} country={country} />
      ))}
    </div>
  );
};

export default FlagList;
