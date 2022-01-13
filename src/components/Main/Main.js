import styles from "./Main.module.css";
import { useEffect, useState } from "react";
import CardList from "../CardList/CardList";
import SelectCountry from "../SelectCountry/SelectCountry";
import Chart from "../Chart/Chart";
import { getCountries } from "../../services/getCountries";
import { getAllCases } from "../../services/getAllCases";
import { getCountryCases } from "../../services/getCountryCases";

const Main = () => {
  const [country, setCountry] = useState("Globales");

  const [countries, setCountries] = useState([]);
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    getCountries().then((data) => {
      setCountries(data.countries);
    });
  }, []);

  useEffect(() => {
    if (country === "Globales") {
      getAllCases().then((data) => {
        setCountryData(data);
      });
    } else {
      getCountryCases(country).then((data) => {
        setCountryData(data);
      });
    }
  }, [country]);

  const handleChange = (e) => {
    setCountry(e.target.value);
  };

  if (!countryData) {
    return null;
  }

  return (
    <main className={styles.wrapper}>
      <div className={styles.center}>
        <SelectCountry handleChange={handleChange} countries={countries} />
        <CardList
          confirmed={countryData.confirmed.value}
          deaths={countryData.deaths.value}
          recovered={countryData.recovered.value}
          lastUpdate={countryData.lastUpdate}
        />
        <Chart
          country={country}
          confirmed={countryData.confirmed.value}
          deaths={countryData.deaths.value}
          recovered={countryData.recovered.value}
        />
      </div>
    </main>
  );
};

export default Main;
