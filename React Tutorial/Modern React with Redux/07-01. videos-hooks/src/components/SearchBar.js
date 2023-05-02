import React, { useState } from 'react';
import './VideoItem.css';

const SearchBar = ({ onFormSubmit }) => {
  const [term, setTerm] = useState('');

  const onInputChange = (event) => {
    setTerm(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    onFormSubmit(term);
  };

  return (
    <div className="search-bar ui raised segment center aligned inverted">
      <form onSubmit={onSubmit} className="ui form">
        <div className="field ui large icon input eight wide">
          <input
            type="text"
            placeholder="Search"
            value={term}
            onChange={(event) => setTerm(event.target.value)}
          />
          <i className="search icon"></i>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
