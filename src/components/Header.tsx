import { HeaderStyled } from "../styles/HeaderStyle"
import { ScheduleElement } from "../styles/shared/ScheduleElement";
import iconCompany from "../assets/shared/desktop/logo.svg";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <nav>
          <div className="nav-items">
            <Link to="/">
              <img src={iconCompany} alt="" aria-hidden="true" />
            </Link>
            <ul>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <ScheduleElement href="/">Schedule a Demo</ScheduleElement>
        </nav>
      </div>
    </HeaderStyled>
  )
}