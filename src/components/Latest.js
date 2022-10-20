import React, {useState, useEffect} from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRss } from "@fortawesome/free-solid-svg-icons";
import LatestArticle from "./LatestArticle";

const Latest = () => {
  const [latest, setLatest] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const fetchLatest = async () => {
      const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&pageSize=10&page=${currentPage}&sortBy=publishedAt&apiKey=122611c3d4e148ce95d24653072873c1`);
      setLatest(latest.concat(res.data.articles));
      setPageCount(calculateNumberOfPages(res.data.totalResults))
    };

    fetchLatest();
  }, [currentPage])

  const calculateNumberOfPages = (total) => {
    let number;
    if(total % 10 === 0){
        number = total/10;
    } else number = Math.floor(total/10 + 1);

    return number;
  }

  const handlePageChange = () => {
    if(currentPage === pageCount) {
      setHasMore(false);
    }
    setCurrentPage(currentPage + 1);
  }

    return (
        <div className="latest_widget">
          <div className="latest_head">
              <FontAwesomeIcon icon={faRss} className="licon"/>
              <div className="latest_title">Latest news</div>
          </div>
          <div className="scrollable">
            <InfiniteScroll
              dataLength={latest.length}
              next={handlePageChange}
              hasMore={hasMore}
              height={478}
            >
              <div className="latest">
                {latest.map((article) => (
                    <LatestArticle key={article.url} article={article} />
                ))}
              </div>
            </InfiniteScroll>
          </div>
        </div>
    )
}

export default Latest;