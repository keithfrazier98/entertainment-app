import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import FilterPage from "./components/FilterPage";
export default function App() {
  return (
    <div className="h-screen flex overflow-hidden py-6">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/movies"
            element={
              <FilterPage
                filter={(item) => item.category === "Movie"}
                title="Movies"
              />
            }
          />
          <Route
            path="/series"
            element={
              <FilterPage
                filter={(item) => item.category === "TV Series"}
                title="TV Series"
              />
            }
          />
          <Route
            path="/bookmarked"
            element={
              <FilterPage
                filter={(item) => item.isBookmarked}
                title="Bookmarked"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}
