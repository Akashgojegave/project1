import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Layout/Navbar';
import Add from './Components/Pages/Add';
import Show from './Components/Pages/Show';
import Update from './Components/Pages/Update';
import Delete from './Components/Pages/Delete';
function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar></Navbar>
        <Routes>
          <Route path='add/' element={<Add/>}></Route>
          <Route path='show/' element={<Show/>}></Route>
          <Route path='update/:pk' element={<Update></Update>}></Route>
          <Route path='delete/:pk' element={<Delete></Delete>}></Route>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
