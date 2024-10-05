
import { Container, Typography, Button, Paper } from "@mui/material";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./styles/HomePage.css";
import HeroSection from "./HeroSection.jsx";
import NewArrivals from "./NewArrivals.jsx";
import UniqueCollections from "./UniqueCollections.jsx";
import FollowUs from "./FollowUs .jsx";

const Homepage = () => {
  return (
    <Container maxWidth="lg" className="homepage-container">
      {/* Hero Section */}
  <HeroSection/>

      {/* Shoe Showcase */}
    <NewArrivals/>

        {/* About */}
        <UniqueCollections />

  {/* FolowUS */}
  <FollowUs/>
      {/* Testimonials Section */}
      <motion.section
        className="testimonials-section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Typography
          variant="h4"
          className="section-heading"
        >
          What Our Customers Say
        </Typography>
        <Carousel
          showThumbs={false}
          autoPlay
          infiniteLoop
          interval={4000}
        >
          {[
            { text: "Amazing quality and fast delivery!", name: "John Doe" },
            { text: "The best sneaker shopping experience.", name: "Jane Smith" },
            { text: "Love the styles, I keep coming back.", name: "Sam Wilson" },
          ].map((testimonial, index) => (
            <div key={index} className="testimonial-item">
              <Typography variant="h6" className="testimonial-text">
                "{testimonial.text}"
              </Typography>
              <Typography variant="body2" className="testimonial-author">
                - {testimonial.name}
              </Typography>
            </div>
          ))}
        </Carousel>
      </motion.section>

      {/* Newsletter Section */}
      <motion.section
        className="newsletter-section"
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Paper elevation={3} className="newsletter-paper">
          <Typography variant="h4" className="newsletter-heading">
            Subscribe for Exclusive Offers
          </Typography>
          <Typography variant="body1" className="newsletter-description">
            Join our newsletter for the latest drops and discounts.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            className="newsletter-button"
            component={Link}
            to="/subscribe"
          >
            Subscribe
          </Button>
        </Paper>
      </motion.section>
    </Container>
  );
};

export default Homepage;
