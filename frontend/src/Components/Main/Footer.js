import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return ( 
            <div className="main-footer">
            <div className="container">
              <div className="row">
                {/* Column1 */}
                <div className="col">
                  <h4>Account</h4>
                  <h1 className="list-unstyled">
                  <li class="footer-item">
                      <Link to="/register">Register</Link>
                    </li>
                    <li class="footer-item">
                      <a href='http://localhost:3000/login'>Login</a>
                    </li>
                  </h1>
                </div>
                {/* Column2 */}
                <div className="col">
                  <h4>About</h4>
                  <ui className="list-unstyled">
                    <li>Our Story</li>
                    <li>Contact Us</li>
                  </ui>
                </div>
                {/* Column3 */}
                <div className="col">
                  <h4>Legals</h4>
                  <ui className="list-unstyled">
                    <li>Privacy Policy</li>
                    <li>Terms and Conditions</li>
                  </ui>
                </div>
              </div>
              <hr />
            </div>
          </div>
        );
      }
      
      export default Footer;