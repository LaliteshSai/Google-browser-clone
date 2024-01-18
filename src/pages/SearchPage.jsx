import React from "react";
import { Link } from "react-router-dom";
import Search from "./Search";
import SearchIcon from "@mui/icons-material/Search";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SlideshowRoundedIcon from "@mui/icons-material/SlideshowRounded";
import PhotoIcon from "@mui/icons-material/Photo";
import BookIcon from "@mui/icons-material/Book";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import "./SearchPage.css";
import { useStateValue } from "../stateProvider";
import useGoogleSearch from "../useGoogleSearch.jsx";
function SearchPage() {
  const [{ term }] = useStateValue();
  const { Data } = useGoogleSearch(term);
  console.log(Data);
  // console.log(term);

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <Link to="/">
          <img
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_dark_color_92x30dp.png"
            alt=""
          />
        </Link>

        <div className="searchpage__headerBody">
          <Search hidebuttons />
          <div className="searchpage__options">
            <div className="searchpage__optionsLeft">
              <div className="searchpage__option">
                <SearchIcon />
                <Link to="/all">All</Link>
              </div>
              <div className="searchpage__option">
                <NewspaperIcon />
                <Link to="/all">News</Link>
              </div>
              <div className="searchpage__option">
                <SlideshowRoundedIcon />
                <Link to="/all">Videos</Link>
              </div>
              <div className="searchpage__option">
                <PhotoIcon />
                <Link to="/all">Images</Link>
              </div>
              <div className="searchpage__option">
                <BookIcon />
                <Link to="/all">Books</Link>
              </div>
              <div className="searchpage__option">
                <MoreVertIcon />
                <Link to="/all">More</Link>
              </div>
            </div>
            <div className="searchpage__optionsRight">
              <div className="searchpage__option">
                <Link to="/settings">Settings</Link>
              </div>
              <div className="searchpage__option">
                <Link to="/tools">Tools</Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {term && Data && Data.searchInformation && (
        <div className="Searchpage__results">
          <p className="Searchpage__resultsCount">
            About {Data.searchInformation.formattedTotalResults} results (
            {Data.searchInformation.formattedSearchTime} seconds) for {term}
          </p>

          {Data.items.map((item) => (
            <div className="Searchpage__result" key={item.link}>
              <a href={item.link} className="Searchpage__resultLink">
                {item.pagemap?.cse_image?.length > 0 &&
                  item.pagemap?.cse_image[0]?.src && (
                    <img
                      className="Searchpage__resultImage"
                      src={item.pagemap?.cse_image[0]?.src}
                      alt=""
                    />
                  )}

                {item.displayLink}
              </a>
              <a href={item.link} className="Searchpage__resultTitle">
                <h2>{item.title}</h2>
              </a>
              <p className="Searchpage__resultDescription">{item.snippet}</p>
            </div>
          ))}
        </div>
      )}

      {/* <h1>SearchPage</h1> */}
    </div>
  );
}

export default SearchPage;
