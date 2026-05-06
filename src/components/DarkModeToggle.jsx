iimport React from 'react'

const DarkModeToggle = ({ isDarkMode, onToggleDarkMode }) => {
  return (
    <button onClick={onToggleDarkMode}>
      Toggle {isDarkMode ? 'Light' : 'Dark'} Mode
    </button>
  )
}

export default DarkModeToggle