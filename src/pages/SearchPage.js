import React from 'react';
// import {useState} from 'react';

function Searchbar() {
    // const[searchTerm,setSearchTerm]=useState(" ");
    // const onSearchHandler =(e) =>{
    //     e.preventDefault();

    //     console.log("Searching for Term")
    // }
  return (
    <div className='container'>
    <form className='searchBar'> 
      <input className="search mx-2" type="text" name="text"  placeholder="Search for Pokemon"/>
      <input type="submit" name="submit" className="submit" value="Search"/>
    </form>
    </div>
  )
}

export default Searchbar

