import React,{ useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Info from '../Components/openInfo';

import { Text } from '../Components/multi-lang/Language';







const SearchBox = (props) => {
	const [searchQ, setSearchQ] = React.useState('');
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);
 
   const { onInfoClose, onInfoClick } = props;

  



	function handleChange (e){
		const searchQ = e.target.value;
		setSearchQ(searchQ);
	}

  
     function handleSubmit(e) {
    e.preventDefault();


    const fetchData = async () => {
      try {
        const res = await fetch("https://www.googleapis.com/books/v1/volumes?q=isbn:"+searchQ+"&key=AIzaSyDPEB6OF1CbUKLIsJqI-2deQJcBZJ1yuDE");
        const json = await res.json();
        console.log('response ===', json)
        setResponse(json.items);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();

      
  }
   
   

	let rusluts = response
  console.log("rusluts ==== ", rusluts)
  // get user selected lang from localstorage
  const SelectedLang = localStorage.getItem('selectedLang');
    return (
        <>
        <form onSubmit={handleSubmit}>
        <div className="search_box">         

          <h3>       <Text tid="logo" />
          <Info onInfoClick={props.onInfoClick} onInfoClose={props.onInfoClose} />
      

</h3>
          <Link to="/search">
          <i className="search__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20"><path fill-rule="evenodd" stroke-width=".2" d="M13.788 13.551a7.376 7.376 0 002.053-5.126 7.376 7.376 0 00-2.174-5.25A7.373 7.373 0 008.421 1a7.367 7.367 0 00-5.247 2.175A7.382 7.382 0 001 8.425c0 1.983.772 3.848 2.174 5.25A7.373 7.373 0 008.42 15.85a7.36 7.36 0 004.638-1.629l2.94 3.21c.98 1.07 1.141 1.409 1.141 1.409a.492.492 0 00.7.03.495.495 0 00.03-.699l-4.082-4.62zm-11.8-5.126c0-3.548 2.886-6.435 6.432-6.435 3.546 0 6.43 2.887 6.43 6.435 0 3.548-2.884 6.435-6.43 6.435s-6.432-2.887-6.432-6.435z"></path></svg>
          </i>


          <p className="speak__button">
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
          <input 
          dir={SelectedLang == "en" ? `${"ltr"}` : `${"rtl"}`} 
          onChange={handleChange} 
          placeholder= {SelectedLang == "en" ? "search book, author, or puplsher " :  'ابحث عن كتاب, مؤلف, او دار نشر' }
          type='txt'/>
          </Link>
          
        </div>
        </form>
        { rusluts ?
        <div  className='searc__result'>
        {
          rusluts.map(item => (
            <div key={item.id} className="card">
            <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null } alt="avatar" />
           <span>{item.searchInfo ? item.searchInfo.textSnippet : null}</span>
           <h4>{item.volumeInfo.title}</h4>
           <p>{item.volumeInfo.authors}</p>

        <div>
        </div>
      </div>
            ))
        }
        </div>: null
      }


      
 

        </>
    );
};


export default SearchBox;
