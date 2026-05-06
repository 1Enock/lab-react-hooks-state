import React, { useState } from 'react'
import ProductList from './components/ProductList'
import DarkModeToggle from './components/DarkModeToggle'
import Cart from './components/Cart'
import styles from './styles/DarkMode.module.css'

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [cartItems, setCartItems] = useState([])
  const [selectedCategory, setSelectedCategory] = useState('all')

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product])
  }

  return (
    <div className={isDarkMode ? styles.darkMode : styles.lightMode}>
      <h1> Shopping App</h1>
      <p>
        Welcome! Your task is to implement filtering, cart management, and dark
        mode.
      </p>

      <DarkModeToggle
        isDarkMode={isDarkMode}
        onToggleDarkMode={handleToggleDarkMode}
      />

      <label>Filter by Category: </label>
      <select
        value={selectedCategory}
        onChange={(event) => setSelectedCategory(event.target.value)}
      >
        <option value="all">All</option>
        <option value="Fruits">Fruits</option>
        <option value="Dairy">Dairy</option>
        <option value="NonExistent">NonExistent</option>
      </select>

      <ProductList
        selectedCategory={selectedCategory}
        onAddToCart={handleAddToCart}
      />

      <Cart cartItems={cartItems} />
    </div>
  )
}

export default App