import './App.css';
import me from './me.jpg'
import fam_wo_isabella from './family_wo_isabella.jpg'
import mama_kids from './mama_el_bel.jpg'
import py from './py.svg'
import torch from './pytorch.svg'
import cpp from './cplusplus.svg'
import jsreact from './react.svg'
import fapi from './fastapi.svg'
import mysql from './mysql.svg'
import ubuntu from './ubuntu.svg'
import scipy from './scikitlearn.svg'
import pd from './pandas.svg'
import np from './numpy.svg'
import plt from './Matplotlib.svg'
import java from './java.svg'
import lua from './lua.svg'
import matlab from './matlab.svg'

import {useState} from 'react';

function goTo(str) {
  if (str.includes("github")) {
    window.open(`https://${str}`, '_blank');
  } else {
    window.location.href = `#${str}`;
  }
}

function App() {

  const [view, setView] = useState("Home");

  return (
    <div className="page">
      <div className="banner">
        <Button name="btn" sym="⌂" onClick={() => goTo("Steven Zinn")} />
        <Button name="btn" sym="Projects" onClick={() => goTo("Projects")} />
        <Button name="btn" sym="Skills" onClick={() => goTo("Skills")} />
        <Button name="btn" sym="Experience" onClick={() => goTo("Experience")} />
        <Button name="btn" sym="Classwork" onClick={() =>goTo("Relevant Classes")} />
        <Button name="btn" sym="About" onClick={() => goTo("About Me")} />
      </div>
      <div className="std-view"> 
        <Card title="Steven Zinn" subtitle='Computer science masters student with experience in advanced machine learning projects' img={me} alt="Steven Zinn" img_class='me' />
        <Card title="Projects" subtitle='click to see my projects on github'/>
        <Card title="Skills" subtitle='hover to view'/>
        <Card title="Experience" subtitle='hover to view'/>
        <Card title="Relevant Classes" subtitle="hover to view" />
        <Card title="About Me" subtitle="" img={fam_wo_isabella} alt="Family" img_class='imgNoBella'/>
      </div>
      <footer>
        steven zinn's portfolio website
      </footer>
    </ div>
  );
}

function Projects() {
  return (
    <>
      <div className='project-banner'>
        <Button name="btn" sym="Cenote" onClick={() => goTo("github.com/stovetop-z/Cenote")} />
        <Button name="btn" sym="Tremor" onClick={() => goTo("github.com/stovetop-z/SensitivityAnalysis")} />
        <Button name="btn" sym="flindr" onClick={() => goTo("github.com/stovetop-z/flindr")} />
        <Button name="btn" sym="ML Fundamentals" onClick={() => goTo("github.com/stovetop-z/Fundamentals-of-Machine-Learning")} />
        <Button name="btn" sym="Backend CRUD API" onClick={() => goTo("github.com/stovetop-z/Backend-CRUD-API")}/>
        <Button name="btn" sym="Deep Learning" onClick={() => goTo("github.com/stovetop-z/Deep-Learning")} />
      </div>
    </>
  );
}

function Skills() {
  return (
    <>
      <div className='skills-banner'>
        <h5>Frameworks and Languages</h5>
        <div className='languages'>
          <Language title="python" sym={py} />
          <Language title="FastAPI" sym={fapi} />
          <Language title="PyTorch" sym={torch} />
          <Language title="SciPy" sym={scipy} />
          <Language title="Matplotlib" sym={plt} />
          <Language title="Pandas" sym={pd} />
          <Language title="NumPy" sym={np} />
          <Language title="MySQL" sym={mysql} />
          <Language title="React" sym={jsreact} />
          <Language title="Java" sym={java} />
          <Language title="C++" sym={cpp} />
          <Language title="Lua" sym={lua} />
          <Language title="MATLAB" sym={matlab} />
          <Language title="Ubuntu" sym={ubuntu} />
        </div>
        <h5>Technical Knowledge</h5>
        <div className='techList'>
          <ul className='techKnowledgeList'>
            <li>Supervised Learning: Linear/Logistic Regression, Decision Trees, Random Forests, SVM</li>
            <li>Unsupervised Learning: KMM, PCA, Anomaly Detection</li>
            <li>Deep Learning: CNNs, RNNs, learning now (Transformers, Attention Mechanisms)</li>
            <li>Evaluation Metrics</li>
            <li>Version Control: Git/GitHub</li>
          </ul>
        </div>
      </div>

    </>
  );
}

