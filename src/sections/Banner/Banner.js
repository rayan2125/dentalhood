// import React from 'react';
// import './Banner.scss';
// import {Link} from 'react-router-dom';
// import icon from '../../assets/banner/icons/Calling.png';
// import bannerImg from '../../assets/banner/1.png';
// import doctorImg from '../../assets/banner/doctor.png';
// import bannerPattern from '../../assets/banner/pattern_02.png';
// import shapeOne from '../../assets/banner/vector_01.png';
// import shapeTwo from '../../assets/banner/vector_02.png';
// import shapeThree from '../../assets/banner/vector_03.png';
// import shapeFour from '../../assets/banner/pattern.png';

// const Banner = () => {

//     return (
//         <section className='section-bg section-common banner-section'>
//             <div className="d-table">
//                 <div className="d-table-cell">
//                     <div className="container">
//                         <div className="row">
//                             <div className="col-lg-6">
//                                 <div className="banner-text" data-aos="fade-up" data-aos-duration="2000">
//                                     <h1>Entrust your smile to professionals</h1>
//                                     <p>Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.</p>

//                                     <div className="banner-bottom">
//                                         <div className="theme-btn">
//                                             <Link to="/contact">Book an appointment</Link>
//                                         </div>

//                                         <div className="banner-call">
//                                             <div className='icon'>
//                                                 <img src={icon} alt="icon" />
//                                             </div>
//                                             <div className='call-text'>
//                                                 <p>Dental 24H Emergency</p>
//                                                 <h6>03 482 394 123</h6>
//                                             </div>
//                                         </div>
//                                     </div>
//                                 </div>
//                             </div>

//                             <div className="col-lg-6">
//                                 <div className="banner-img-area" data-aos="fade-up" data-aos-duration="2000" data-aos-delay="500">
//                                     <div className="banner-img">
//                                         <img src={bannerImg} alt="banner model" />
//                                     </div>
//                                     <div className='info-box'>
//                                         <div className="info-img">
//                                             <img src={doctorImg} alt="doctor" />
//                                         </div>
//                                         <div className='info-text'>
//                                             <p>Dr. Samantha Alice</p>
//                                             <p><small>Consultant</small></p>
//                                         </div>
//                                     </div>  


//                                     <div className="shapes">
//                                         <img src={shapeOne} alt="shape" />
//                                         <img src={shapeTwo} alt="shape" />
//                                         <img src={shapeThree} alt="shape" />
//                                         <img src={shapeFour} alt="shape" />
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             {/* Banner Pattern Vector*/}
//             {/* <img className='banner-pattern' src={bannerPattern} alt="banner pattern" /> */}
//         </section>
//     );
// };

// export default Banner;
import React from "react";
import Slider from "react-slick";
import "./Banner.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import event1 from "../../assets/banner/1.png";
import event2 from "../../assets/banner/2.png";
import event3 from "../../assets/banner/3.png";

const Banner = () => {
    const events = [
        {
            title: "Dental Health Awareness Campaign",
            date: "July 25, 2024",
            image: event1,
        },
        {
            title: "Free Dental Checkup Day",
            date: "August 10, 2024",
            image: event2,
        },
        {
            title: "Kids Dental Care Workshop",
            date: "September 5, 2024",
            image: event3,
        },
    ];

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false, // Optional: You can enable arrows if desired
    };

    return (

        <section className="banner-section">
            <div className="container-section" >
                <h1 className="section-title">Upcoming Events</h1>
                <Slider {...sliderSettings} className="event-carousel">
                    {events.map((event, index) => (
                        <div key={index} className="event-slide">
                            <img src={event.image} alt={event.title} className="event-image" />
                            <div className="">
                                <h2>{event.title}</h2>
                                <p>{event.date}</p>
                            </div>
                        </div>
                    ))}
                </Slider>

            </div>
        </section>
    );
};

export default Banner;

