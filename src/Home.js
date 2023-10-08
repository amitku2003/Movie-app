import React from "react";
import { useGlobalContext } from "./context";
import Footer from "./Footer";
import Movies from "./Movies";
import Navbar from "./Navbar";

const Home = () => {
    return (
        <>
            <Navbar />
            <Movies />
            <Footer />
        </>
    );
}

export default Home;