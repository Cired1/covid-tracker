import axios from "axios";

export const getCountryCases = (country) => {
  return axios
    .get(`https://covid19.mathdro.id/api/countries/${country}`)
    .then((response) => {
      const { data } = response;
      return data;
    });
};
