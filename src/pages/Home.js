import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Appointment from '../sections/Appointment/Appointment';
import Banner from '../sections/Banner/Banner';
import Blogs from '../sections/Blogs/Blogs';
import Emergency from '../sections/Emergency/Emergency';
import Expert from '../sections/Expert/Expert';
import Features from '../sections/Features/Features';
import Footer from '../sections/Footer/Footer';
import Services from '../sections/Services/Services';
import Testimonial from '../sections/Testimonial/Testimonial';
import Dealers from './Dealers';
import WallOfFame from './WallOframe';

const Home = () => {

    return (
        <>
            <Navbar/>
            <Banner/>
            <Expert/>
            <Dealers/>
            <WallOfFame/>
            <Services/>
            <Emergency/>
            <Features />
            
            <Testimonial/>
            <Blogs/>
            <Appointment/>
            <Footer/>
        </>
    );
};

export default Home;