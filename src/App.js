import React from "react";
import {Route, Routes} from "react-router-dom";
import ExerciseDetail from './pages/ExerciseDetails';
import Home from './pages/Home';
import Navbar from './components/navbar';
import Footer from './components/Footer';
import {Box} from "@mui/material";
import "./App.css";



const App=() =>{
  return(
  <Box width="400px" sx={{ width: { xl: '1488px' } }} m="auto">
  <Navbar />
  <Routes>
    
    <Route path="/" element={<Home />} />
    <Route path="/exercise/:id" element={<ExerciseDetail />} />
  </Routes>
  <Footer />
</Box>
  );
}


export default App;
