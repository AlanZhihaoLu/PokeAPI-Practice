import React from 'react';

const SearchBox = ({ detectChange }) => {
    return (
        <div>
            <input type="search" placeholder="Enter keywords" onChange={detectChange}/>
        </div>
    );
}

export default SearchBox;