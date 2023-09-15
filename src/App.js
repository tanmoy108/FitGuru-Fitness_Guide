import './App.css';
import { Routes, Route } from "react-router-dom";
import Navigation from "./components/navigation/Navigation"
import Home from "./components/routes/home/Home"
import ExerciseDetails from './components/routes/exerciseDetails/ExerciseDetails';

function App() {
  return (
      <Routes>
        <Route path="/" element={<Navigation />} >
        <Route index element={<Home />} />
        <Route path="exercises" element={<ExerciseDetails />} />
        </Route>
      </Routes>
  );
}

export default App;
