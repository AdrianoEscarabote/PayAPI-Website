import { HeaderStyled } from "../styles/HeaderStyle"
import { ScheduleElement } from "../styles/shared/ScheduleElement";
import iconCompany from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import closeMenu from "../assets/shared/mobile/close.svg";
import openMenuImg from "../assets/shared/mobile/menu.svg";

export const Header = () => {

  const [openMenu, setOpenMenu] = useState("closed");

  const HandleClickMobileButton = () => {
    openMenu === "closed" ? setOpenMenu("open") : setOpenMenu("closed")
  };

  return (
    <HeaderStyled>
      <div className="container">
        <nav className={openMenu === "closed" ? "nav-mobile-layout" : ""}>
          <Link to="/" aria-label="main page">
            <img src={iconCompany} alt="" aria-hidden="true" />
          </Link>
          <button className="mobile-button"
           aria-label={openMenu === "closed" ? "open mobile menu" : "close mobile menu"}
           onClick={HandleClickMobileButton}>
            <img src={openMenuImg} alt="" aria-hidden="true" />
          </button>
          <div className={openMenu === "closed" ? "nav-items" : "nav-items mobile-layout"}>
            <div className="container-mobile-background">
              <div className="background-mobile"></div>
            </div>
            <button onClick={HandleClickMobileButton} 
              aria-label={openMenu === "closed" ? "" : "close mobile menu"} 
              aria-hidden={openMenu === "closed" ? "true" : "false"}
            >
              <img src={closeMenu} alt="" />
            </button>
            <ul>
              <li>
                <Link to="/pricing" aria-label="go to Pricing page">Pricing</Link>
              </li>
              <li>
                <Link to="/about" aria-label="go to about page">About</Link>
              </li>
              <li>
                <Link to="/contact" aria-label="go to contact page">Contact</Link>
              </li>
            </ul>
            <ScheduleElement href="/" aria-label="schedule a Demo">Schedule a Demo</ScheduleElement>
          </div>
        </nav>
      </div>
    </HeaderStyled>
  )
}