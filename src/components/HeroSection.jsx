import React from 'react';
import './styles/HeroSection.css';

const HeroSection = () => {
    return (
        <section id="hero-section" className="hero-section">
            <div className="content fade-in"> {/* Added fade-in class */}
                <div className="text-content">
                    <h1 className="hero-title">Step Into Style</h1>
                    <h6 className="hero-subtitle">Explore the Latest Trends</h6>
                </div>
                <div className="image-content">
                    <img
                        src="https://static.wixstatic.com/media/11062b_bfac895136c440c4b11098bd4f4c6af8~mv2_d_7522_5015_s_4_2.jpg"
                        alt="Orange Shoelaces"
                        className="featured-image"
                    />
                </div>
            </div>
            <div className="bgLayers">
                <div className="colorUnderlay"></div>
                <div className="bgMedia">
                    <img
                        src="https://static.wixstatic.com/media/11062b_2dac1091fcb849a680a4c6cfea196843~mv2_d_5760_3840_s_4_2.jpg"
                        alt="Hero Background"
                        className="bgImage"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
