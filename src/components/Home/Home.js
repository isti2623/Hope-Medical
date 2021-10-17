import React from 'react';
import Banner from '../Banner/Banner';
import ChooseMedical from '../ChooseMedical/ChooseMedical';
import Services from '../Services/Services';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <ChooseMedical></ChooseMedical>
            <Services></Services>
        </div>
    );
};

export default Home;