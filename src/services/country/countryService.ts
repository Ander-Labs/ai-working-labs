// src/services/countryService.ts
import axios from "axios";

export const getCountries = async () => {
  const response = await axios.get("https://restcountries.com/v3.1/all");
  return response.data.map((country: any) => ({
    name: country.name.common,
    code: country.cca2,
  }));
};

//  const [countries, setCountries] = useState<{ name: string; code: string }[]>(
//    []
//  );

//  useEffect(() => {
//    const fetchCountries = async () => {
//      const countriesData = await getCountries();
//      setCountries(countriesData);
//    };
//    fetchCountries();
//  }, []);

// {
//   countries.map((country) => (
//     <option key={country.code} value={country.name}>
//       {country.name}
//     </option>
//   ));
// }
