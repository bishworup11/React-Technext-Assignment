// Navbar.js
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar({ onSearch }) { // Updated prop name
  const [searchText, setSearchText] = useState("");

  // Function to handle search input change
  const handleSearchInputChange = (event) => {
    setSearchText(event.target.value);
  };

  const handleClickNavber =  (event) => {
    event.preventDefault();
    setSearchText("");
    onSearch("");
  };

  // Function to handle form submit
  const handleFormSubmit = (event) => {
    event.preventDefault();
   
    onSearch(searchText);
    
  };

  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        
         
        <div className=" d-flex ">
        <Link className="navbar-brand" onClick={handleClickNavber} to="/">
          Navbar
        </Link>
        <Link className="navbar-brand" to="/about">
          About
        </Link>
       
        </div>
        <form className="d-flex" onSubmit={handleFormSubmit}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
            value={searchText}
            onChange={handleSearchInputChange}
          />
          <button className="btn btn-outline-success" type="submit">
            Search
          </button>
        </form>
          
        
      </div>
    </nav>
  );
}
