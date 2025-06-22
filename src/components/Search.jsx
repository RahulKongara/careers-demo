import { useState } from "react";

const Search = ({ jobs, onResults }) => {
    const [query, setQuery] = useState("");
    const [location, setLocation] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();
        const filtered = jobs.filter(job => {
            const matchesTitle = job.title.toLowerCase().includes(query.toLowerCase()) || job.job_category.toLowerCase().includes(query.toLowerCase());
            const matchesLocation = job.location.toLowerCase().includes(location.toLowerCase());
            return matchesTitle && matchesLocation;
        });
        onResults(filtered);
    };

    return (
        <form className="flex flex-col justify-center md:flex-row gap-4 mb-10" onSubmit={handleSearch}>
            <input
                type="text"
                className="p-2 border-1 border-[red] rounded outline-0"
                placeholder="Search job title..."
                value={query}
                onChange={e => setQuery(e.target.value)}
            />
            <input
                type="text"
                className="p-2 border-1 border-[red] rounded outline-0"
                placeholder="Search location..."
                value={location}
                onChange={e => setLocation(e.target.value)}
            />
            <button
                type="submit"
                className="p-2 px-4 rounded custom-gradient-btn text-black font-semibold"
            >
                Search
            </button>
        </form>
    );
};

export default Search;