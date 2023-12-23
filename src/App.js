
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Route,Routes } from 'react-router-dom';
import Home from "./pages/Home/Home";
import Booking from "./pages/Booking/Booking";
import Confirmation from "./pages/Confirmation/Confirmation";
function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route element={<Home/>} path="/"/>
      <Route element={<Booking/>} path='/booking'/>
      <Route element={<Confirmation/>} path='/confirmation'/>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
