import React,{ useState } from "react";
import { useFetch } from "../Components/http/http";
import SearchBox from "../Components/searchbox";
import SreachRusult from "../Components/searchruslut";
import Info from "../Components/info/index.js";
import { Text } from '../Components/multi-lang/Language';
import LinearProgress from '@material/react-linear-progress';
import '@material/react-linear-progress/dist/linear-progress.css';
import NavBar from '../Components/navBar';
import { Link } from 'react-router-dom';




function HOME() {

  const [show, setShow] = useState(false);
  const [showInfo, setShowInfo] = useState(false)

  const openModal = () => setShow(true);
  const closeModal = () => setShow(false);

  const SelectedLang = localStorage.getItem('selectedLang');

  
  const res = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=subject:fiction&langRestrict=ar",
    {}
  );

  
  console.log("subject:fiction ==== ", res);
  if (!res.response) {
    return  <LinearProgress  buffer={0.9} indeterminate={true}  />;
  }

  //get the Languagen that user choose

  const dogName = res.response.items;
  console.log("dog", dogName);


  const onInfoClick =() =>{
    setShowInfo(true)
  }


  const onInfoClose = () => {
    setShowInfo(false)
  }

  return (
    <>

      <section  className="home__contener">
        <Info onInfoClose={onInfoClose} show={showInfo} />


        <aside>
          <h2>
            Bookular
          </h2>
        </aside>
        <section className="home__content">
          <div className="home">
            <SearchBox  onInfoClick={onInfoClick}/>

            <div dir={SelectedLang == "en" ? `${"ltr"}` : `${"rtl"}`} className="catogre">
            <div><Text tid="History" /></div>
            <div> <Text tid="philosophy" /></div>
            <div><Text tid="classicNovels" /></div>
            <div><Text tid="ReligiousBooks" /></div>
            <div><Text tid="Fiction" /></div>
            <div><Text tid="technology" /></div>
            <div> <Link to="/categories"><Text tid="more" /></Link></div>



            </div>
            <section dir={SelectedLang == "en" ? `${"rtl"}` : `${"ltr"}`} className="cards__contener">
              <h4 className="title">
              <Text tid="bestSeller" />
                <a className={SelectedLang == "en" ? ' more_link transform_icon' : 'more_link'} >
                  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-flip-horizontal fa-flip-vertical fa-5x"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
                </a>
              </h4>
              <div dir={SelectedLang == "en" ? `${"ltr"}` : `${"rtl"}`} className="cards">
                {dogName.map((book) => (
                  <div className="card">
                  <Link to={{ pathname:"/book", data:{ book: book.volumeInfo} }} >
                  <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="avatar"
                    />
                  </Link>
                    
                    <p>
                      {book.volumeInfo.title.length > 10
                        ? book.volumeInfo.title.substring(0, 10) + "..."
                        : book.volumeInfo.title}
                    </p>

                    <span>
                      {book.volumeInfo.authors.length > 10
                        ? book.volumeInfo.authors[0].substring(0, 10) + "..."
                        : book.volumeInfo.authors[0]}
                    </span>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>

            <section dir={SelectedLang == "en" ? `${"rtl"}` : `${"ltr"}`} className="cards__contener">
              <h4 className="title">
                    <Text tid="classicNovels" />
                <a className={SelectedLang == "en" ? ' more_link transform_icon' : 'more_link'}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-flip-horizontal fa-flip-vertical fa-5x"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
                </a>
              </h4>
              <div dir={SelectedLang == "en" ? `${"ltr"}` : `${"rtl"}`} className="cards">
                {dogName.map((book) => (
                  <div className="card">
                    <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="avatar"
                    />
                    <p>
                      {book.volumeInfo.title.length > 10
                        ? book.volumeInfo.title.substring(0, 10) + "..."
                        : book.volumeInfo.title}
                    </p>

                    <span>
                      {book.volumeInfo.authors.length > 10
                        ? book.volumeInfo.authors[0].substring(0, 10) + "..."
                        : book.volumeInfo.authors[0]}
                    </span>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>

            <section dir={SelectedLang == "en" ? `${"rtl"}` : `${"ltr"}`} className="cards__contener">
              <h4 className="title">
                   <Text tid="History" />
                <a className={SelectedLang == "en" ? ' more_link transform_icon' : 'more_link'}>
                  <svg aria-hidden="true" focusable="false" data-prefix="fal" data-icon="chevron-left" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 512" class="svg-inline--fa fa-chevron-left fa-w-8 fa-flip-horizontal fa-flip-vertical fa-5x"><path fill="currentColor" d="M238.475 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L50.053 256 245.546 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L10.454 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z" class=""></path></svg>
                </a>
              </h4>
              <div dir={SelectedLang == "en" ? `${"ltr"}` : `${"rtl"}`} className="cards">
                {dogName.map((book) => (
                  <div className="card">
                    <img
                      src={book.volumeInfo.imageLinks.smallThumbnail}
                      alt="avatar"
                    />
                    <p>
                      {book.volumeInfo.title.length > 10
                        ?  book.volumeInfo.title.substring(0, 10) + "..."
                        : book.volumeInfo.title}
                    </p>

                    <span>
                      {book.volumeInfo.authors.length > 10
                        ? book.volumeInfo.authors[0].substring(0, 10) + "..."
                        : book.volumeInfo.authors[0]}
                    </span>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </section>
      <NavBar/>
    </>
  );
}

export default HOME;
