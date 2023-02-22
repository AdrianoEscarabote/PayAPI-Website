import { ContactStyled } from "../styles/ContactStyled";
import logoTesla from "../assets/shared/desktop/tesla.svg";
import logoMicrosoft from "../assets/shared/desktop/microsoft.svg";
import logoHp from "../assets/shared/desktop/hewlett-packard.svg";
import logoOracle from "../assets/shared/desktop/oracle.svg";
import logoGoogle from "../assets/shared/desktop/google.svg";
import logoNvidia from "../assets/shared/desktop/nvidia.svg";
import imgImplement from "../assets/home/desktop/illustration-easy-to-implement.svg";
import { ReadyToStart } from "./shared/ReadyToStart";

export const Contact = () => {
  return (
    <ContactStyled>
      <div className="container">
        <div className="background"></div>
        <h1>Submit a help request and we’ll get in touch shortly.</h1>
        <div className="grid-items">
          <div className="col1">
            <form noValidate>
              <fieldset>
              <legend className="sr-only">COLOCAR ALGO</legend>

              <label htmlFor="name">
                <input type="text" name="name" id="name" placeholder="Name"/>
              </label>

              <label htmlFor="email">
                <input type="email" name="email" id="email" placeholder="Email Address" />
              </label>

              <label htmlFor="company">
                <input type="text" name="company" id="company" placeholder="Company Name" />
              </label>

              <label htmlFor="title">
                <input type="text" name="title" id="title" placeholder="Title" />
              </label>

              <label htmlFor="message" id="message">
                <textarea placeholder="Message" id="message"></textarea>
              </label>
              
              <label htmlFor="up-to-date">
                <input type="checkbox" name="up-to-date" id="up-to-date" />
                <span>Stay up-to-date with company announcements and updates to our API</span>
              </label>
              </fieldset>

              <button type="submit">Submit</button>
            </form>
          </div>
          <div className="col2">
            <h2>Join the thousands of innovators already building with us</h2>
            <div className="logos">
              <img src={logoTesla} alt="" aria-hidden="true" />
              <img src={logoMicrosoft} alt="" aria-hidden="true" />
              <img src={logoHp} alt="" aria-hidden="true" />
              <img src={logoOracle} alt="" aria-hidden="true" />
              <img src={logoGoogle} alt="" aria-hidden="true" />
              <img src={logoNvidia} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
        <ReadyToStart />
      </div>
    </ContactStyled>
  )
}