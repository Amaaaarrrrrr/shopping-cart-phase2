import { useState } from "react";

const MainPage = ({ products, addToCart }) => {
  // State variables for sorting and searching
  const [sortOption, setSortOption] = useState("name-asc");
  const [searchQuery, setSearchQuery] = useState("");

  // Filter and sort products based on the selected sort option and search query
  const sortProducts = (products, option) => {
    const sortedProducts = [...products];
    switch (option) {
      case "name-asc":
        return sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
      case "name-desc":
        return sortedProducts.sort((a, b) => b.name.localeCompare(a.name));
      case "price-asc":
        return sortedProducts.sort((a, b) => a.price - b.price);
      case "price-desc":
        return sortedProducts.sort((a, b) => b.price - a.price);
      default:
        return products;
    }
  };

  // Handle sorting options change
  const handleSortChange = (event) => {
    setSortOption(event.target.value);
  };

  // Handle search query change
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  // Filter products based on the search query and sort them accordingly
  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery)
  );

  // Sort and filter the products based on the selected sort option and search query
  const sortedAndFilteredProducts = sortProducts(filteredProducts, sortOption);

  // Render the main page with product list, search bar, and sort options
  return (
    <div>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products by name"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="sort-options">
        <label htmlFor="sort">Sort by: </label>
        <select id="sort" value={sortOption} onChange={handleSortChange}>
          <option value="name-asc">Name (A-Z)</option>
          <option value="name-desc">Name (Z-A)</option>
          <option value="price-asc">Price (Low to High)</option>
          <option value="price-desc">Price (High to Low)</option>
        </select>
      </div>
      <h1>Product List</h1>
      <div className="product-list">
        {sortedAndFilteredProducts.map((product) => (
          <div key={product.id} className="product">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} width="200" />
            <p>Price: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainPage;
