import React from 'react';
import '../styles/AboutPage.css'; // Import the CSS file for styles
import missionImage from '../../assets/about/mission.jpg'; // Adjust the image path as needed
import visionImage from '../../assets/about/vision.jpg'; // Adjust the image path as needed

const About = () => {
    return (
        <div className="about-page">
            <h1 className="about-heading">About Us</h1>

            <section className="mission-section">
                <div className="mission-content">
                    <h2 className="section-heading">Our Mission</h2>
                    <p>
                        We strive to provide the best products and services to our customers.
                        Our goal is to innovate and exceed expectations in every project we undertake.
                        We are committed to sustainability and community involvement.
                        Our mission is to make a positive impact in the world through our actions.
                    </p>
                </div>
                <img className="section-image" src={missionImage} alt="Mission" />
            </section>

            <section className="vision-section">
                <img className="section-image" src={visionImage} alt="Vision" />
                <div className="vision-content">
                    <h2 className="section-heading">Our Vision</h2>
                    <p>
                        Our vision is to be a global leader in our industry.
                        We aim to set new standards of excellence and inspire others.
                        We believe in continuous improvement and embracing change.
                        Our vision is to foster a culture of innovation and creativity.
                    </p>
                </div>
            </section>
        </div>
    );
};

export default About;
