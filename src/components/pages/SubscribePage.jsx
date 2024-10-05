import React, { useState } from "react";
import { motion } from "framer-motion";
import { Paper, Typography, TextField, Button, Box } from "@mui/material";
import { Link } from "react-router-dom";
import axios from "axios";
import "../styles/SubscribePage.css";

const SubscribePage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false); // State to track subscription status
  const [error, setError] = useState("");

  const handleSubscribe = async () => {
    try {
      const response = await axios.post("http://localhost:5000/api/email", {
        email: email,
      });
      console.log("Subscription successful:", response.data);
      setSubscribed(true); // Update state to show subscription success
      setError(""); // Clear any previous errors
    } catch (error) {
      console.error("Error subscribing:", error);
      setError("Error subscribing. Please try again."); // Display error message
    }
  };

  return (
    <motion.section
      className="subscribe-section"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Paper elevation={3} className="subscribe-paper">
        <Typography variant="h4" className="subscribe-heading">
          Join Our Newsletter
        </Typography>
        <Typography variant="body1" className="subscribe-description">
          Stay updated with the latest sneaker releases and exclusive offers.
          Subscribe to our newsletter today!
        </Typography>
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 120 }}
        >
          <TextField
            id="email"
            label="Your Email"
            variant="outlined"
            className="subscribe-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </motion.div>
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          style={{ margin: "1rem" }}
        >
          <Button
            variant="contained"
            color="primary"
            onClick={handleSubscribe}
            className="subscribe-button"
          >
            Subscribe
          </Button>
        </motion.div>
        {error && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="subscribe-error"
          >
            {error}
          </motion.div>
        )}
        {subscribed && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="subscribe-success"
          >
            Thank you for subscribing!
          </motion.div>
        )}
        <Typography variant="body2" className="subscribe-policy">
          We respect your privacy. Unsubscribe anytime.
        </Typography>
        <Box textAlign="center" mt={2}>
          <Button
            variant="outlined"
            component={Link}
            to="/"
            className="subscribe-back-button"
          >
            Back to Home
          </Button>
        </Box>
      </Paper>
    </motion.section>
  );
};

export default SubscribePage;
