import React from 'react';
import logo from './logo.svg';
import './App.css';
import GithubCard from "./github_card"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div style={{ display: "inline-flex", gap: 15 }}>
          <div>
            <p>Default</p>
            <GithubCard name="" type="user" repository="blogtech_dev" />
          </div>
          <div>
            <p>With larger height</p>
            <GithubCard name="mcollina" type="user" repository="blogtech_dev" widht={300} height={400} />
          </div>
          <div>
            <p>With lower height</p>
            <GithubCard name="RodaBVB" type="user" repository="blogtech_dev" widht={300} height={300} />
          </div>
          <div>
            <p>With lower width</p>
            <GithubCard name="eleonnora" type="user" repository="blogtech_dev" widht={250} height={350} />
          </div>


        </div>


      </header>
    </div>
  );
}

export default App;
