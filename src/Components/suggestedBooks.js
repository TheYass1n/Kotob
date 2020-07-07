import React,{ useEffect } from 'react';
import { useFetch } from "../Components/http/http";
import { Link } from 'react-router-dom';


const SuggestedBooks = (props) => {


const [response, setResponse] = React.useState([]);
const [error, setError] = React.useState(null);
let { books } = props;
const SelectedLang = localStorage.getItem('selectedLang');


const title = books.title;

const fetchData = async () => {
				try {
					const res = await fetch(
						"https://www.googleapis.com/books/v1/volumes?q=" +
							title + ""
							
					);
					const json = await res.json();
					console.log("response ===", json);
					setResponse(json.items);
				} catch (error) {
					setError(error);
				}
			}; 
 useEffect(() => {
 	const timer = setTimeout(() => {
 	fetchData()
  }, 1000);
  return () => clearTimeout(timer);
 }, []);

 
  let SuggestedBooks = response;

  console.log("rusluts ==== ", SuggestedBooks);

    return (
        <>
        { !response ? <div>loading </div> :
        	<div>
        	<p className="suggested__books__title">كتب مقترحة</p>
        <div className="suggested__books">
        { SuggestedBooks.map((book) =>(
        	<div className="book_rof">
        	    <Link to={{ pathname:"/book", data:{ book: book.volumeInfo} }} >
        	<img src={book.volumeInfo.imageLinks ? book.volumeInfo.imageLinks.smallThumbnail : null} alt=""/>
        	    </Link>
        	<div className="suggested__books__details">
        	<p>{book.volumeInfo.title.length > 10
                        ? book.volumeInfo.title.substring(0, 10) + "..."
                        : book.volumeInfo.title}</p>

        	<span>{book.volumeInfo.authors} </span>
        	</div>
        	</div>
        ))}
        	
        </div>
        </div>
        }
        </>
    );
};



export default SuggestedBooks;
