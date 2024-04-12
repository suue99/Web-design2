import React, { useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';

function Results() {
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get('q');

    useEffect(() => {
        // Fetch data based on searchQuery if needed
    }, [searchQuery]);

    return (
        <div>
            <h1>Search Results for: {searchQuery}</h1>
            {/* Display your search results here */}
        </div>
    );
}

export default Results;
