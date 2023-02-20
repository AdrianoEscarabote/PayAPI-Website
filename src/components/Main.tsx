import { MainStyled } from "../styles/MainStyled";
import iconPhone from "../assets/home/desktop/illustration-phone-mockup.svg";
import logoTesla from "../assets/shared/desktop/tesla.svg";
import logoMicrosoft from "../assets/shared/desktop/microsoft.svg";
import logoHp from "../assets/shared/desktop/hewlett-packard.svg";
import logoOracle from "../assets/shared/desktop/oracle.svg";
import logoGoogle from "../assets/shared/desktop/google.svg";
import logoNvidia from "../assets/shared/desktop/nvidia.svg";
import imgImplement from "../assets/home/desktop/illustration-easy-to-implement.svg";
import iconPhoneUi from "../assets/home/desktop/illustration-simple-ui.svg";

export const Main = () => {
  return (
    <MainStyled>
      <div className="container">
        <div className="content">
          <div className="background-circle"></div>
          <section className="grid-items">
            <div className="col-1">
              <h1>
              Start building with our APIs for absolutely free.
              </h1>
              <form noValidate>
                <label htmlFor="email">
                  <input type="email" name="email" id="email" placeholder="Enter email address"/>
                </label>
                <button type="submit">Schedule a Demo</button>
              </form>
              <p>Have any questions? <a href="/">Contact Us</a></p>
            </div>
            <div className="col-2">
              <img src={iconPhone} alt="" aria-hidden="true" />
            </div>
          </section>
        </div>
      </div>
      <div className="container-work">
        <section className="work-with">
          <div className="background"></div>
          <div className="work-col1">
            <h2>Who we work with</h2>
            <p>Today, millions of people around the world have successfully connected their accounts to apps they love using our API. We provide developers with the tools they need to create easy and accessible experiences for their users.</p>
            <a href="/">About Us</a>
          </div>
          <div className="work-col2">
            <img src={logoTesla} alt="" aria-hidden="true" />
            <img src={logoMicrosoft} alt="" aria-hidden="true" />
            <img src={logoHp} alt="" aria-hidden="true"/>
            <img src={logoOracle} alt="" aria-hidden="true" />
            <img src={logoGoogle} alt="" aria-hidden="true" />
            <img src={logoNvidia} alt="" aria-hidden="true" />
          </div>
        </section>
      </div>
      <div className="container-infos">
        <div className="content-info">
          <section className="infos">
            <div className="easy-implement">
              <img src={imgImplement} alt="" aria-hidden="true" />
              <div className="text">
                <h3>Easy to implement</h3>
                <p>Our API comes with just a few lines of code. You’ll be up and running in no time. We built our documentation page to integrate payments functionality with ease.</p>
              </div>
            </div>
          </section>
          <section className="simpleUIUX">
            <div className="background"></div>
            <div className="text">
              <h3>Simple UI & UX</h3>
              <p>Our pre-built form is easy to integrate in your app or website’s checkout flow and designed to optimize conversion.</p>
            </div>
            <div className="phoneSimpleUi">
              <img src={iconPhoneUi} alt="" aria-hidden="true" />
            </div>
          </section>
        </div>
      </div>
    </MainStyled>
  )
}