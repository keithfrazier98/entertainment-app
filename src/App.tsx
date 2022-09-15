import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FilterSection from "./components/FilterSection";
import { GlobalContext } from "./components/GlobalContext";
import { useContext } from "react";
export default function App() {
  const { searchInput } = useContext(GlobalContext);

  return (
    <div className="flex flex-col lg:flex-row overflow-hidden">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={
              <FilterSection
                title="Movies"
                placeholder="Search for movies"
                filter={(item) => item.category === "Movie"}
                searchFilter={(item) =>
                  item.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) &&
                  item.category === "Movie"
                }
              />
            }
          />
          <Route
            path="/series"
            element={
              <FilterSection
                placeholder="Search for TV Series"
                title="TV Series"
                filter={(item) => item.category === "TV Series"}
                searchFilter={(item) =>
                  item.title
                    .toLowerCase()
                    .includes(searchInput.toLowerCase()) &&
                  item.category === "TV Series"
                }
              />
            }
          />
          <Route
            path="/bookmarked"
            element={
              <div className="flex flex-col w-full h-full">
                <FilterSection
                  placeholder="Search for bookmarked shows"
                  searchFilter={(item) =>
                    item.title
                      .toLowerCase()
                      .includes(searchInput.toLowerCase()) && item.isBookmarked
                  }
                  filter={(item) =>
                    item.isBookmarked && item.category === "Movie"
                  }
                  title="Bookmarked Movies"
                />{" "}
                <FilterSection
                  filter={(item) =>
                    item.isBookmarked && item.category === "TV Series"
                  }
                  title="Bookmarked TV Series"
                />
              </div>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
