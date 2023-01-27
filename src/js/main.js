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
			<h3 class="weather-card__country">${props.location.country}</h3>
			<h2 class="weather-card__city">Medellin</h2>
			<p class="weather-card__status">Thunder</p>
		</div>
		<div class="weather-card__temperature">
			<img class="weather-card__icon" src="src/img/thunder_icon.png" alt="weather_icon">
			<p class="weather-card__grades">20°c</p>
		</div>
		`;
};

const fetchCityWeather = async (city) => {
  fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
    .then((response) => response.json())
    .then((response) => {
      console.log(city, response);
      const cityElement = document.getElementById(city);
      const toInner = template(response);
      // console.log("toInner", toInner);
    })
    .catch((err) => console.error(err));
};

fetchCityWeather("medellin");
fetchCityWeather("armenia");
fetchCityWeather("bogota");
fetchCityWeather("cartagena");
