import axios from "axios";

export const getCountries = () => {
  return axios
    .get("https://covid19.mathdro.id/api/countries")
    .then((response) => {
      const { data } = response;
      return data;
    });
};
