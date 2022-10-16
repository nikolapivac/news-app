import React, {useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { faHouse, faEarthAmericas, faPlane, faNotesMedical, faFlask, faFutbol, faDesktop, faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Search from "./components/Search";
import Articles from "./components/Articles";
import "./scss/App.scss";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");
  const [index, setIndex] = useState(0);
  const [latest, setLatest] = useState([]);


  useEffect(() => {
    const fetchArticles = async () => {
      setLoading(true);
      let url;
      if (category === "") {
        url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`;
      } else url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:${category}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`

      const res = await axios.get(url);
      setArticles(res.data.response.docs);
      setLoading(false);
    }

    fetchArticles();
  }, [category])

  const searchArticles = async (term) => {
    setLoading(true);
    let url;
    if (category === "") {
      url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${term}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`;
    } else url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:${category}&q=${term}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`;

    const res = await axios.get(url);
    setArticles(res.data.response.docs);
    setLoading(false);
  }

  const handleIndexChange = (i) => {
    setIndex(i);
  }

  useEffect(() => {
    const fetchLatest = async () => {
      setLoading(true);
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&sortBy=publishedAt&apiKey=122611c3d4e148ce95d24653072873c1`);
      setLatest(res.data.articles);
      setLoading(false);
    };

    fetchLatest();
  }, [])


  return (
    <BrowserRouter>
      <div className="header">
        <div className="logo">
          <h1 className="logo_1">My</h1>
          <h1 className="logo_2">News</h1>
        </div>
        <Search searchArticles={searchArticles} />
      </div>

      <div className="menu">
        <Link to="/"  onClick={() => setCategory("")}>
          <div className={index===0 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(0)}>
            <FontAwesomeIcon icon={faHouse} className={index===0 ? "icon active" : "icon"} />
            <p className={index===0 ? "active" : null}>Home</p>
          </div>
        </Link>
        <Link to="/world" onClick={() => setCategory("World")}>
          <div className={index===1 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(1)}>
            <FontAwesomeIcon icon={faEarthAmericas} className={index===1 ? "icon active" : "icon"} />
            <p className={index===1 ? "active" : null}>World</p>
          </div>
        </Link>
        <Link to="/travel" onClick={() => setCategory("Travel")}>
          <div className={index===2 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(2)}>
            <FontAwesomeIcon icon={faPlane} className={index===2 ? "icon active" : "icon"} />
            <p className={index===2 ? "active" : null}>Travel</p>
          </div>
        </Link>
        <Link to="/health" onClick={() => setCategory("Health")}>
          <div className={index===3 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(3)}>
            <FontAwesomeIcon icon={faNotesMedical} className={index===3 ? "icon active" : "icon"} />
            <p className={index===3 ? "active" : null}>Health</p>
          </div>
        </Link>
        <Link to="/science" onClick={() => setCategory("Science")}>
          <div className={index===4 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(4)}>
            <FontAwesomeIcon icon={faFlask} className={index===4 ? "icon active" : "icon"} />
            <p className={index===4 ? "active" : null}>Science</p>
          </div>
        </Link>
        <Link to="/sports" onClick={() => setCategory("Sports")}>
          <div className={index===5 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(5)}>
            <FontAwesomeIcon icon={faFutbol} className={index===5 ? "icon active" : "icon"} />
            <p className={index===5 ? "active" : null}>Sports</p>
          </div>
        </Link>
        <Link to="/technology" onClick={() => setCategory("Technology")}>
          <div className={index===6 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(6)}>
            <FontAwesomeIcon icon={faDesktop} className={index===6 ? "icon active" : "icon"} />
            <p className={index===6 ? "active" : null}>Technology</p>
          </div>
        </Link>
        <Link to="/favorites">
          <div className={index===7 ? "menu_item active" : "menu_item"} onClick={() => handleIndexChange(7)}>
            <FontAwesomeIcon icon={faStar} className={index===7 ? "icon active" : "icon"} />
            <p className={index===7 ? "active" : null}>Favorites</p>
          </div>
        </Link>
      </div>

      <Routes>
        <Route path="/" element={<Articles loading={loading} articles={articles} title={"News"} latest={latest} />} />
        <Route path="/world" element={<Articles loading={loading} articles={articles} title={"World"} latest={latest} />} />
        <Route path="/travel" element={<Articles loading={loading} articles={articles} title={"Travel"} latest={latest} />} />
        <Route path="/health" element={<Articles loading={loading} articles={articles} title={"Health"} latest={latest} />} />
        <Route path="/science" element={<Articles loading={loading} articles={articles} title={"Science"} latest={latest} />} />
        <Route path="/sports" element={<Articles loading={loading} articles={articles} title={"Sports"} latest={latest} />} />
        <Route path="/technology" element={<Articles loading={loading} articles={articles} title={"Technology"} latest={latest} />} />
        <Route path="/favorites" element={<Articles loading={loading} articles={articles} title={"Favorites"} latest={latest} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
