// Google Books rejects keyless requests once the shared anonymous quota runs out (HTTP 429),
// so every call goes through here and carries the API key from the build environment.
const API_KEY = process.env.REACT_APP_GOOGLE_BOOKS_KEY;

export const booksUrl = (query, params = "") =>
  "https://www.googleapis.com/books/v1/volumes?q=" +
  encodeURIComponent(query) +
  params +
  (API_KEY ? "&key=" + API_KEY : "");
