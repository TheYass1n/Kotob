import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useFetch } from "./Components/http/http";
import Home from "./Components/home";
import SreachRusult from "./Components/searchruslut";
import { LanguageProvider } from "./Components/multi-lang/Language";

import LanguageSelector from "./Components/multi-lang/LanguageSelector";
import Modal from "./Components/modal";


function App() {
	const [show, setShow] = useState(false);

	const handleShow = () =>{
		setShow(true)
		}

const handleClose = () =>{
		setShow(false)
		}
	useEffect(() => {
		const timer = setTimeout(() => handleShow(), 10000);
	}, []);

	const SelectedLang = localStorage.getItem('selectedLang');
	return (
		<LanguageProvider>

			<div className="App">

			{ show && !SelectedLang ?
			<Modal hide={handleClose}>
			<LanguageSelector />
			</Modal>
			: null
		    }

				<Switch>
					<Route exact path="/" component={Home}></Route>
					<Route
						exact
						path="/search"
						component={SreachRusult}
					>
					</Route>
				</Switch>
			</div>
		</LanguageProvider>
	);
}

export default App;
