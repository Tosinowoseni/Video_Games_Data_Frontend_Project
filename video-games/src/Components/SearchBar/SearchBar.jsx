import React from 'react';

const SearchBar = ({ searchInput, input }) => {
    return (
        <div>
            <form>
                <input type='text' value={input} onSubmit={(event) => searchInput(event)} />
                <button type='submit'>Search</button>
            </form>
        </div>
    );
}

export default SearchBar;