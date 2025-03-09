import React from 'react';
import Slider from "../components/Slider/Slider.jsx";
import PhotoCollage from "../components/PhotoCollage/PhotoCollage.jsx";
import NewSolution from "../components/NewSolution/NewSolution.jsx";
import BookForm from "../components/BookForm/BookForm.jsx";
import Benefits from "../components/Benefits/Benefits.jsx";
import IconsContacts from "../components/IconsContacts/IconsContacts.jsx";
import Map from "../Map/Map.jsx";
import Follow from "../components/Follow/Follow.jsx";
import MetaTags from "../common/MetaTags.jsx";

const Home = () => {
    return (
       <>
           <MetaTags page="home"/>
           <div>
               <Slider/>
               <PhotoCollage/>
               <BookForm/>
               <NewSolution/>
               <Benefits/>
               <IconsContacts/>
               <Map/>
               <Follow/>
           </div>
       </>
    );
};

export default Home;