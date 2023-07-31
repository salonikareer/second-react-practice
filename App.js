import React from 'react';
import './index.css'; 

const App = () => {
  return (
    <div className="app-container">
      
      <div className="top-bar">
        <div className="logo">
        <img src={require('./images/product1.jpeg')} alt="Logo" width="20%"/>
        </div>
        <div className="navigation">
          <span>Products</span>
          <span>Teams</span>
          <span>Support</span>
        </div>
        <div className="other-options">
          <button>Buy</button>
          <button>Login</button>
          {/* <input type="text" placeholder="Search" /> */}
          <span>&#x1F50D;</span><input type="text"></input>
        </div>
      </div>

      
      <div className="background-image">
        
        <h1>Move work forward</h1>
        <h4>Atlassian helps teams works smarter and faster, together</h4>
        <button>learn more</button>
      </div>
    </div>
  );
};

export default App;
