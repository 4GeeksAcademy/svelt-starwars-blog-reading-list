const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: [],
		},
		actions: {
			
			get_people: () => {
				fetch("https://www.swapi.tech/api/people")
					.then((response) => response.json())
					.then((result) => setStore({ people: result.results }))
					.catch((e) => console.log(error));
			},
			get_planets: () => {
				fetch("https://www.swapi.tech/api/planets")
					.then((response) => response.json())
					.then((result) => setStore({ planets: result.results }))
					.catch((e) => console.log(error));
			},
			get_vehicles: () => {
				fetch("https://www.swapi.tech/api/vehicles")
					.then((response) => response.json())
					.then((result) => {console.log(result.results)
						setStore({ starships: result.results })})
					.catch((e) => console.log(error));
			},
			addFavorite: (name) => {
				setStore({ favorites: [...new Set([...getStore().favorites, name])] });
			},
			removeFavorite: (name) => {
				const newFavorites = getStore().favorites.filter((currentName) => currentName != name)
				setStore({ favorites: newFavorites })
			},
			loadSomeData: () => {

				getActions().get_people()
				getActions().get_planets()
				getActions().get_vehicles()
			},
			
		}
	};
};
export default getState;


























