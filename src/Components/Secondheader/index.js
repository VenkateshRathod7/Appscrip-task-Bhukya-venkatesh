import React, {Component} from 'react'
import './index.css' // Import the CSS file for styles

class Secondheader extends Component {
  render() {
    return (
      <>
        <nav className="active">
          <ul>
            <li>
              <h4 className="nav-title">Shop</h4>
            </li>
            <li>
              <h4 className="nav-title">Skills</h4>
            </li>
            <li>
              <h4 className="nav-title">Stories</h4>
            </li>
            <li>
              <h4 className="nav-title">About</h4>
            </li>
            <li>
              <h4 className="nav-title">Contact Us</h4>
            </li>
          </ul>
        </nav>
        <h1 className="maintext"> DISCOVER OUR PRODUCTS</h1>
        <p className="maintext2">
          Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
          <br />
          scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
          dolor.
        </p>

        <hr className="line" />

        <div className="new-container">
          <div className="left-items">
            <p>3425 Items</p>
          </div>

          <div className="hide-filter">
            <button className="nav-link"> {'\u003C'} HIDE FILTER</button>
          </div>

          <div className="recommended">
            <button className="nav-link">RECOMMENDED ▼</button>
          </div>
        </div>
        <hr className="line" />
      </>
    )
  }
}

export default Secondheader
