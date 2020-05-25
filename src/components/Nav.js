import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
      </div>
    )
  }
}
