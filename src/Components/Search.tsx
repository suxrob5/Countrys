"use client";

import { Dispatch, SetStateAction } from "react";

interface MainType {
  inputValue: string;
  setinputValue: Dispatch<SetStateAction<string>>;
}

const Search: React.FC<MainType> = ({ inputValue, setinputValue }) => {
  return (
    <div className="mt-10 w-80 sm:w-96 md:w-[300px] mx-auto">
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="search"
          value={inputValue}
          onChange={(e) => setinputValue(e.target.value)}
          id="input-dark-mode"
          className="w-full px-5 py-3 focus:outline-cyan-500 text-lg sm:text-xl rounded-lg shadow-xl bg-gray-100"
          placeholder="Search..."
        />
      </form>
    </div>
  );
};

export default Search;
