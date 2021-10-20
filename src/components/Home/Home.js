import React from 'react';
import Banner from '../Banner/Banner';
import ChooseMedical from '../ChooseMedical/ChooseMedical';
import Foot from '../Foot/Foot';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChooseMedical></ChooseMedical>
            <Services></Services>
            <Foot></Foot>
        </div>
    );
};

export default Home;