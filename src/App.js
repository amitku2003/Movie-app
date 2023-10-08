import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import SingleMovie from "./SingleMovie";
import About from "./About";
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';


const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="movies/:id" element={<SingleMovie />} />
                <Route path="about-me" element={<About />} />
            </Routes>
            <button className="dark-md-btn" onClick={() => {
                document.body.classList.toggle('light-mode');
                document.getElementById('light-mode-btn').classList.toggle('hidden');
                document.getElementById('dark-mode-btn').classList.toggle('hidden');
                let link = document.getElementById('favicon');
                let value = link.getAttribute('href');
                if (value === "favicon.png"){
                    link.setAttribute('href', 'purple.png');
                }else{
                    link.setAttribute('href', 'favicon.png');
                }
            }}>
                <div id="light-mode-btn">
                    <LightModeIcon sx={{ fontSize: 30, color: "inherit", padding: "6px" }} />
                </div>
                <div id="dark-mode-btn" className="hidden">
                    <DarkModeIcon sx={{ fontSize: 30, color: "inherit", padding: "6px" }} />
                </div>
            </button>
        </>
    );
}

export default App;