function Classes() {
  return (
    <>
    <div className='skills-banner'>
    </div>
    </>
  );
}

function Experience() {
  return (
    <>
      <div className='skills-banner'>
        <Work title="Research Assistant" company="BYU" date="Jan 2023 - Dec 2024" tools="MATLAB, C++" what={`\n- Optimized a tremor propagation model using numerical differentiation in MATLAB, reducing compute time by hours. \n - Utilized multivariable calculus to translate DOF acceleration to hand displacement. \n - Created complex visualizations and statistical analysis using matplotlib for presentations at Rocky Mountain Biomedical Engineering Summit (2023, 2024).`}/>
        <Work title="Data Analyst" company="BYU" date="Jan 2024 - Sept 2024" tools="Python, MATLAB (Matplotlib)" what="Applied statistical methods to identify seizure patterns in data" />
      </div>
    </>
  );
}

function About() {
  return (
    <>
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
          For my undergraduate I chose Neuroscience, but still decided to tack on mathematics from Calc I to Calc III and Linear Algebra 
          to get a strong foundation for research. I worked for a couple of years with a professor (Steven Charles, PhD) in mechanical engineering 
          to develop a sensitivity analysis of parameters in newly developed tremor propagation model. This model was derived from a previous MS student 
          of his, but the model ended at degree of freedom translation (of which there are 7 on each side of the upper body). Not only this, but his code 
          took days to run because it used symbolic differentiation. 
        </p>
        <p>
          Together, we developed a Jacobian (with the help of MATLAB) to multiply into the model to get end effector (hand) instantaneous movement. 
          Additionally, I revised the code to use numerical differentiation to determine the parameters that were most sensitive in the model instead 
          of symbolic to cut the time for the code to run from days to minutes.
        </p>
        <p>
          I now happily study computer science as a masters students, emphasizing in machine learning, to meld my two passions of the theory of learning 
          and computer science. My life is filled with little giggles from my two young daughters and a wife who has loved and supported me (and vice-a-versa) 
          since 2021. 
        </p>
      </div>
    </>
  );
}

function Card({title, subtitle = "None", img = "None", alt = "None", img_class = "None"}) {
  return (
    <>
      <div className="card" id={title}>
        <div className="images">
          {img != "None" && <img src={img} alt={alt} className={img_class} />}
          {alt == "Family" && <img src={mama_kids} alt="Mama and kids" className='imgMamaKids' />}
        </div>
        <h3 className='card-title'>{title}</h3>
        <p className="card-p">
          {subtitle}
        </p>

        {title == "Projects" && <Projects />}
        {title == "Skills" && <Skills />}
        {title == "Relevant Classes" && <Classes />}
        {title == "Experience" && <Experience />}
        {title == "About Me" && <About />}
      </div>
    </>
  );
}

function Button({name, sym, onClick}) {
  return <button className={name} onClick={onClick}>{sym}</button>;
}

function Work({title, company, date, tools, what}) {
  return (
    <div className='workCard'>
      <h5 className='workTitle'>{title}</h5>
      <h6 className='workCo'>{company}, {date}</h6>
      <h6 className='workTools'>Tools: {tools}</h6>
      <p className="workDesc"><strong><u>Description</u></strong>: {what}</p>
    </div>
  );
}

function Language({title, sym}) {
  return (
    <button className="language">
      <img className="imgLang" src={sym} alt={title}></img>
      <h6>{title}</h6>
    </button>
  );
}

export default App;
