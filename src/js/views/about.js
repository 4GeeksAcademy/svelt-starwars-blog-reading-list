import React, { useContext } from "react";
import { useParams } from "react-router";
import { Context } from "../store/appContext";

export const AboutPeople = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()

    const matchingId = store.people.find((people) => people.uid == params.id)
    return (<div>
        <h1>{matchingId.name}</h1>
    </div>
    )
}
// FEEL READY TO COMMIT REMEMBER TO ADD THE NEEDED JSX TO MAKE THE CODE LIKE THE GIF


export const AboutStarships = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()

    const matchingId = store.starships.find((starships) => starships.uid == params.id)
    console.log(matchingId)
    return (<h1>{matchingId.name}</h1>
    )
}
export const AboutPlanets = () => {
    const { store, actions } = useContext(Context)
    const params = useParams()

    const matchingId = store.planets.find((planets) => planets.uid == params.id)
    return (<h1>{matchingId.name}</h1>
    )
}
