import { HeaderStyled } from "../styles/HeaderStyle"
import { ScheduleElement } from "../styles/shared/ScheduleElement";
import iconCompany from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";
import { useState } from "react";
import closeMenu from "../assets/shared/mobile/close.svg";
import openMenuImg from "../assets/shared/mobile/menu.svg";

interface HeaderProps {
  name: string | null,
  setName: React.Dispatch<React.SetStateAction<string | null>>;
};

export const Header: React.FC<HeaderProps> = ({ setName, name }) => {
  const [openMenu, setOpenMenu] = useState("closed");

  const HandleClickMobileButton = () => {
    openMenu === "closed" ? setOpenMenu("open") : setOpenMenu("closed");
  };

  const handleClickLink = (name: string | null) => {
    if (name === "main") {
      setName("main");
    } else if ( name === "Pricing") {
      setName("pricing");
    } else if (name === "Contact") {
      setName("contact");
    } else {
      setName("about");
    };
  };

  return (
    <HeaderStyled>
      <div className="container">
        <nav className={openMenu === "closed" ? "nav-mobile-layout" : ""}>
          <Link to="/" aria-label="main page" onClick={() => handleClickLink("main")}>
            <img src={iconCompany} alt="" aria-hidden="true" />
          </Link>
          <button className="mobile-button"
           aria-label={openMenu === "closed" ? "open mobile menu" : "close mobile menu"}
           onClick={HandleClickMobileButton}>
            <img src={openMenuImg} alt="" aria-hidden="true" />
          </button>

          <div className={openMenu === "closed" ? "hidden" : "close-mobile-menu"} 
          aria-label={openMenu === "closed" ? "" : "close mobile menu"} 
          aria-hidden={openMenu === "closed" ? "true" : "false"}
          onClick={HandleClickMobileButton}></div>

          <div className={openMenu === "closed" ? "nav-items" : "nav-items mobile-layout"}>
            <div className={`container-mobile-background ${name}`}>
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
                <Link to="/pricing" aria-label="go to Pricing page" onClick={(e) => handleClickLink(e.currentTarget.textContent)}>Pricing</Link>
              </li>
              <li>
                <Link to="/about" aria-label="go to about page" onClick={(e) => handleClickLink(e.currentTarget.textContent)}>About</Link>
              </li>
              <li>
                <Link to="/contact" aria-label="go to contact page" onClick={(e) => handleClickLink(e.currentTarget.textContent)}>Contact</Link>
              </li>
            </ul>
            <ScheduleElement href="/" aria-label="schedule a Demo">Schedule a Demo</ScheduleElement>
          </div>
        </nav>
      </div>
    </HeaderStyled>
  )
}