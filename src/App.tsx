import { BrowserRouter, Route, Routes } from "react-router";
import { MasterScreen } from "./features/MasterScreen";
import MovieDetailsPage from "./features/MovieDetails/MovieDetailsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MasterScreen />} />
        <Route path="/movies/:id" element={<MovieDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
