import styles from "./SelectCountry.module.css";

const SelectCountry = ({ countries, handleChange }) => {
  return (
    <div className={styles.wrapper}>
      <select onChange={handleChange} className={styles.selectCountry}>
        <option value="Globales">Globales</option>
        {countries.map((country, index) => (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectCountry;
