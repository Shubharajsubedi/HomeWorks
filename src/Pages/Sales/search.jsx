
import { useState } from "react";
import { useSearchParams } from "react-router-dom";

const Search = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    // Get existing value from URL
    const query = searchParams.get("name") || "";

    const [searchTerm, setSearchTerm] = useState(query);

    const handleSearch = (e) => {
        e.preventDefault();

        // Put search value into URL
        setSearchParams({
            name: searchTerm
        });
    };

    return (
        <>
            <h2>Search Customer</h2>

            <form onSubmit={handleSearch}>
                <label htmlFor="search">Customer Name: </label>

                <input
                    id="search"
                    type="text"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Enter customer name"
                />

                <button type="submit">
                    Search
                </button>
            </form>

            <hr />

            <p>
                Search query: <strong>{query}</strong>
            </p>
        </>
    );
};

export default Search;

