import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import CategoryPage from "./components/CategoryPage";
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
              <CategoryPage
                filter={(item) => item.category === "Movie"}
                title="Movies"
              />
            }
          />
          <Route
            path="/series"
            element={
              <CategoryPage
                filter={(item) => item.category === "TV Series"}
                title="TV Series"
              />
            }
          />
          <Route
            path="/bookmarked"
            element={
              <CategoryPage
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
