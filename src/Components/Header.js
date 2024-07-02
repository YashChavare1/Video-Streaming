import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import menu from '../Assests/MenuIcon.svg';
import search from '../Assests/SearchIcon.svg';
import searchSmall from '../Assests/SearchIconSmall.svg';
import youtubeLogo from '../Assests/YoutubeLogo.png';
import userIcon from '../Assests/user.png';
import { toggleMenu } from '../utils/appSlice';
import { cacheResults } from '../utils/searchSlice';
import { storeVideos } from '../utils/VideoSlice';
import { YOUTUBE_CONTENT_SPECIFIED, YOUTUBE_SEARCH_API } from '../utils/constants';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const searchCache = useSelector((store) => store.search);
  const dispatch = useDispatch();

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      if (searchCache[searchQuery]) {
        setSuggestions(searchCache[searchQuery]);
      } else {
        getSearchSuggestions();
      }
    }, 200);

    return () => {
      clearTimeout(debounceTimer);
    };
  }, [searchQuery]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };

  const getSearchSuggestions = async () => {
    try {
      const data = await fetch(YOUTUBE_SEARCH_API + searchQuery);
      const json = await data.json();
      setSuggestions(json[1]);
      dispatch(
        cacheResults({
          [searchQuery]: json[1],
        })
      );
    } catch (error) {
      console.error('Error fetching search suggestions:', error);
    }
  };

  const handleSearchQuery = async () => {
    const data = await fetch(YOUTUBE_CONTENT_SPECIFIED + searchQuery);
    const json = await data.json();
    console.log(json);
    dispatch(storeVideos(json.items));
  };

  const handleSuggestionSelection = (value) => {
    setSearchQuery(value);
    setShowSuggestions(false);
  };

  const handleBlur = () => {
    setTimeout(() => {
      setShowSuggestions(false);
    }, 100);
  };

  return (
    <div className="grid grid-cols-12 p-5 shadow-md fixed top-0 left-0 right-0 bg-white z-20 h-[11vmin]">
      {/* Menu | YT-Icon */}
      <div className="col-span-2 flex items-center">
        <img
          className="h-10 w-10 cursor-pointer"
          src={menu}
          alt="menu Icon"
          onClick={toggleMenuHandler}
        />
        <img className="h-[4vmin] w-[10vmin] mx-2" src={youtubeLogo} alt="Youtube Logo" />
      </div>

      {/* Search Bar */}
      <div className="col-span-8 flex justify-center">
        <div className="w-1/2 flex flex-col relative">
          <div className="flex w-full">
            <input
              className="w-full pl-3 py-2 border border-gray-500 rounded-s-full outline-none"
              type="text"
              placeholder="Search"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
              onFocus={() => setShowSuggestions(true)}
              onBlur={handleBlur}
            />
            <button
              className="border border-gray-500 px-3 py-2 w-16 rounded-e-full items-center"
              onClick={handleSearchQuery}
            >
              <img className="h-6 w-7" src={search} alt="search icon" />
            </button>
          </div>

          {/* Suggestions */}
          {suggestions.length > 0 && showSuggestions && (
            <div className="absolute top-full bg-white py-2 border border-gray-300 font-medium w-full shadow-2xl rounded-lg mt-1">
              <div className="pt-2 px-5">
                {suggestions.map((suggestion) => (
                  <div
                    className="pb-2 flex gap-3 items-center cursor-pointer"
                    key={suggestion}
                    onMouseDown={() => handleSuggestionSelection(suggestion)}
                  >
                    <img src={searchSmall} alt="Search Icon" />
                    {suggestion}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Profile Icon */}
      <div className="col-span-2 flex justify-end items-center">
        <img className="h-[5vmin] w-[5vmin]" src={userIcon} alt="user icon" />
      </div>
    </div>
  );
};

export default Header;
