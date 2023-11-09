
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/navbar/Navbar';
// import Modalpage from './components/modal/Modalpage';
import Register from './pages/register/Register';
import Baner from './components/baner/Baner';
import Footer from './components/footer/Footer';
import Login from './pages/login/Login';
import Chooseprofile from './pages/chooseprofiles/Chooseprofile';
import Intrest from './pages/intrests/Intrest';
import Profile from './pages/profile/Profile';


function App() {
  

  return (
    <>
      <Router>
         
      <NavBar/>
      <Routes>
        <Route path="/" element={<Baner/>} />
        <Route path="/reg" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/choos" element={<Chooseprofile />} />
        <Route path="/intrest" element={<Intrest/>} />
        <Route path='/pf/:id' element={<Profile/>}></Route>
        {/* <Route  path='/cart/:id' Component={Cart}/> */}

      </Routes>
    <Footer/>
    </Router>
    </>
  )
}

export default App
