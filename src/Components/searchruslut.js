import React,{ useEffect } from 'react';



const SearchRusults = () => {
	const [searchQ, setSearchQ] = React.useState('');
  const [response, setResponse] = React.useState(null);
  const [error, setError] = React.useState(null);




	function handleChange (e){
		const searchQ = e.target.value;
		setSearchQ(searchQ);
	}

  
     function handleSubmit(e) {
    e.preventDefault();

    const fetchData = async () => {
      try {
        const res = await fetch("https://www.googleapis.com/books/v1/volumes?q="+searchQ+"&key=AIzaSyDPEB6OF1CbUKLIsJqI-2deQJcBZJ1yuDE");
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
    return (
        <>
        <form className="search_rusult_form" onSubmit={handleSubmit}>
        <div className="search_rusult">
          <a >
          <i className="search__icon">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 20"><path fill-rule="evenodd" stroke-width=".2" d="M13.788 13.551a7.376 7.376 0 002.053-5.126 7.376 7.376 0 00-2.174-5.25A7.373 7.373 0 008.421 1a7.367 7.367 0 00-5.247 2.175A7.382 7.382 0 001 8.425c0 1.983.772 3.848 2.174 5.25A7.373 7.373 0 008.42 15.85a7.36 7.36 0 004.638-1.629l2.94 3.21c.98 1.07 1.141 1.409 1.141 1.409a.492.492 0 00.7.03.495.495 0 00.03-.699l-4.082-4.62zm-11.8-5.126c0-3.548 2.886-6.435 6.432-6.435 3.546 0 6.43 2.887 6.43 6.435 0 3.548-2.884 6.435-6.43 6.435s-6.432-2.887-6.432-6.435z"></path></svg>
          </i>
          <input 
          onChange={handleChange} 
          placeholder='ابحث عن كتاب, مؤلف او دار نشر'
          type='txt'/>
          </a>
          
        </div>
        </form>
        { rusluts ?
        <div  className='search__result'>
        {
          rusluts.map(item => (
            <div key={item.id} className="card">
              <div className="details">
               <img src={item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : null } alt="avatar" />
              <div className="book_details">
             <h4>{item.volumeInfo.title}</h4>
             <p>{item.volumeInfo.authors}</p>
             <span>{item.volumeInfo.publishedDate}</span>
             </div>
              </div>
              { item.searchInfo ? <span dangerouslySetInnerHTML={{__html: item.searchInfo.textSnippet}} /> : null}
           
          
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





export default SearchRusults;
