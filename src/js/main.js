const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3ecc15c1d4msh8486921dd1caaecp10d1bcjsnb1e031001ae4',
		'X-RapidAPI-Host': 'weatherapi-com.p.rapidapi.com'
	}
};



    
const fetchCityWeather = (city) => {

    fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err)); 
}

fetchCityWeather("medellin")
fetchCityWeather("armenia quindio")