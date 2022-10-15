import React, {useState, useEffect } from "react";
import axios from "axios";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Search from "./components/Search";
import Articles from "./components/Articles";
import "./scss/App.scss";

const App = () => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [category, setCategory] = useState("");


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
    } else url = `https://api.nytimes.com/svc/search/v2/articlesearch.json?fq=section_name:${category}q=${term}&sort=newest&api-key=6iBICR8GSq0N3mNGtSD3GLIATG0gzYZ9`;

    const res = await axios.get(url);
    setArticles(res.data.response.docs);
    setLoading(false);
  }

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
        <Link to="/" onClick={() => setCategory("")}>Home</Link>
        <Link to="/world" onClick={() => setCategory("World")}>World</Link>
        <Link to="/business" onClick={() => setCategory("Travel")}>Travel</Link>
        <Link to="/health" onClick={() => setCategory("Health")}>Health</Link>
        <Link to="/science" onClick={() => setCategory("Science")}>Science</Link>
        <Link to="/sports" onClick={() => setCategory("Sports")}>Sports</Link>
        <Link to="/technology" onClick={() => setCategory("Technology")}>Technology</Link>
        <Link to="/favorites">Favorites</Link>
      </div>
      <Routes>
        <Route path="/" element={<Articles loading={loading} articles={articles} />} />
        <Route path="/world" element={<Articles loading={loading} articles={articles} />} />
        <Route path="/business" element={<Articles loading={loading} articles={articles} />} />
        <Route path="/health" element={<Articles loading={loading} articles={articles} />} />
        <Route path="/science" element={<Articles loading={loading} articles={articles} />} />
        <Route path="/sports" element={<Articles loading={loading} articles={articles} />} />
        <Route path="/technology" element={<Articles loading={loading} articles={articles} />} />
        <Route path="/favorites" element={<Articles loading={loading} articles={articles} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
