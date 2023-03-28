import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Profile from "./components/Profile";
import "./main.css"

export default function App() {
    return (
        <BrowserRouter>
            <Navbar />   
                <Routes>
                    <Route exact path="/" element={<Home />}></Route>
                    <Route path="/Profile" element={<Profile />}></Route>
                    <Route path="Dashboard" element={<Dashboard />}></Route>
                </Routes>
        </BrowserRouter>
    );
}