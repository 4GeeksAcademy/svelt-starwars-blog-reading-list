import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { Context } from "../store/appContext";
export const PlanetCard = (props) => {
  const { store, actions } = useContext(Context);
  const [properties, setProperties] = useState();
  useEffect(() => {
    // by Default method: 'GET'
    fetch(props.url)
      .then((response) => {
        if (response.status != 200) {
        console.log (
            "Oooops! Something went wrong, young Padawan. Please try again" , response.status
          );
        }
        return response.json();
      })
      .then((data) => {
        setProperties(data.result.properties);
      })
      .catch((error) => console.log(error));
  }, []);
  return (
    properties && (<div class="card col-3">
        <img src="https://dummyimage.com/400x200/adadad/ffffff.jpg" class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{properties.name}</h5>
          <ul class="card-text">
		    <li>Diameter : {properties.diameter}</li>
            <li>Population: {properties.population}</li>
            <li>Terrain: {properties.terrain}</li>
          </ul>
          <div className="d-flex justify-content-between">
            <Link to={`/details/planets/${props.id}`} class="btn btn-primary">
              Learn More!
            </Link>
            <button
              type="button"
              onClick={() => actions.addFavorite(properties.name)}
              class="btn btn-outline-warning"
            >
              <FontAwesomeIcon icon={faHeart} />
            </button>
          </div>
        </div>
      </div>
    )
  );
};
