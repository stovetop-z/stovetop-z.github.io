import './App.css';

import {useState} from 'react';

function App() {

  const [view, setView] = useState("Home");

  return (
    <>
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
    </>
  );
}

function Home() {
  return <h3>Steven Zinn</h3>;
}

function Projects() {
  return <h3>My Projects</h3>;
}

function About() {
  return <h3>About Steven Zinn</h3>;
}

function Button({name, sym, onClick}) {
  return <button className={name} onClick={onClick}>{sym}</button>;
}

export default App;
