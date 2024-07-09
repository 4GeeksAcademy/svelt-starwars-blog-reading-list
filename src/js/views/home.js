import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { PeopleCard } from "../component/peoplecard";
import { PlanetCard } from "../component/planetcard";
import { StarshipCard } from "../component/starshipcard";


export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5 container">
			<h1>people</h1>
			<div className="row dataRow">

				{store.people.map((person, index) => {
					return (

						<PeopleCard id={person.uid} url={person.url} />
					)
				})}
			</div>
			<h1>planet</h1>
			<div className="row dataRow ">

				{store.planets.map((planet, index) => {

					return (

						<PlanetCard id={planet.uid} url={planet.url} />

					)
				})}


			</div>
			<h1>starship</h1>
			<div className="row dataRow ">

				{store.starships.map((item, index) => {

					return (

						<StarshipCard id={item.uid} url={item.url} />

					)
				})}


			</div>
		</div>
	);
}