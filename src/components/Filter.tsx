import { ChevronDownIcon } from "@radix-ui/react-icons";
import { useState } from "react";

const regions = ["all", "africa", "americas", "asia", "europe", "oceania"];

interface FilterProps {
  filter: string;
  setFilter: (filter: string) => void;
}

const Filter = ({ filter, setFilter }: FilterProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className="bg-elements rounded-md flex text-text items-center 
    justify-between px-6 py-4 w-3/5 md:max-w-[11rem] lg:max-w-[13rem] shadow-md relative transition-all duration-330"
      onClick={() => setIsOpen(!isOpen)}
    >
      <span className="text-sm lg:text-lg font-medium">Filter by Region</span>
      <ChevronDownIcon className="w-4 h-4 lg:w-5 lg:h-5" />
      {isOpen && (
        <div
          className="absolute left-0 flex flex-col px-4 py-4 -bottom-[12.9rem] md:-bottom-[13rem] lg:-bottom-[16rem] w-full bg-elements rounded-md shadow-md"
          onMouseLeave={() => setIsOpen(false)}
        >
          {regions.map((region) => (
            <span
              key={region}
              className={`text-sm lg:text-lg font-medium hover:bg-background rounded-md p-1 capitalize cursor-pointer ${
                filter === region ? "bg-background" : ""
              }`}
              onClick={() => setFilter(region)}
            >
              {region}
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
