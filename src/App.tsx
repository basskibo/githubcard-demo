import React, { useState, ChangeEvent } from 'react';
import logo from './logo.svg';
import './App.css';
// import GithubCard from "./github_card"
import { GithubCard } from "github-user-repo-card";



function App() {
  const [userInput, setuserInput] = useState("")
  const [gcShowed, setGcShowed] = useState(false)
  const [gc, setGc] = useState()


  const onChange = (e: ChangeEvent<HTMLInputElement>): void => {
    console.log(e.target.value)
    console.log("===", userInput)
    setuserInput(e.target.value);
  };

  const handleClick = () => {
    renderGC()
  }

  const renderGC = () => {
    return <GithubCard name={userInput} type="user" repository="blogtecsh_dev" />

  }

  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h3>User's profile card</h3>
        <div style={{ display: "inline-flex", gap: 15 }}>
          <div>
            <p className="card-label">Default</p>
            <GithubCard name="basskibo" type="profile" repository="blog_tech_dev" />
          </div>
          <div>
            <p className="card-label">With increased width and length</p>
            <GithubCard name="mcollina" type="user" repository="blogtech_dev" widht={350} height={370} />
          </div>
          <div>
            <p className="card-label">With reduced width and length</p>
            <GithubCard name="RodaBVB" type="user" repository="blogtech_dev" widht={220} height={320} />
          </div>

        </div>
        <h3>Repository card</h3>

        <div style={{ display: "inline-flex", gap: 15 }}>
          <div>
            <p className="card-label">Default</p>
            <GithubCard name="basskibo" type="repo" repository="github-user-repo-card" widht={500} height={150} />
          </div>
          <div>
            <p className="card-label">With larger height</p>
            <GithubCard name="basskibo" type="repo" repository="blog_tech_dev" widht={500} height={150} />
          </div>


        </div>

      </header>
    </div>
  );
}

export default App;
