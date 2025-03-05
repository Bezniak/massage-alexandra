import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import PhotoCollage from "../components/PhotoCollage/PhotoCollage.jsx";
import NewSolution from "../components/NewSolution/NewSolution.jsx";
import EnjoyDifference from "../components/EnjoyDifference/EnjoyDifference.jsx";
import Benefits from "../components/Benefits/Benefits.jsx";
import IconsContacts from "../components/IconsContacts/IconsContacts.jsx";
import Map from "../Map/Map.jsx";
import Follow from "../components/Follow/Follow.jsx";

const Home = () => {
    return (
        <div>
            <Slider/>
            <PhotoCollage/>
            <EnjoyDifference/>
            <NewSolution/>
            <Benefits/>
            <IconsContacts/>
            <Map/>
            <Follow/>
        </div>
    );
};

export default Home;