import React from "react";
import styles from "./WeatherCard.module.scss";

const WeatherCard = (props) => {
    return (
        <article className={styles.weatherCard}>
        <div>
			<h3 className={styles.weatherCardCountry}>{props.country}</h3>
			<h2 className={styles.weatherCardCity}>{props.city}</h2>
			<p className={styles.weatherCardStatus}>{props.condition}</p>
		</div>
		<div>
			<img className={styles.weatherCardIcon} src={props.icon} alt={props.condition}/>
			<p className={styles.weatherCardGrades}>{props.temperature}°C</p>
		</div>
        </article>
    )
}

export default WeatherCard