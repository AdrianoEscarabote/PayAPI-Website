import { FooterStyled } from "../styles/Footer"
import logoFooter from "../assets/shared/desktop/logo.svg";
import iconFacebook from "../assets/shared/desktop/facebook.svg"
import iconTwitter from "../assets/shared/desktop/twitter.svg"
import iconLinkedin from "../assets/shared/desktop/linkedin.svg"
import { Link } from "react-router-dom";

export const Footer = () => {

  return (
    <FooterStyled>
      <div className="container-footer">
        <div className="background"></div>
        <div className="logo-links">
          <Link to="/">
            <img src={logoFooter} alt="" aria-hidden="true" /> 
          </Link>
          <ul>
            <li><Link to="/pricing">Pricing</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
        <div className="social-icons">
          <ul>
            <li>
              <a>
                <img src={iconFacebook} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={iconTwitter} alt="" aria-hidden="true" />
              </a>
            </li>
            <li>
              <a href="">
                <img src={iconLinkedin} alt="" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  )
}