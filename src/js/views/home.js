import React, { useContext } from "react";
import { Context } from "../store/appContext";
import "../../styles/home.css";
import { PeopleCard } from "../component/peoplecard";
import { PlanetCard } from "../component/planetcard";
export const Home = () => {
	const { store, actions } = useContext(Context)
	return (
		<div className="text-center mt-5">
<h1>people</h1>
			<div className = "d-flex flex-nowrap overflow-y-hidden"> 
				
				{store.people.map((person, index) => {
					return (
						<PeopleCard id={person.uid} url={person.url} />
					)
				})}
			</div>

			<div>
			<h1>planet</h1>
			{store.planets.map((planet,index) => {
				return (
					<PlanetCard id={planet.uid} url={planet.rul} />
				)
			})}

				
			</div>
		</div>
	);
}