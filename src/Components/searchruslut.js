import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Text } from '../Components/multi-lang/Language';


const SelectedLang = localStorage.getItem('selectedLang');


const SearchRusults = () => {
	const [searchQ, setSearchQ] = React.useState("");
	const [response, setResponse] = React.useState(null);
	const [error, setError] = React.useState(null);
	const [voice, setVoice] = React.useState("");
	const [animation, setAnimation] = React.useState(false);

	console.log("voise ==", voice);

	function handleSpeak() {
		let SpeechRecognition =
			window.SpeechRecognition || window.webkitSpeechRecognition;

		let speechRecognition = new SpeechRecognition();

		if (SelectedLang === "en") {
			speechRecognition.lang = 'en-US' 
		}else{
			speechRecognition.lang = "ar"
		}

/*  	    speechRecognition.continuous = true;
*/		speechRecognition.start();
		speechRecognition.onstart = () => {
			setAnimation(true);
		};

		speechRecognition.onspeechend = () => {
			setAnimation(false);
		};
		speechRecognition.onresult = (e) => {
			let curent = e.resultIndex;
			let transccript = e.results[curent][0].transcript;
			console.log(transccript);
			setVoice(transccript);
			const fetchData = async () => {
				try {
					const res = await fetch(
						"https://www.googleapis.com/books/v1/volumes?q=" +
							transccript +
							""
					);
					const json = await res.json();
					console.log("response ===", json);
					setResponse(json.items);
				} catch (error) {
					setError(error);
				}
			}; 
			fetchData()
/*			const timer = setTimeout(() =>, 2000);
*/		};
	}

	function handleChange(e) {
		const searchQ = e.target.value;
		setSearchQ(searchQ);
	}

	function handleSubmit(e) {
		e.preventDefault();

		const fetchData = async () => {
			try {
				const res = await fetch(
					"https://www.googleapis.com/books/v1/volumes?q=" +
						searchQ +
						""
				);
				const json = await res.json();
				console.log("response ===", json);
				setResponse(json.items);
			} catch (error) {
				setError(error);
			}
		};
		fetchData();
	}

	let rusluts = response;


	console.log("rusluts ==== ", rusluts);
	return (
		<>
			<form className="search_rusult_form" onSubmit={handleSubmit}>
				<div className="search_rusult">
					<a>
						<p className="speak__button" onClick={handleSpeak}>
							<svg
								aria-hidden="true"
								focusable="false"
								data-prefix="fal"
								data-icon="microphone"
								role="img"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 320 512"
								class="svg-inline--fa fa-microphone fa-w-10 fa-lg"
							>
								<path
									fill="currentColor"
									d="M160 352c53.02 0 96-42.98 96-96V96c0-53.02-42.98-96-96-96S64 42.98 64 96v160c0 53.02 42.98 96 96 96zM96 96c0-35.29 28.71-64 64-64s64 28.71 64 64v160c0 35.29-28.71 64-64 64s-64-28.71-64-64V96zm216 96h-16c-4.42 0-8 3.58-8 8v56c0 73.46-62.2 132.68-136.73 127.71C83.3 379.18 32 319.61 32 251.49V200c0-4.42-3.58-8-8-8H8c-4.42 0-8 3.58-8 8v50.34c0 83.39 61.65 156.12 144 164.43V480H72c-4.42 0-8 3.58-8 8v16c0 4.42 3.58 8 8 8h176c4.42 0 8-3.58 8-8v-16c0-4.42-3.58-8-8-8h-72v-65.01C256.71 406.9 320 338.8 320 256v-56c0-4.42-3.58-8-8-8z"
									class=""
								></path>
							</svg>
						</p>
						<i  className="search__icon">
						<Link className="back__link" to="/">
							<svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="long-arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-right fa-w-14"><path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>
						</Link>
						</i>
						<input
						    dir={SelectedLang == "en" ? `${"ltr"}` : `${"rtl"}`} 
							onChange={handleChange}
							placeholder={SelectedLang == "en" ? "search book, author, or puplsher " :  'ابحث عن كتاب, مؤلف, او دار نشر' }
							type="txt"
						/>
					</a>
				</div>
			</form>
			{animation ? <div dir={SelectedLang == "en" ? `${"rtl"}` : `${"ltr"}`} className="loading-container no-content">
          <div className="loading">
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
            <div className="loading-bar"></div>
          </div>
          			<div className="lestning"><Text tid="speakNow"/> </div>

          </div>

		 : null}

			{rusluts ? (
				<div className="search__result">
					{rusluts.map((item) => (
						<div dir={SelectedLang == "en" ? `${"rtl"}` : `${"ltr"}`} key={item.id} className="card">
							<div className="details">
							<Link to={{ pathname:"/book", data:{ book: item.volumeInfo} }} >
								<img
									src={
										item.volumeInfo.imageLinks
											? item.volumeInfo.imageLinks
													.thumbnail
											: null
									}
									alt="avatar"
								/>
								</Link>
								<div className="book_details">
									<h4>
										{<b> <Text tid="title"/>  : </b>}
									    {item.volumeInfo.title}
									</h4>
									{item.volumeInfo.authors ? (
										<span>
											{<b> <Text tid="author" /> : </b>}{" "}
											{item.volumeInfo.authors}
										</span>
									) : null}

                                    {item.volumeInfo.publisher ? (
										<span>
											{<b><Text tid="publisher" /> : </b>}{" "}
											{item.volumeInfo.publisher}
										</span>
									) : null}

									{item.volumeInfo.publishedDate ? (
										<span>
											{<b> <Text tid="publishedDate" /> : </b>}{" "}
											{item.volumeInfo.publishedDate}
										</span>
									) : null}
									<a
										className="read__link"
										target="_blank"
										href={item.volumeInfo.previewLink}
									>
										{" "}
										<Text tid="read" />
										<svg
											focusable="false"
											xmlns="http://www.w3.org/2000/svg"
											viewBox="0 0 24 24"
										>
											<path d="M13 12h7v1.5h-7zm0-2.5h7V11h-7zm0 5h7V16h-7zM21 4H3c-1.1 0-2 .9-2 2v13c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 15h-9V6h9v13z"></path>
										</svg>
									</a>
								</div>
							</div>
							{item.searchInfo ? (
								<span
									dangerouslySetInnerHTML={{
										__html: item.searchInfo.textSnippet,
									}}
								/>
							) : null}

							<div></div>
						</div>
					))}
				</div>
			) : null}
		</>
	);
};

export default SearchRusults;
