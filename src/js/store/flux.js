const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			people: [],
			planets: [],
			starships: [],
			favorites: [],
		},
		actions: {
			// Use getActions to call a function within a fuction
			get_people: (nextUrl) => {
				fetch(nextUrl)
				.then((response) => {
				  if (response.status >= 400) {
					throw new Error(
					  "Oooops! Something went wrong, young Padawan. Please try again"
					);
				  }
		 
				  return response.json();
				})
				.then((result) => {
                  if (result.next != null){
					getActions().get_people(result.next)
				  }
				  setStore({ people: [...getStore().people,  ...result.results] });
				})
				.catch((e) => console.log(error));
			},
			get_planets: (nextUrl) => {
				fetch(nextUrl)
				.then((response) => {
				  if (response.status >= 400) {
					throw new Error(
					  "Oooops! Something went wrong, young Padawan. Please try again"
					);
				  }
		 
				  return response.json();
				})
				.then((result) => {
					if (result.next != null){
						getActions().get_planets(result.next)
					}
				  setStore({ planets: [...getStore().planets,  ...result.results] });
				})
				.catch((e) => console.log(error));
			},
			get_vehicles: (nextUrl) => {
				fetch(nextUrl)
				.then((response) => {
				  if (response.status >= 400) {
					throw new Error(
					  "Oooops! Something went wrong, young Padawan. Please try again"
					);
				  }
		 
				  return response.json();
				})
				.then((result) => {
					if (result.next != null){
						getActions().get_vehicles(result.next)
					}
				  setStore({ starships: [...getStore().starships,  ...result.results] });
				})
				.catch((e) => console.log(error));
			},
            addFavorite: (name) => {
				setStore({ favorites: [...new Set([...getStore().favorites, name])] });
			},
			removeFavorite: (name) => {
               const newFavorites = getStore() .favorites.filter((currentName) => currentName != name )
			   setStore({ favorites: newFavorites})
			},
			loadSomeData: () => {
			
			getActions().get_people("https://www.swapi.tech/api/people")
			getActions().get_planets("https://www.swapi.tech/api/planets")
			getActions().get_vehicles("https://www.swapi.tech/api/starships")
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();
				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});
				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};
export default getState;