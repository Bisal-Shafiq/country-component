import Country from "@/app/component/Country";

export default function CountryName({ params }: { params: { country_name: string } }) {
  const countries: { name: string; population: number; capital: string }[] = [
    {
      name: "Pakistan",
      population: 251269164,
      capital: "Islamabad",
    },
    {
      name: "India",
      population: 1450935791,
      capital: "Dehli",
    },
    {
      name: "Japan",
      population: 123753041,
      capital: "Tokyo",
    },
    {
      name: "Korea",
      population: 51717590,
      capital: "Seoul",
    },
    {
      name: "China",
      population: 1419321278,
      capital: "Beijing",
    },
  ];

  function findCountry(country_url: string) {
    return countries.find((country) => country.name.toLowerCase() === country_url.toLowerCase());
  }

  const result = findCountry(params.country_name);

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh", // Full viewport height to vertically center
        textAlign: "center", // Center text inside the content
      }}
    >
      {result ? (
        <div
          style={{
            border: "2px solid #0070f3",
            padding: "10px",
            borderRadius: "5px",
            display: "inline-block",
            marginBottom: "20px",
            color: "#e8ab41",
          }}
        >
          <Country name={result.name} population={result.population} capital={result.capital} />
        </div>
      ) : (
        <h1 style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}>Country not found</h1>
      )}
    </div>
  );
}
