import React, { useState, useEffect } from "react";
import styles from "./WeatherCardsContainer.module.scss";

const WeatherCardsContainer = () => {

    const options = {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": "3ecc15c1d4msh8486921dd1caaecp10d1bcjsnb1e031001ae4",
          "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
      };

      const fetchCityWeather =  (city) => {
        fetch(`https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`, options)
          .then((response) => response.json())
          .then((response) => {
            debugger;
            return response;
            // console.log("toInner", toInner);
          })
          .catch((err) => console.error(err));
      };

    const initialCities = [
        "medellin",
        "armenia-quindio",
        "bogota",
        "cartagena",
        "sincelejo",
        "bucaramanga",
    ];

    const [isLoading, setIsLoading] = useState(null);

    const renderCities =  () => {
        return initialCities.map(async(city) => {
            const ciudad = await fetchCityWeather(city);
            return ciudad
             
        })
    }
    /*Component did mount */
    useEffect(() => {
        setIsLoading(true);
        console.log(renderCities());
    }, []);



    return (
        <section className={styles.weatherCardIcon}>
            {/* <article id="medellin" className={styles.weatherCard}></article> */}
            {isLoading ? "loading" : null}
        </section>
    );
};

export default WeatherCardsContainer;
