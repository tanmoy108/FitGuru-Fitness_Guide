import React from 'react';
import "./Home.scss";
import ExerciseForm from '../../exerciseField/ExerciseForm';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const AllExercise = () =>{
    navigate("/exercises");
  }

  return (
    <>
    <div className="home-box" >
      <h3 style={{textTransform:"uppercase"}}>Faster, Stronger <br/><span style={{color:"#ee2323"}} >Fight</span> to the end </h3>
      <button className="home-button" onClick={AllExercise} >Get All Exercises</button>
    </div>
    <ExerciseForm/>
    </>
  )
}

export default Home