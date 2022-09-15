import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Dispatch, FormEvent, useContext, useEffect, useState } from "react";
import { DataDispatch, FilterFunction, IContentData } from "../types/types";
import { GlobalContext } from "./GlobalContext";

export default function SearchBar({
  filter,
  placeholder,
  dispatch,
}: {
  filter: FilterFunction;
  placeholder: string;
  dispatch: DataDispatch;
}) {
  const { searchInput, setSearchInput } = useContext(GlobalContext);

  useEffect(() => {
    dispatch({
      type: "filter",
      filter: searchInput
        ? filter
        : undefined,
    });
  }, [searchInput]);

  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 shadow">
      <div className="flex-1 focus:border-b border-b-primary-blue-light flex justify-between">
        <div className="flex-1 flex">
          <form
            className="w-full flex md:ml-0 "
            onSubmit={(e: FormEvent<HTMLFormElement>) => {
              e.preventDefault();
            }}
          >
            <label htmlFor="search-field" className="sr-only">
              Search
            </label>
            <div className="relative w-full text-gray-400 focus-within:text-gray-600">
              <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
                <MagnifyingGlassIcon
                  className="h-5 w-5 text-white"
                  aria-hidden="true"
                />
              </div>
              <input
                id="search-field"
                className="block text-white caret-primary-red font-thin bg-transparent w-full h-full pl-8 pr-3 py-2 border-transparent placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent text-base"
                placeholder={placeholder}
                type="search"
                name="search"
                onChange={(e) => setSearchInput(e.target.value)}
                value={searchInput}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
