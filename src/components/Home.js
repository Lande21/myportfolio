// src/components/Home.js
import React from 'react';
import { Link } from 'react-scroll';
import { FaChevronDown } from 'react-icons/fa';
import './app'

const Home = () => (
  <div id="home" className="section home">
    <div className="content">
      <h1>Welcome to My Portfolio Amba</h1>
      <Link to="projects" smooth={true} duration={500}>
        <FaChevronDown className="scroll-icon" />
      </Link>
    </div>
  </div>
);

export default Home;
