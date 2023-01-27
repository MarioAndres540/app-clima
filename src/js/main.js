const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "3ecc15c1d4msh8486921dd1caaecp10d1bcjsnb1e031001ae4",
    "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
  },
};

const template = (country, city, condition, icon, temperature) => {
  return `
		<div class="weather-card__location">
			<h3 class="weather-card__country">${country}</h3>
			<h2 class="weather-card__city">${city}</h2>
			<p class="weather-card__status">${condition}</p>
		</div>
		<div class="weather-card__temperature">
			<img class="weather-card__icon" src="${icon}" alt="${condition}">
			<p class="weather-card__grades">${temperature}°C</p>
		</div>
		`;
};

const fetchCityWeather = async (city) => {
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(city, response);
      const cityElement = document.getElementById(city);
      const toInner = template(
        response.location.country,
        response.location.name,
        response.current.condition.text,
        response.current.condition.icon,
        response.current.temp_c
      );
    cityElement.innerHTML = toInner;
      // console.log("toInner", toInner);
    })
    .catch((err) => console.error(err));
};

fetchCityWeather("medellin");
fetchCityWeather("armenia-quindio");
fetchCityWeather("bogota");
fetchCityWeather("cartagena");
fetchCityWeather("sincelejo");
fetchCityWeather("bucaramanga");
