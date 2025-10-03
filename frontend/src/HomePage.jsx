import React from 'react';
import './css/HomePage.css'
import homeImg from './assets/homepage.jpg'
function Homepage(){

  return (
    <>
    <div className="main">
      <div className="navbar">
        <div className="icon">
          <div className="website-icon">
            <h4 className="logo">StudyNest</h4>
          </div>
        </div>

        <div className="menu">
          <ul>
            <li><a href="HomePage.html">HOME</a></li>
            <li><a href="about.html">ABOUT</a></li>
            <li><a href="service page.html">SERVICE</a></li>
            {/* <li><a href="#">DESIGN</a></li> */}
            <li><a href="contact.html">CONTACT</a></li>
          </ul>
        </div>

        <div className="search">
          <input className="srch" type="search" placeholder="Type To text" />
          <a href="#">
            <button className="btn">Search</button>
          </a>
        </div>
      </div>

      <div className="content">
        <h1>
          Welcome to <br />
          <span>Study Nest</span> <br />
          <br />
        </h1>
        <h2>Find | Learn | Grow</h2>
        <p className="par">
          At StudyNest, we believe every learner deserves a <br />
          sanctuary of knowledge. Dive into our carefully curated <br />
          collection of textbooks, study guides, and expert resources
        </p>

        <a href="login.html">
          <button className="cn">LOG IN</button>
        </a>
        <a href="Signup.html">
          <button className="cn">SIGN UP</button>
        </a>

        <div className="form">
          <img 
            src={homeImg}
            alt="homepage" 
            width="600" 
            style={{ float: 'right' }}
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default Homepage;