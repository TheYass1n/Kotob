import React from "react";

export const VoiceSearch = () => {
	const [voice, setVoice] = React.useState("");
	const [response, setResponse] = React.useState([]);
	const [error, setError] = React.useState("");
	console.log("voise ==", voice);
	function handleSpeak() {
		let SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		let speechRecognition = new SpeechRecognition();
		speechRecognition.start();
		speechRecognition.onresult = (e) => {
			let curent = e.resultIndex;
			let transccript = e.results[curent][0].transcript;
			console.log(transccript);
			setVoice(transccript);
			const fetchData = async () => {
			try {
				const res = await fetch(
					"https://www.googleapis.com/books/v1/volumes?q="+transccript+"&key=AIzaSyDPEB6OF1CbUKLIsJqI-2deQJcBZJ1yuDE"
				);
				const json = await res.json();
				console.log("response ===", json);
				setResponse(json.items);
			} catch (error) {
				setError(error);
			}
		};
		const timer = setTimeout(() => fetchData(), 3000);
		};
		
	}
	
};

