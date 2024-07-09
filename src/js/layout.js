import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";
import { Home } from "./views/home";
import injectContext from "./store/appContext";
import { AboutPeople } from "./views/about"
import { AboutStarships } from "./views/about"
import { AboutPlanets } from "./views/about"
import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";

//create your first component
const Layout = () => {
	const basename = process.env.BASENAME || "";



	return (
		<div>
			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/details/people/:id" element={<AboutPeople />} />
						<Route path="/details/starships/:id" element={<AboutStarships />} />
						<Route path="/details/planets/:id" element={<AboutPlanets />} />
						<Route path="*" element={<h1>Not found!</h1>} />
					</Routes>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>
		</div>
	);
};

export default injectContext(Layout);
