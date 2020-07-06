import React, { PropTypes } from "react";
import  SuggestedBooks  from '../Components/suggestedBooks';
import { Text } from "../Components/multi-lang/Language";
import { Link } from 'react-router-dom';

const Book = (props) => {
	console.log("data == ", props.location.data);
	const { book } = props.location.data;
	console.log("boook ", book);

	const SelectedLang = localStorage.getItem('selectedLang');

	return (
		<>
			<div  dir={SelectedLang == "en" ? `${"ltr"}` : `${"rtl"}`} className="book">
			<div className="navs">
			<Link to="/">
			     <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="long-arrow-right" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" class="svg-inline--fa fa-long-arrow-right fa-w-14"><path fill="currentColor" d="M311.03 131.515l-7.071 7.07c-4.686 4.686-4.686 12.284 0 16.971L387.887 239H12c-6.627 0-12 5.373-12 12v10c0 6.627 5.373 12 12 12h375.887l-83.928 83.444c-4.686 4.686-4.686 12.284 0 16.971l7.071 7.07c4.686 4.686 12.284 4.686 16.97 0l116.485-116c4.686-4.686 4.686-12.284 0-16.971L328 131.515c-4.686-4.687-12.284-4.687-16.97 0z" class=""></path></svg>
			</Link>
			<Link to="/search">
			        <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" class="svg-inline--fa fa-search fa-w-16"><path fill="currentColor" d="M508.5 481.6l-129-129c-2.3-2.3-5.3-3.5-8.5-3.5h-10.3C395 312 416 262.5 416 208 416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c54.5 0 104-21 141.1-55.2V371c0 3.2 1.3 6.2 3.5 8.5l129 129c4.7 4.7 12.3 4.7 17 0l9.9-9.9c4.7-4.7 4.7-12.3 0-17zM208 384c-97.3 0-176-78.7-176-176S110.7 32 208 32s176 78.7 176 176-78.7 176-176 176z" class=""></path></svg>

			</Link>
			</div>
				<div className="boook__details">
					<img
						src={book.imageLinks ? book.imageLinks.thumbnail : null}
						alt="avatar"
					/>

					<div className="details">
						<h4>
							{
								<b>
									{" "}
									<Text tid="title" /> :{" "}
								</b>
							}
							{book.title}
						</h4>
						{book.authors ? (
							<span>
								{
									<b>
										{" "}
										<Text tid="author" /> :{" "}
									</b>
								}{" "}
								{book.authors}
							</span>
						) : null}

						{book.publisher ? (
							<span>
								{
									<b>
										<Text tid="publisher" /> :{" "}
									</b>
								}{" "}
								{book.publisher}
							</span>
						) : null}

						{book.publishedDate ? (
							<span>
								{
									<b>
										{" "}
										<Text tid="publishedDate" /> :{" "}
									</b>
								}{" "}
								{book.publishedDate}
							</span>
						) : null}
						<a
							className="read__link"
							target="_blank"
							href={book.previewLink}
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
				<p className="description">{book.description}</p>

				<div className="Suggested_Books_contener">
				<SuggestedBooks books={book}/>
				</div>
			</div>
		</>
	);
};

export default Book;
