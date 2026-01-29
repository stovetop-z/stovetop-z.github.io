import './App.css';
import me from './me.jpg'

import {useState} from 'react';

function App() {

  const [view, setView] = useState("Home");

  return (
    <div className="page">
      <div className="banner">
        <Button name="btn" sym="⌂" onClick={() => setView("Home")} />
        <Button name="btn" sym="Projects" onClick={() => setView("Projects")} />
        <Button name="btn" sym="About" onClick={() => setView("About")} />
      </div>
      <div className="std-view"> 
        {view == "Home" && <Home />}
        {view == "Projects" && <Projects />}
        {view == "About" && <About />}
      </div>
      <footer>
        steven zinn's portfolio website
      </footer>
    </ div>
  );
}

function Home() {
  return (
    <Card title="Steven Zinn" img={me} alt="Steven Zinn" img_class="me" />
  );
}

function Projects() {
  return (
    <Card title="My Projects" />
  );
}

function About() {
  return (
    <>
      <Card title="About Me" />
      <div className='page-content'>
        <h4>An Autobiography</h4>
        <p>
          I grew up primarily in beautiful San Jose, California with a short stint in Houston, Texas. 
          An avid, eternal learner, I have always sought out experiences and pursued various projects in my youth. 
          Some most enjoyable:
        </p>
        <ul>
          <li>First Lego League (<strong>FLL</strong>) Lego Robotics Competition: where my team made it through qualifiers in 2010.</li>
          <li>Pong inspired computer game, written fully in C++ using SDL libraries (I wish I knew about github at this point).</li>
          <li>Arduino Uno box robot that navigated its space using an ultrasonic sensor and a a triwheel design.</li>
        </ul>
        <p>
          Once I turned 18 years old, I left beautiful San Jose to serve as a missionary for my Church in São Paulo, BR for the next 
          2 years (returning in 2019). I loved my time in Brazil, where I spent every waking hour of virtually everyday (even the weekends) 
          serving everyone who accepted our help. Other than marriage and raising a family, it has been the most rewarding experience of my life.
        </p>
        <p>
          Fast forward to 2020, I had been studying Electrical Engineering (like my dad) and taken part in a club called 
          The Spacecraft Club, where I learned how to design a basic PCB with an inertia mass unit, barometer, radio transmitter, and temperature sensor -- 
          having an ATMEGA chip (Arduino Uno) as the brains of the operations -- that my team programmed and then attached 
          to a model rocket for the sake of learning and to qualify for a larger scale project.
        </p>
        <p>
          My team was successful in our task, and were welcomed to the larger scale project, that had implications for master students 
          at <strong>Brigham Young University</strong>. Our task: design a mini satellite that could take temperature and gyro readings in low earth orbit (<strong>LEO</strong>) 
          and transmit the data back to our team on campus for the master students to use for a larger scale satellite project. This 
          project tested me on many levels. Unfortunately, the end stage of the project was interrupted by COVID-19, and we never got 
          back together to finish.
        </p>
        <p>

        </p>
      </div>
    </>
  );
}

function Card({title, img = "None", alt = "None", img_class = "None"}) {
  return (
    <>
      <div className="card">
        {img != "None" && <img src={img} alt={alt} className={img_class} />}
        <h3 className='card-title'>{title}</h3>
        <p className="card-p">
          Computer science masters student with experience in advanced machine learning projects
        </p>
      </div>
    </>
  );
}

function Button({name, sym, onClick}) {
  return <button className={name} onClick={onClick}>{sym}</button>;
}

export default App;
