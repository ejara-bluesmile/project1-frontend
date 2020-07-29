import React, { Component } from 'react';
import image from '../../resources/user.png';

class Card extends Component {
  state = {}
  render() {
    return (
      <div className="card mb-3 ">
        <h3 className="card-header "> </h3>
        <img
          style={{
            height: 100, 
            width: 100}}
          src={image} 
          alt="user"
        />
        <div className="card-body">
          <h5 className="card-title">Name</h5>
          <br></br>
          <h6 className="card-subtitle text-muted">Email</h6>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">
              <a 
              href="/" 
              className="card-link">
                Users 
                <svg 
                width="1.6em" 
                height="1.6em" 
                viewBox="0 0 16 16" 
                className="bi bi-person-lines-fill float-right" 
                fill="currentColor" 
                xmlns="http://www.w3.org/2000/svg">
                  <path 
                  fill-rule="evenodd" 
                  d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm7 1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5zm-2-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm0-3a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm2 9a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
                </svg>
              </a>
          </li>
          <li className="list-group-item">
              <a 
                href="/" 
                className="card-link">
                  Issuses 
                  <svg 
                  width="1.6em" 
                  height="1.6em" 
                  viewBox="0 0 16 16" 
                  className="bi bi-list-task float-right" 
                  fill="currentColor" 
                  xmlns="http://www.w3.org/2000/svg">
                    <path 
                    fill-rule="evenodd" 
                    d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"/>
                    <path 
                    d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z"/>
                    <path 
                    fill-rule="evenodd" 
                    d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"/>
                  </svg>
              </a>
          </li>
        </ul>
        
        <div className="card-footer text-muted">
        </div>
      </div>
    );
  }
}

export default Card;