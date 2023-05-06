import React from "react";
// import './css/main.css';

const Container = () => {
  return (
    <div className="banner">
      <div className="navbar">
        <h1>Home</h1>
        <ul>
          <li><a href="#"></a>About Me</li>
          <li><a href="#"></a>Service</li>
          <li><a href="#"></a>Project</li>
          <li><a href="#"></a>Contact</li>
        </ul>
      </div>
      <div className="content">
        <h1>THE GREAT WAVE OFF KANAGAWA</h1>
        <p>a woodblock print by Japanese ukiyo-e artist Hokusai, possibly made in late 1831 during the late Edo period. The painting depicts three boats being buffeted by a large wave off the coast of Sagami Bay, Kanagawa Prefecture. In the background you can see Mount Fuji.</p>
        <div>
          <button type="button"><span></span>Feeling lucky</button>
          <button type="button"><span></span>Get in touch</button>
        </div>
      </div>
    </div>
  )
}

export default Container;