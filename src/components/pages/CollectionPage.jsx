import React, { useState, useEffect } from "react";
import SneakerCard from "./SneakerCard";
import axios from "axios";
import "../styles/CollectionPage.css";

const CollectionPage = ({ handleAddToCart }) => {
  const [brandFilter, setBrandFilter] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [sneakersPerPage] = useState(9);
  const [sneakersData, setSneakersData] = useState([]);

  useEffect(() => {
    // Fetch sneakers data from your backend when the component mounts
    axios
      .get("http://localhost:5000/api/sneakers/get-all")
      .then((response) => {
        setSneakersData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredSneakers =
    brandFilter === "All"
      ? sneakersData
      : sneakersData.filter((sneaker) => sneaker.brand === brandFilter);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastSneaker = currentPage * sneakersPerPage;
  const indexOfFirstSneaker = indexOfLastSneaker - sneakersPerPage;
  const currentSneakers = filteredSneakers.slice(
    indexOfFirstSneaker,
    indexOfLastSneaker
  );

  const totalPages = Math.ceil(filteredSneakers.length / sneakersPerPage);

  return (
    <div className="sneaker-collection">
      <div className="sidebar">
        <h2>Filter by Brand</h2>
        <ul>
          <li onClick={() => setBrandFilter("All")}>All</li>
          <li onClick={() => setBrandFilter("NIKE")}>Nike</li>
          <li onClick={() => setBrandFilter("Adidas")}>Adidas</li>
          <li onClick={() => setBrandFilter("Reebok")}>Reebok</li>
        </ul>
      </div>
      <div className="sneaker-list">
        <h1>Sneaker Collection</h1>
        <div className="sneaker-cards">
          {currentSneakers.map((sneaker) => (
            <SneakerCard
              key={sneaker._id}
              sneaker={sneaker}
              handleAddToCart={() => handleAddToCart(sneaker)} // Pass handleAddToCart
            />
          ))}
        </div>
        <div className="pagination">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }).map((_, index) => (
            <span
              key={index}
              className={`page-number ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </span>
          ))}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default CollectionPage;
