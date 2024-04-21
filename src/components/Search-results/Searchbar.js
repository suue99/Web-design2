import {FaSearch} from "react-icons/fa";
import React, {useState, useEffect} from "react";

import "../Search-results/results.css"

function Searchbar () {
        const [input,setInput] = useState ("")
        const [searchResults, setSearchResults] = useState([]); 

        const fetchData = async () => {
            try {
              const response = await fetch('https://jsonplaceholder.typicode.com/users');
              const json = await response.json();
              setSearchResults(json);
            } catch (error) {
              console.error('Error fetching data:', error);
            }
          };
        

            useEffect(() => {
            fetchData(); // Fetch data on component mount
        }, []);

    
        const handleChange = (value) => {
            setInput(value);
            if (value) { 
              const filteredResults = searchResults.filter(user => 
                user.name.toLowerCase().includes(value.toLowerCase()) 
              );
              setSearchResults(filteredResults);
            } else {
              fetchData(); 
            }
          };

    return (
        <div>
            <div className="searchbar-container">
                <div className="input-wrapper">
                    <FaSearch id="search-icon"/>
                    <input placeholder="Type to search..." value={input}
                     onChange={(e)=> handleChange (e.target.value)}/>
                </div>
                </div>
                <div className="results-container"> 
                {searchResults.map((user) => (
                    <div key={user.id} className="result-item">
                       <p> {user.name} </p>
                       <p> ({user.email})</p>
                       <p> {user.phone} </p>
                    </div>
                ))}
          
            </div>
        </div>
    )
}



export default Searchbar