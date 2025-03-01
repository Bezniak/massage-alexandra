import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import PhotoCollage from "../components/PhotoCollage/PhotoCollage.jsx";
import NewSolution from "../components/NewSolution/NewSolution.jsx";

const Home = () => {
    return (
        <div>
            <Slider/>
            <PhotoCollage/>
            <NewSolution/>
        </div>
    );
};

export default Home;