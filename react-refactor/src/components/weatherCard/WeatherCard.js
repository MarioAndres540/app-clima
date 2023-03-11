import React, { useState, useEffect } from "react";
import styles from "./WeatherCard.module.scss";

const WeatherCard = ({city}) => {
    // Use States
    const [isLoading, setIsLoading] = useState(null);
    const [cityObject, setCityObject] = useState({});
    const [error, setError] = useState(null);

    const options = {
        method: "GET",
        headers: {
            "X-RapidAPI-Key":
                "3ecc15c1d4msh8486921dd1caaecp10d1bcjsnb1e031001ae4",
            "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
        },
    };

    const fetchCityWeather = async (city) => {
        fetch(
            `https://weatherapi-com.p.rapidapi.com/current.json?q=${city}`,
            options
        )
            .then((response) => response.json())
            .then((response) => {
                setCityObject({
                    country: response.location.country,
                    city: response.location.name,
                    condition: response.current.condition.text,
                    icon: response.current.condition.icon,
                    temperature: response.current.temp_c,
                });
                setIsLoading(false);
            })
            .catch((err) => setError(err));
    };

    // Side Effects
    useEffect(() => {
        setIsLoading(true);
        fetchCityWeather(city);
    }, []);

    return isLoading ? (
        "Loading..."
    ) : (
        <article className={styles.weatherCard}>
            <div>
                <h3 className={styles.weatherCardCountry}>{cityObject.country}</h3>
                <h2 className={styles.weatherCardCity}>{cityObject.city}</h2>
                <p className={styles.weatherCardStatus}>{cityObject.condition}</p>
            </div>
            <div>
                <img
                    className={styles.weatherCardIcon}
                    src={cityObject.icon}
                    alt={cityObject.condition}
                />
                <p className={styles.weatherCardGrades}>
                    {cityObject.temperature}°C
                </p>
            </div>
        </article>
    );
};

export default WeatherCard;
