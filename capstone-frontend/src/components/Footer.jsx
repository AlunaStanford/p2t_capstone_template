import React from 'react'
import '../styles/footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='footer'>
      <h2>Footer (c) {currentYear}</h2>
    </footer>
  )
}

export default Footer