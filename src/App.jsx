import  { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import CollectionPage from "./components/pages/CollectionPage";
import WomenPage from "./components/pages/WomenPage";
import AboutPage from "./components/pages/About";
import Footer from "./components/Footer";
import ContactPage from "./components/pages/ContactPage";
import MenPage from "./components/pages/MenPage";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import SneakerDetailPage from "./components/pages/SneakerDetailPage"; // New import
import { AuthProvider } from "./AuthContext";

import axios from "axios";
import HowToOrder from "./components/pages/HowToOrder";
import FAQPage from "./components/pages/FAQ";
import PrivacyPolicyPage from "./components/pages/PrivacyPolicyPage";
import TermsAndConditions from "./components/pages/TermsAndConditions";
import PrivacyCookiesPage from "./components/pages/PrivacyCookiesPage";
import ShippingPolicyPage from "./components/pages/ShippingPolicyPage";
import ReturnAndExchangePage from "./components/pages/ReturnAndExchangePage";
import ViewCartPage from "./components/pages/ViewCartPage";
import CheckoutPage from "./components/pages/CheckoutPage";
import ThankYouPage from "./components/pages/ThankYouPage";
import SubscribePage from "./components/pages/SubscribePage";

function App() {
  const [sneakers, setSneakers] = useState([]);
  const [cart, setCart] = useState([]); // New cart state
  const [quantity, setQuantity] = useState(0);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [registeredUsers, setRegisteredUsers] = useState([]);

  useEffect(() => {
    // Fetch sneaker data from the backend
    axios
      .get("http://localhost:5000/api/sneakers/get-all")
      .then((response) => {
        setSneakers(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const handleAddToCart = (sneaker) => {
    setCart((prevCart) => [...prevCart, sneaker]);
    setQuantity((prevQuantity) => prevQuantity + 1);
  };
  const handleRemoveFromCart = (sneakerId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== sneakerId));
    setQuantity((prevQuantity) => prevQuantity - 1);
  };
  const handleRegister = (userData) => {
    setRegisteredUsers((prevUsers) => [...prevUsers, userData]);
    console.log("Registered Users:", registeredUsers);
  };

  const handleLogin = (loginData) => {
    const { username, password } = loginData;
    const userExists = registeredUsers.some(
      (user) => user.username === username && user.password === password
    );

    console.log("Login Data:", username, password);
    console.log("User Exists:", userExists);

    if (userExists) {
      setIsLoggedIn(true);
      setUsername(username);
      setIsCartOpen(false);
      setQuantity(0);
    } else {
      alert("Invalid username or password. Please try again.");
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername("");
  };

  const handleCart = () => {
    setIsCartOpen(true);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };
  const removeFromCart = (itemId) => {
    setCart((prevCart) => prevCart.filter((item) => item._id !== itemId));
  };
  const clearCart = () => {
    setCart([]);
  };

  return (
    <Router>
      <AuthProvider>
        <div className="md:px-40 min-h-screen">
          {console.log(username)}
          <Navbar
            isLoggedIn={isLoggedIn}
            username={username}
            handleLogout={handleLogout}
            quantity={quantity}
            cart={cart} // Pass cart state to Navbar
            isCartOpen={isCartOpen}
            handleCart={handleCart}
            closeCart={closeCart}
            removeFromCart={handleRemoveFromCart}
          />
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  sneakers={sneakers}
                  handleAddToCart={handleAddToCart} // Pass handleAddToCart to HomePage
                  handleCart={handleCart}
                />
              }
            />
            <Route
              path="/collection"
              element={
                <CollectionPage
                  sneakers={sneakers}
                  handleAddToCart={handleAddToCart} // Pass handleAddToCart to CollectionPage
                  handleCart={handleCart}
                  closeCart={closeCart}
                />
              }
            />
            <Route
              path="/checkout"
              element={<CheckoutPage cart={cart} clearCart={clearCart} />}
            />
            <Route
              path="/women"
              element={
                <WomenPage
                  sneakers={sneakers.filter(
                    (sneaker) => sneaker.gender === "WOMEN"
                  )}
                  handleAddToCart={handleAddToCart} // Pass handleAddToCart to WomenPage
                  handleCart={handleCart}
                  closeCart={closeCart}
                />
              }
            />
            <Route
              path="/termsandconditions"
              element={<TermsAndConditions />}
            />
            <Route
              path="/return&exchange"
              element={<ReturnAndExchangePage />}
            />
            <Route path="/shippingpolicy" element={<ShippingPolicyPage />} />
            <Route path="/cookies" element={<PrivacyCookiesPage />} />
            <Route path="/privacy" element={<PrivacyPolicyPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/FAQ" element={<FAQPage />} />
            <Route
              path="/cart"
              element={
                <ViewCartPage cart={cart} removeFromCart={removeFromCart} />
              }
            />
            <Route
              path="/men"
              element={
                <MenPage
                  sneakers={sneakers.filter(
                    (sneaker) => sneaker.gender === "MEN"
                  )}
                  handleAddToCart={handleAddToCart} // Pass handleAddToCart to MenPage
                  handleCart={handleCart}
                  closeCart={closeCart}
                />
              }
            />
            <Route
              path="/login"
              element={<LoginPage handleLogin={handleLogin} />}
            />
            <Route path="/how-to-order" element={<HowToOrder />} />
            <Route
              path="/register"
              element={<RegisterPage onRegister={handleRegister} />}
            />
            <Route
              path="/sneaker/:id"
              element={
                <SneakerDetailPage
                  sneakers={sneakers}
                  handleAddToCart={handleAddToCart}
                />
              }
            />
            <Route path="/thank-you" element={<ThankYouPage />} />
            <Route path="/subscribe" element={<SubscribePage />} />
          </Routes>
          <Footer />
        </div>
      </AuthProvider>
    </Router>
  );
}

export default App;
