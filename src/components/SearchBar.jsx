import React from "react";

const SearchBar = () => {
  return (
    <div className="flex px-2 items-center">
      <div className="w-96">
        <div className="input-group relative flex items-stretch w-full mb-4">
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.75 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded-l transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Paracetamol"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
          <button
            className="btn px-6 py-2.5 bg-teal-600 text-white text-sm font-light leading-tight rounded-r shadow-md hover:bg-teal-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
            type="button"
            id="button-addon2"
          >
            <span>Search</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
