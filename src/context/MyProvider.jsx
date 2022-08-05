import { useState, useEffect, useRef } from "react";
import MyContext from "./MyContext";

const MyProvider = ({ children }) => {
  const [data, setData] = useState({
    results: null,
    loading: true,
    error: null,
  });
  const [search, setSearch] = useState('');
  const [searchInput, setSearchInput] = useState("");
  const [page, setPage] = useState(1)
  const headerText = "Etukas World Pictures";
  const refData = {text: "Images from Unsplash.com", url: 'unsplash.com'}
  const refData2 = '(used purely for learning purposes)'
  const footerText = "@ EtukasCodes 2022";

  const inputRef = useRef()

  const API_KEY = process.env.REACT_APP_API_KEY;
  const URI = `https://api.unsplash.com/search/photos/?client_id=${API_KEY}&per_page=10&query=${search}&page=${page}`;

  const submitHandler = (e) => {
    e.preventDefault();
    setSearch(searchInput);
    setSearchInput("");

  };

  const nextPage = () => {
    setPage((prevPage) => prevPage + 1)
    inputRef.current.focus()
  }

  const previousPage = () => {
    setPage((prevPage) => prevPage - 1)
    inputRef.current.focus()
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(URI);
        const results = await response.json();
        setData({ results, loading: false, error: null });
      } catch (error) {
        setData({ results: null, loading: false, error });
      }
    };
    fetchData();
  }, [URI]);
  if (data.loading) return <p>Loading.......</p>;
  if (data.error) return <p>{data.error}</p>;

  const imageList = data.results.results.map((image) => (
    <div className="cards">
      <img className='picture' key={image.id} src={image.urls.thumb} alt={image.alt_description} style={{ width: "80%", objectFit: "cover" }} />
      <p className="description" >{image.alt_description} </p>
    </div>
  ));

  return (
    <MyContext.Provider

      value={{ data, setData, search, setSearch, searchInput, setSearchInput, page, setPage, headerText, footerText, imageList, submitHandler, previousPage, nextPage, inputRef, refData, refData2 }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;




