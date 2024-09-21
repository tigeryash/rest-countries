import { useQuery } from "@tanstack/react-query";

const BorderCountry = ({ border }: { border: string }) => {
  const url = `https://restcountries.com/v3.1/alpha/${border}`;
  const { data, isPending, isError } = useQuery({
    queryKey: ["border", border],

    queryFn: async () => {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return await response.json();
    },
  });

  if (isPending) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;
  console.log(data);
  if (data)
    return (
      <div className="bg-elements shadow-md px-3 text-center py-2 text-sm rounded-sm">
        {data[0].name.common}
      </div>
    );
};

export default BorderCountry;
