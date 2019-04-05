const baseUrl = "http://localhost:3050/api/cars/";
const axios = require("axios");

const instance = axios.create({
  baseURL: baseUrl
});

export const getAllCars = () => {
  //With Axios
  return instance.get().then(function(response) {
    return response.data.map(i => i);
  });

  //With Fetch
  // return fetch(baseUrl, {
  //   method: "GET"
  // })
  //   .then(res => res.json())
  //   .then(response => response.map(i => i));
};

export const getCarById = id => {
  //With Axios
  return instance.get(`/${id}`).then(function(response) {
    return response.data;
  });

  //With Fetch
  // return fetch(`${baseUrl}/${id}`, {
  //   method: "GET"
  // })
  //   .then(res => res.json())
  //   .then(response => response);
};

export const addCar = car => {
  //With Axios
  return instance.post("", {
    car_id: car.car_id,
    name: car.name,
    brand: car.brand,
    year_release: car.year_release
  });

  //With Fetch
  // return fetch(baseUrl, {
  //   method: "POST",
  //   body: car,
  //   mode: "no-cors"
  // });
};
