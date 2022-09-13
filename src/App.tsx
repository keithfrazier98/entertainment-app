import NavigationBar from "./components/NavigationBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
export default function App() {
  return (
    <div className="h-screen flex overflow-hidden py-6">
      <Router>
        <NavigationBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" />
          <Route path="/series" />
          <Route path="/bookmarked" />
        </Routes>
      </Router>
    </div>
  );
}
