import { ArrowLeftIcon } from "@radix-ui/react-icons";
import { Currency } from "../lib/types";
import { useParams, useLocation, Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import BorderCountry from "./BorderCountry";

const CountryPage = () => {
  const { identifier } = useParams();
  const location = useLocation();
  const [country, setCountry] = useState(location.state?.countryData);

  const isCountryCode = /^[A-Z]{3}$/.test(identifier || "");
  const url = isCountryCode
    ? `https://restcountries.com/v3.1/alpha/${identifier}`
    : `https://restcountries.com/v3.1/name/${identifier}`;

  const { data, isPending, isError } = useQuery({
    queryKey: ["country", identifier],
    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json().then((data) => data[0]);
    },
    enabled: !country,
  });

  useEffect(() => {
    if (data) {
      setCountry(data);
    }
  }, [data]);

  if (!country && isPending) return <div>Loading...</div>;

  if (isError) return <div>Error fetching country data</div>;
  if (!country) return <div>No country data available</div>;

  const currenciesList = Object.values(country.currencies as Currency[])
    .map((currency) => `${currency.name} (${currency.symbol})`)
    .join(", ");

  const languagesList = Object.values(country.languages).join(", ");

  return (
    <div className="flex flex-col gap-10 px-6 py-6 lg:px-20 lg:py-20 lg:gap-20">
      <Link
        to="/"
        className="flex items-center rounded-md gap-2 w-28 bg-elements py-2 px-6 lg:w-32 lg:px-8 shadow-lg"
      >
        <ArrowLeftIcon className="w-4 h-4" />

        <span>Back</span>
      </Link>
      <div className="flex flex-col lg:grid lg:grid-cols-2 items-center gap-10">
        <img
          className="object-cover h-52 lg:h-auto lg:w-[80%]"
          src={country.flags.svg}
          alt={country.name.common}
        />
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold lg:text-4xl">
              {country.name.common}
            </h1>
            <div className="flex flex-col gap-6 lg:mb-10 lg:grid lg:grid-cols-2">
              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold ">Native Name:</span>{" "}
                  {country.name.common}
                </p>
                <p>
                  <span className="font-semibold">Population:</span>{" "}
                  {country.population.toLocaleString()}
                </p>
                <p>
                  <span className="font-semibold">Region:</span>{" "}
                  {country.region}
                </p>
                <p>
                  <span className="font-semibold">Sub Region: </span>
                  {country.subregion ? country.subregion : "No Sub Region"}
                </p>
                <p>
                  <span className="font-semibold">Capital: </span>
                  {country.capital ? country.capital[0] : "No Capital"}
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <p>
                  <span className="font-semibold">Top Level Domain:</span>{" "}
                  {country.tld}
                </p>
                <p>
                  <span className="font-semibold">Currencies: </span>
                  {currenciesList}
                </p>

                <p>
                  <span className="font-semibold">Languages: </span>{" "}
                  {languagesList}
                </p>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2 className="font-semibold text-xl">Border Countries:</h2>
              {country.borders ? (
                <div className="grid grid-cols-3 gap-2">
                  {country.borders?.map((border: string) => {
                    return <BorderCountry key={border} border={border} />;
                  })}
                </div>
              ) : (
                <span>No border countries</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountryPage;
