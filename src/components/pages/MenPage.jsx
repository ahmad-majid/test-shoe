import React, { useState, useEffect } from "react";
import SneakerCard from "./SneakerCard";
import axios from "axios";
import "../styles/MenPage.css";

const MenPage = ({ handleCart, handleAddToCart }) => {
  const [brandFilter, setBrandFilter] = useState("All");
  const [sortOption, setSortOption] = useState("lowToHigh");
  const [currentPage, setCurrentPage] = useState(1);
  const [sneakersPerPage] = useState(9);
  const [menSneakers, setMenSneakers] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  useEffect(() => {
    const fetchMenSneakers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/sneakers/men");
        setMenSneakers(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchMenSneakers();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleBrandFilter = (brand) => {
    setBrandFilter(brand);
    setCurrentPage(1);
  };

  const handleSortOptionChange = (event) => {
    setSortOption(event.target.value);
  };

  const handleCategoryChange = (category) => {
    if (selectedCategories.includes(category)) {
      setSelectedCategories((prevCategories) =>
        prevCategories.filter((c) => c !== category)
      );
    } else {
      setSelectedCategories((prevCategories) => [...prevCategories, category]);
    }
  };

  const isCategorySelected = (category) => {
    return selectedCategories.includes(category);
  };

  const filterSneakersByCategory = (sneakers) => {
    if (selectedCategories.length === 0) {
      return sneakers;
    }
    return sneakers.filter((sneaker) =>
      selectedCategories.includes(sneaker.category)
    );
  };

  const sortSneakers = (sneakers) => {
    if (sortOption === "lowToHigh") {
      return sneakers.slice().sort((a, b) => a.price - b.price);
    } else if (sortOption === "highToLow") {
      return sneakers.slice().sort((a, b) => b.price - a.price);
    } else {
      return sneakers;
    }
  };

  const indexOfLastSneaker = currentPage * sneakersPerPage;
  const indexOfFirstSneaker = indexOfLastSneaker - sneakersPerPage;

  const filteredSneakers = filterSneakersByCategory(menSneakers);
  const currentSneakers =
    brandFilter === "All"
      ? sortSneakers(filteredSneakers).slice(
          indexOfFirstSneaker,
          indexOfLastSneaker
        )
      : sortSneakers(filteredSneakers)
          .filter((sneaker) => sneaker.brand === brandFilter)
          .slice(indexOfFirstSneaker, indexOfLastSneaker);

  const totalPages = Math.ceil(filteredSneakers.length / sneakersPerPage);

  return (
    <div className="men-sneaker-collection">
      <div className="sidebar">
        <h2>Filter by Brand</h2>
        <ul>
          <li onClick={() => handleBrandFilter("All")}>All</li>
          <li onClick={() => handleBrandFilter("PUMA")}>Puma</li>
          <li onClick={() => handleBrandFilter("NIKE")}>Nike</li>
          <li onClick={() => handleBrandFilter("New Balance")}>New Balance</li>
          {/* Add more brand filter options here */}
        </ul>
        <h2>Sort by Price</h2>
        <select value={sortOption} onChange={handleSortOptionChange}>
          <option value="lowToHigh">Price: Low to High</option>
          <option value="highToLow">Price: High to Low</option>
        </select>
        <div className="category-filter">
          <h2>Filter by Category</h2>
          <label>
            <input
              type="checkbox"
              value="Classic"
              checked={isCategorySelected("Classic")}
              onChange={() => handleCategoryChange("Classic")}
            />
            Classic
          </label>
          <label>
            <input
              type="checkbox"
              value="Training"
              checked={isCategorySelected("Training")}
              onChange={() => handleCategoryChange("Training")}
            />
            Training
          </label>
          <label>
            <input
              type="checkbox"
              value="Running"
              checked={isCategorySelected("Running")}
              onChange={() => handleCategoryChange("Running")}
            />
            Running
          </label>
          <label>
            <input
              type="checkbox"
              value="Basketball"
              checked={isCategorySelected("Basketball")}
              onChange={() => handleCategoryChange("Basketball")}
            />
            Basketball
          </label>
        </div>
      </div>
      <div className="sneaker-list">
        <h1>Men's Sneaker Collection</h1>
        <div className="sneaker-cards">
          {currentSneakers.map((sneaker) => (
            <SneakerCard
              key={sneaker._id}
              sneaker={sneaker}
              handleCart={handleCart}
              handleAddToCart={() => handleAddToCart(sneaker)}
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
              className={`page-number ${currentPage === index + 1 ? "active" : ""}`}
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

export default MenPage;
