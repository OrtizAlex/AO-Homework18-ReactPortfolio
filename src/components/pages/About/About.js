import React from 'react';

import "./About.css";


export default function About() {
  return (
    <div className="container-fluid about">
      <div><br/><br/></div>
      <h1 className="heading">Bio</h1>
      
      <p className="text-centered">
      Pace University Class of 2016 - Bachelor's of Science in Computer Science - Columbia University Coding Bootcamp Graduate
      </p>
      <div class="row align-items-start">
        <div class="col">
        
        </div>
        <div class="col">
        <img src="./images/self.jpg" className="img-responsive" height="300px"/>
        </div>
        <div class="col">
        </div>
      </div>
      
      <p className="text-centered">My journey to being a developer began when I was first introduced to computers when I was young and it is far from over. I made the decision to make this my career way back then and have been studying and practicing ever since.</p>

      <div><br/><hl/><br/></div>

      <h1 className="heading">Skills <i className = "fa fa-code"></i></h1>
      <ul class="twocolumns">
          <li>HTML</li>
          <li>CSS</li>
          <li>Javascript</li>
          <li>Java</li>
          <li>Python</li>
          <li>JQuery</li>
          <li>MySQL</li>
          <li>NoSQL</li>
          <li>MongoDB</li>
          <li>React</li>
          <li>Express.js</li>
          <li>Node.js</li>
      </ul>

      <div><br/><br/><br/><br/><br/><br/><br/><br/></div>
    </div>
  );
}
