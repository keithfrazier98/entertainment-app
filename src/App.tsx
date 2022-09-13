import { Menu } from "@headlessui/react";
import { BellIcon, MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <div className="h-screen flex overflow-hidden py-6">
      <Router>
        <NavigationBar />
        <div className="flex flex-col w-0 flex-1 overflow-hidden">
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
                      placeholder="Search for movies or TV series"
                      type="search"
                      name="search"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>

          <main className="flex-1 relative overflow-y-auto focus:outline-none">
            <Routes>
              <Route
                path="/"
                element={
                  <div className="py-6">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                      <h1 className="text-2xl font-semibold text-gray-900">
                        Dashboard
                      </h1>
                    </div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                      {/* Replace with your content */}
                      <div className="py-4">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96" />
                      </div>
                      {/* /End replace */}
                    </div>
                  </div>
                }
              />
              <Route path="/movies" />
              <Route path="/series" />
              <Route path="/bookmarked" />
            </Routes>
          </main>
        </div>
      </Router>
    </div>
  );
}
