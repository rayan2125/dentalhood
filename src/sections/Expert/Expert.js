import React from 'react';
import './Expert.scss';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
import { BsFillCheckCircleFill } from "react-icons/bs";
import expertImg from '../../assets/expert.png';

const consultants = [
    {
        name: "Dr. Sanket Avhad",
        specialization: "Prosthodontist and Implantologist",
        contact: "8169932506",
        availableTime: "9 AM to 7 PM",
        location: "Western line",
        residence: "Dadar"
    },
    {
        name: "Dr. Rohit Amburle",
        specialization: "Endodontist",
        contact: "7208173449",
        availableTime: "9 AM to 7 PM",
        location: "Western line",
        residence: "Goregaon"
    },
    {
        name: "Dr. Harsh Sachdev",
        specialization: "Pedodontist",
        contact: "9167720233",
        availableTime: "9 AM to 7 PM",
        location: "Nearby Thane",
        residence: "Thane"
    }
];

const clinicians = [
    {
        name: "Dr. Asif Shaikh (BDS)",
        contact: "9867466087",
        availableTime: "4 PM to 10 PM",
        clinic: "Excellence Clinic",
        address: "Shop no.5, Soniya Cooperative Housing Society, 60 Feet Road, near Chota Sion Hospital, Matunga Labour Camp, Mahim, Mumbai, Maharashtra 400019"
    },
    {
        name: "Dr. Siddhesh Sawe (MDS)",
        contact: "9892974489",
        availableTime: "9 AM to 9 PM",
        clinic: "Brace's Place Multispeciality Dental Clinic",
        address: "Shop no 15, Building no 6 & 7, Shanti Gardens Rd, beside Police Commissioner Office, Sector 5, Gaurav Galaxy, Mira Road East, Mira Bhayandar, Maharashtra 401107"
    },
    {
        name: "Dr. Ratnesh Vishwakarma (BDS)",
        contact: "9892399293",
        availableTime: "9 AM to 9 PM",
        clinic: "Smile House Dental Care",
        address: "Plot no.32, Omkar Society, D/3, Lokhandwala Twp, Kandivali East, Mumbai, Maharashtra 400101"
    }
];

const Expert = () => {
    return (
        <section className='expert-section' data-aos="fade-up" data-aos-duration="2000">
            <div className="container">
                <div className="row align-items-center">
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-text">
                            <SectionTitle 
                                subTitle="OUR CONSULTANTS & CLINICIANS"
                                title="Expert Dental Professionals at Your Service"
                                description="Meet our highly experienced consultants and clinicians, providing top-notch dental care across multiple locations."
                            />
                            <ul>
                                <li><BsFillCheckCircleFill /> Top quality dental team</li>
                                <li><BsFillCheckCircleFill /> State-of-the-art dental services</li>
                                <li><BsFillCheckCircleFill /> Discount on all dental treatments</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="expert-img">
                            <img src={expertImg} alt="expert" />
                        </div>
                    </div>
                </div>

                {/* Consultants Section */}
                <div className="row mb-10">
                    <div className="col-12">
                        <h3 className="section-heading">Our Consultants</h3>
                    </div>
                    {consultants.map((consultant, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="expert-card">
                                <h4>{consultant.name}</h4>
                                <p><strong>Specialization:</strong> {consultant.specialization}</p>
                                <p><strong>Contact:</strong> {consultant.contact}</p>
                                <p><strong>Available Time:</strong> {consultant.availableTime}</p>
                                <p><strong>Consulting Location:</strong> {consultant.location}</p>
                                <p><strong>Residence:</strong> {consultant.residence}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Clinicians Section */}
                <div className="row mt-4">
                    <div className="col-12">
                        <h3 className="section-heading">Our Clinicians</h3>
                    </div>
                    {clinicians.map((clinician, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="expert-card">
                                <h4>{clinician.name}</h4>
                                <p><strong>Contact:</strong> {clinician.contact}</p>
                                <p><strong>Available Time:</strong> {clinician.availableTime}</p>
                                <p><strong>Clinic:</strong> {clinician.clinic}</p>
                                <p><strong>Address:</strong> {clinician.address}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Expert;
