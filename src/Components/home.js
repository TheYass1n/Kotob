import React from "react";
import { useFetch } from "../Components/http/http";
import SearchBox from "../Components/searchbox";
import SreachRusult from "../Components/searchruslut";


function HOME() {
  const res = useFetch(
    "https://www.googleapis.com/books/v1/volumes?q=كافكا+علي+الشاطئ&download=epub&key=AIzaSyDPEB6OF1CbUKLIsJqI-2deQJcBZJ1yuDE",
    {}
  );
  console.log("rspon ==== ", res);
  if (!res.response) {
    return <div>Loading...</div>;
  }
  const dogName = res.response.items;
  console.log("dog", dogName);
  const imageUrl = res.response.message;

  return (
    <>
      <section className="home__contener">
        <aside>
          <h2>
            Book<span>Map</span>
            
          </h2>
        </aside>
        <section className="home__content">
          <div className="home">
            <SearchBox />
            <section className="cards__contener">
              <h4 className="title">
                الاكثر مبعيا{" "}
                <a className="more_link">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="arrow-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="svg-inline--fa fa-arrow-left fa-w-14 fa-fw fa-lg"
                  >
                    <path
                      fill="currentColor"
                      d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                      class=""
                    ></path>
                  </svg>
                </a>
              </h4>
              <div className="cards">
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
                        ? book.volumeInfo.authors.substring(0, 10) + "..."
                        : book.volumeInfo.authors}
                    </span>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="cards__contener">
              <h4 className="title">
                الاكثر مبعيا{" "}
                <a className="more_link">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="arrow-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="svg-inline--fa fa-arrow-left fa-w-14 fa-fw fa-lg"
                  >
                    <path
                      fill="currentColor"
                      d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                      class=""
                    ></path>
                  </svg>
                </a>
              </h4>
              <div className="cards">
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
                        ? book.volumeInfo.authors.substring(0, 10) + "..."
                        : book.volumeInfo.authors}
                    </span>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>

            <section className="cards__contener">
              <h4 className="title">
                الاكثر مبعيا{" "}
                <a className="more_link">
                  <svg
                    aria-hidden="true"
                    focusable="false"
                    data-prefix="fal"
                    data-icon="arrow-left"
                    role="img"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                    class="svg-inline--fa fa-arrow-left fa-w-14 fa-fw fa-lg"
                  >
                    <path
                      fill="currentColor"
                      d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"
                      class=""
                    ></path>
                  </svg>
                </a>
              </h4>
              <div className="cards">
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
                        ? book.volumeInfo.authors.substring(0, 10) + "..."
                        : book.volumeInfo.authors}
                    </span>

                    <div></div>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </section>
      </section>
    </>
  );
}

export default HOME;
