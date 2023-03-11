import styles from "./WeatherCardsContainer.module.scss";
import WeatherCard from "../weatherCard/WeatherCard";

const WeatherCardsContainer = () => {

    const initialCities = [
        "medellin",
        "armenia-quindio",
        "bogota",
        "cartagena",
        "sincelejo",
        "bucaramanga",
    ];
    const renderCities = (cities) => {
      return cities.map((city) => (<WeatherCard city={city} />)) 
    }

    return (
        <section className={styles.weatherSection}>
            {renderCities(initialCities)}
        </section>
    );
};

export default WeatherCardsContainer;
