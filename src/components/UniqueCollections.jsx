import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate from react-router-dom
import './styles/UniqueCollections.css'; // Import the CSS file for styles

const UniqueCollections = () => {
    const navigate = useNavigate(); // Initialize useNavigate

    const handleLearnMore = () => {
        navigate('/about'); // Redirect to /about when clicked
    };

    return (
        <section id="unique-collections" className="unique-collections">
            <div className="bg-layers">
                <div className="color-underlay"></div>
                <div className="bg-media"></div>
            </div>
            <div className="inline-content">
                <div className="grid-container">
                    <div className="column-strip">
                        <div className="column left-column">
                            <div className="bg-layers">
                                <div className="color-underlay"></div>
                                <div className="bg-media"></div>
                            </div>
                            <div className="inline-content">
                                <h2 className="collection-title">Discover Our Unique Collections</h2>
                                <h6 className="collection-subtitle">Our Story</h6>
                            </div>
                        </div>
                        <div className="column right-column">
                            <div className="bg-layers">
                                <div className="color-underlay"></div>
                                <div className="bg-media"></div>
                            </div>
                            <div className="inline-content">
                                <p className="collection-description">
                                    SNEAKERS X is a premier online sneaker store dedicated to providing a wide variety of sneakers for passionate sneaker enthusiasts. Our focus on innovation and uniqueness sets us apart from the competition. We are committed to boosting online sales and creating a community for all sneaker aficionados.
                                </p>
                                <button className="learn-more-button" onClick={handleLearnMore}>Learn More</button> {/* Added click handler */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default UniqueCollections;
