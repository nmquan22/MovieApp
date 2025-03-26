import { useState } from "react";
import PropTypes from "prop-types";

const Header = ({ onSearch }) =>{
    const [search, setSearch] = useState("");

    return(
        <div className = "p-4 bg-black flex items-center justify-between w-full fixed top-0 left-0">
            <div className = "flex items-center space-x-4">
                <h1 className = "text-[40px] uppercase font-bold text-red-600">
                    Movie 
                </h1>
                <nav className = "flex items-center space-x-4">
                    <a href="0" className="text-white">Home</a>
                    <a href="0" className="text-white">About</a>
                    <a href="0" className="text-white">Contact</a>

                </nav>

            </div>
            <div className = "flex items-center space-x-4">
                <input type = "text" placeholder="Search" className="p-4 text-black bg-white rounded-md "  
                value={search} 
                onChange={(e) => setSearch(e.target.value)}>
                </input>
                <button className="p-3 text-white bg-red-600 rounded-md"
                onClick={() => onSearch(search)}>Search</button>
            </div>
        </div>
    )
}

Header.propTypes = {
    onSearch: PropTypes.func.isRequired,
};

export default Header;