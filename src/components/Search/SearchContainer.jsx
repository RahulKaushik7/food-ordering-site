import React from 'react';
import './SearchContainer.css';
import { useNavigate} from 'react-router-dom';

const SearchContainer = () => {
  const navigate = useNavigate()
  const handlebackButton = ()=>{
    navigate('/')
  }
  return (
    <div className="search-wrapper">
      <button className="back-button" onClick={handlebackButton}>← Back</button>
      <div className="search-box">
        <input
          type="text"
          placeholder="Search food item..."
          className="search-input"
        />
        <button className="search-button">
          🔍 Search
        </button>
      </div>
    </div>
  );
};

export default SearchContainer;
