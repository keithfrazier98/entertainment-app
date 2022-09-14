import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { IContentData } from "../types/types";

export default function SearchBar({
  data,
  placeholder,
}: {
  data: IContentData[];
  placeholder:string;
}) {
  return (
    <div className="relative z-10 flex-shrink-0 flex h-16 shadow">
      <div className="flex-1 px-4 flex justify-between">
        <div className="flex-1 flex">
          <form className="w-full flex md:ml-0 " action="#" method="GET">
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
                className="block font-thin bg-transparent w-full h-full pl-8 pr-3 py-2 border-transparent text-gray-900 placeholder-gray-500 focus:outline-none focus:placeholder-gray-400 focus:ring-0 focus:border-transparent text-base"
                placeholder={placeholder}
                type="search"
                name="search"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
