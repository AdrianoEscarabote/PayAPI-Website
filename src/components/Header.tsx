import { HeaderStyled } from "../styles/HeaderStyle"
import { ScheduleElement } from "../styles/shared/ScheduleElement";
import iconCompany from "../assets/shared/desktop/logo.svg";

export const Header = () => {
  return (
    <HeaderStyled>
      <div className="container">
        <nav>
          <div className="nav-items">
            <img src={iconCompany} alt="" aria-hidden="true" />
            <ul>
              <li>
                <a href="/">Pricing</a>
              </li>
              <li>
                <a href="/">About</a>
              </li>
              <li>
                <a href="/">Contact</a>
              </li>
            </ul>
          </div>
          <ScheduleElement href="/">Schedule a Demo</ScheduleElement>
        </nav>
      </div>
    </HeaderStyled>
  )
}