import React, { PropTypes } from 'react';
import { Text } from '../Components/multi-lang/Language';


const Book = (props) => {
	console.log('data == ', props.location.data)
	const {book} = props.location.data;
	console.log('boook ', book)
    return (
        <>
       <div className="book">
       <div className="boook__details">
       <img
		   src={
				book.imageLinks
				? book.imageLinks.thumbnail
				: null
				}
				alt="avatar"
		/>

		<div className="details">
		<h4>
										{<b> <Text tid="title"/>  : </b>}
									    {book.title}
									</h4>
									{book.authors ? (
										<span>
											{<b> <Text tid="author" /> : </b>}{" "}
											{book.authors}
										</span>
									) : null}

                                    {book.publisher ? (
										<span>
											{<b><Text tid="publisher" /> : </b>}{" "}
											{book.publisher}
										</span>
									) : null}

									{book.publishedDate ? (
										<span>
											{<b> <Text tid="publishedDate" /> : </b>}{" "}
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
       </div>
       </>
    );
};



export default Book;
