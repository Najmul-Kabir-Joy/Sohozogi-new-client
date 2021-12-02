import React from 'react';
import AdvBanner from './AdvBanner';
import HomeFoods from './HomeFoods';
import HomeGrocery from './HomeGrocery';
import HomePharmacy from './HomePharmacy';
import JoinUs from './JoinUs';
import LifeStyle from './LifeStyle';
import OurServices from './OurServices';
import Partners from './Partners';
import TopCarousel from './TopCarousel';

const Home = () => {
    return (
        <>
            <TopCarousel></TopCarousel>
            <OurServices />
            <HomeFoods />
            <HomePharmacy />
            <LifeStyle />
            <AdvBanner />
            <HomeGrocery />
            <JoinUs />
            <Partners />

        </>
    );
};

export default Home;