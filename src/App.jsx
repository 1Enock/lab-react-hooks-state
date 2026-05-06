import React, { useState } from 'react'
import ProductList, { sampleProducts } from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [cartItems, setCartItems] = useState([])

  const filteredProducts =
    selectedCategory === 'all'
      ? sampleProducts
      : sampleProducts.filter((product) => product.category === selectedCategory)

  const handleToggle = () => {
    setIsDarkMode((prevMode) => !prevMode)
  }

  const handleAddToCart = (product) => {
    if (!cartItems.some((item) => item.id === product.id)) {
      setCartItems((prevItems) => [...prevItems, product])
    }
  }

  return (
    <div className={isDarkMode ? 'darkMode' : ''}>
      <h1>🛒 Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle isDarkMode={isDarkMode} onToggle={handleToggle} />

      <label htmlFor="category-filter">Filter by Category: </label>
      <select
        id="category-filter"
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList products={filteredProducts} onAddToCart={handleAddToCart} />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App