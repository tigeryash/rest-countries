import { Link } from "react-router-dom";
import { Country } from "../lib/types";

const CountryCard = ({ country }: { country: Country }) => {
  return (
    <div className="bg-elements rounded-md shadow-md">
      <img
        className="w-full rounded-t-md h-40 xl:h-52 object-cover"
        src={country.flags.png}
        alt={country.name.common}
      />
      <div className="px-6 pb-12  pt-6">
        <Link to={`/country/${country.cca3}`} state={{ countryData: country }}>
          <h2 className="text-lg font-semibold mb-4">{country.name.common}</h2>
        </Link>

        <p>
          <span className="font-semibold">Population:</span>{" "}
          {country.population.toLocaleString()}
        </p>
        <p>
          <span className="font-semibold">Region:</span> {country.region}
        </p>
        <p>
          <span className="font-semibold">Capital:</span> {country.capital}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
