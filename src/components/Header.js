import React, { useEffect, useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice";
import { useDispatch, useSelector } from "react-redux";
import { toggleMenu, toggleUserMenu, toggleVoicebtn } from "../utils/appSlice";
import { YOUTUBE_SEARCH_SUGG } from "../utils/constant";
import { cacheResult } from "../utils/searchSlice";
import { Link } from "react-router-dom";

const Header = () => {
  const dispatch = useDispatch();
  const [searchText, setSearchText] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);
  const searchCache = useSelector((store) => store.search);

  const toggelMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const toggleUserMenuHandler = () => {
    dispatch(toggleUserMenu());
  };

  const handleVoicebtn = () => {
    dispatch(toggleVoicebtn());
  };

  const getSearchQuery = async () => {
    const data = await fetch(YOUTUBE_SEARCH_SUGG + searchText);
    const json = await data.json();
    setSuggestions(json[1]);
    dispatch(
      cacheResult({
        [searchText]: [json[1]],
      })
    );
  };

  useEffect(() => {
    if (searchCache[searchText]) {
      setShowSuggestion(searchCache[searchText]);
    } else {
      const timer = setTimeout(() => getSearchQuery(), 200);
      return () => {
        clearTimeout(timer);
      };
    }
  }, [searchText]);

  return (
    <div className="flex items-center justify-between p-1  shadow-md">
      <div className="flex items-center gap-4">
        <img
          onClick={() => toggelMenuHandler()}
          className="h-8 w-8 m-8 cursor-pointer"
          alt="menu-icon"
          src="https://icons.veryicon.com/png/o/miscellaneous/linear-icon-45/hamburger-menu-4.png"
        />
        <img
          className="h-14 w-28 cursor-pointer object-contain"
          alt="youtube-icon"
          src="https://t4.ftcdn.net/jpg/07/32/01/31/360_F_732013128_4w36WRSEpuF1oT9nK0Bd31GT353WqFYi.jpg"
        />
      </div>

      <div className="relative w-[37rem] mx-auto mt-5">
        <div className="flex">
          <input
            type="text"
            placeholder="Search"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
              setShowSuggestion(true);
            }}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setShowSuggestion(false)}
            className="flex-1 h-10 border border-gray-300 rounded-l-full px-4 text-sm focus:outline-none focus:border-blue-500"
          />
          <Link to={"/search?v=" + searchText}>
            <button className="h-10 w-12 border border-gray-300 bg-gray-100 rounded-r-full hover:bg-gray-200 flex items-center justify-center">
              <SearchIcon className="text-gray-600" fontSize="small" />
            </button>
          </Link>
          <div className="flex flex-col items-center gap-4">
            <div
              className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 cursor-pointer transform transition-transform duration-200 hover:scale-110 ml-2"
              onClick={() => handleVoicebtn()}
            >
              <KeyboardVoiceIcon />
            </div>
          </div>
        </div>

        {searchText && showSuggestion && (
          <ul className="absolute top-full left-0 w-full bg-white border border-gray-200 rounded-md shadow-md mt-1 z-50">
            {suggestions.map((suggestion, index) => (
              <li
                key={index}
                className="flex items-center px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onMouseDown={() => {
                  setSearchText(suggestion);
                  setTimeout(() => setShowSuggestion(false), 100);
                }}
              >
                <SearchIcon className="text-gray-600 mr-2" fontSize="small" />
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div>
        <img
          onClick={() => toggleUserMenuHandler()}
          className="h-8 w-8 rounded-full cursor-pointer"
          alt="user-icon"
          src="https://marketplace.canva.com/Dz63E/MAF4KJDz63E/1/tl/canva-user-icon-MAF4KJDz63E.png"
        />
      </div>
    </div>
  );
};

export default Header;
