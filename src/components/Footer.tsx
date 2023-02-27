import { FooterStyled } from "../styles/Footer"
import logoFooter from "../assets/shared/desktop/logo.svg";
import iconFacebook from "../assets/shared/desktop/facebook.svg"
import iconTwitter from "../assets/shared/desktop/twitter.svg"
import iconLinkedin from "../assets/shared/desktop/linkedin.svg"
import { Link } from "react-router-dom";
import { useEffect } from "react"
import { UseName } from "../context";

interface FooterProps {
  setName: React.Dispatch<React.SetStateAction<string | null>>
}

export const Footer: React.FC<FooterProps> = ({ setName }) => {
  
  const handleClickLink = (name: string | null) => {
    if (name === "main") {
      setName("main")
    } else {
      name === "Pricing" ? setName("pricing") : setName("About")
    }
  }

  return (
    <FooterStyled>
      <div className="container-footer">
        <div className={"background="}></div>
        <div className="logo-links">
          <Link onClick={() => handleClickLink("main") } to="/" aria-label="go back to the main page">
            <img src={logoFooter} alt="" aria-hidden="true" /> 
          </Link>
          <ul>
            <li>
              <Link to="/pricing" aria-label="go to pricing page" onClick={(e) => handleClickLink(e.currentTarget.textContent)}>Pricing</Link>
            </li>
            <li><Link to="/about" aria-label="go to about page" onClick={(e) => handleClickLink(e.currentTarget.textContent)}>About</Link></li>
            <li><Link to="/contact" aria-label="go to contact page" onClick={(e) => handleClickLink(e.currentTarget.textContent)}>Contact</Link></li>
          </ul>
        </div>
        <div className="social-icons">
          <ul>
            <li>
              <Link to="/" aria-label="go to facebook">
                <img src={iconFacebook} alt="" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="go to twitter">
                <img src={iconTwitter} alt="" aria-hidden="true" />
              </Link>
            </li>
            <li>
              <Link to="/" aria-label="go to linkedin">
                <img src={iconLinkedin} alt="" aria-hidden="true" />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </FooterStyled>
  )
}