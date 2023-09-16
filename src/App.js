import { Provider } from 'react-redux';
import { Route, Routes } from "react-router-dom";
import './App.css';
import Navigation from "./components/navigation/Navigation";
import ExerciseById from './components/routes/exerciseById/ExerciseById';
import ExerciseDetails from './components/routes/exerciseDetails/ExerciseDetails';
import Home from "./components/routes/home/Home";
import Store from './redux/store';
function App() {
  return (
    <Provider store={Store}>
      <Routes>
        <Route path="/" element={<Navigation />} >
          <Route index element={<Home />} /></Route>
          <Route path="exercises" element={<ExerciseDetails />} />
          <Route path="exercises/:id" element={<ExerciseById />} />
        
      </Routes>
    </Provider>
  );
}

export default App;
