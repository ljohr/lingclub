import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">
      <p>Copyright &copy; 2023 Boston College Linguistics Club</p>
      <a href="https://www.instagram.com/bclinguisticsclub/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={ faInstagram } /></a>
    </footer>
  )
}

export default Footer