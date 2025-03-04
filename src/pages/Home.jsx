import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import PhotoCollage from "../components/PhotoCollage/PhotoCollage.jsx";
import NewSolution from "../components/NewSolution/NewSolution.jsx";
import EnjoyDifference from "../components/EnjoyDifference/EnjoyDifference.jsx";
import Benefits from "../components/Benefits/Benefits.jsx";

const Home = () => {
    return (
        <div>
            <Slider/>
            <PhotoCollage/>
            <EnjoyDifference/>
            <NewSolution/>
            <Benefits/>
        </div>
    );
};

export default Home;