import axios from "axios";

export const getAllCases = () => {
  return axios
    .get("https://covid19.mathdro.id/api")
    .then((response) => {
      const { data } = response;
      return data;
    });
};
