import { AboutStyled } from "../styles/AboutStyled";
import imageTeam from "../assets/about/desktop/image-team-members.jpg";
import { ReadyToStart } from "./shared/ReadyToStart";

export const About = () => {
  return (
    <AboutStyled>
      <div className="container">
        <div className="content">
          <div className="text">
            <div className="background"></div>
            <h1>We empower innovators by delivering access to the financial system</h1>
            <section className="vision">
              <h2>Our Vision</h2>
              <p>Our main goal is to build beautiful consumer experiences along with developer-friendly 
              infrastructure. The result is an intelligent tool that gives everyone the ability to create 
              amazing products that solve big problems. We are deeply focused on democratizing financial 
              services through technology.</p>
            </section>
            <section className="business">
              <h2>Our Business</h2>
              <p>At the core of our platform is the technical infrastructure APIs that connect consumers. 
              Our innovative product provides key insights for businesses and individuals, as well as 
              robust reporting for traditional financial institutions and developers.</p>
            </section>
          </div>
        </div>

      </div>
      <div className="image">
        <div className="container-background">
          <div className="background"></div>
        </div>
        <img src={imageTeam} alt="" />
      </div>
      <div className="container">
        <div className="content">
          <div className="stats">
            <div className="col">
              <p>Team Members</p>
              <h4>300+</h4>
            </div>
            <div className="col">
              <p>
                Offices in the US
              </p>
              <h4>3</h4>
            </div>
            <div className="col">
              <p>Transactions analyzed</p>
              <h4>10M+</h4>
            </div>
          </div>
          <div className="text">
            <section className="culture">
              <h2>The Culture</h2>
              <p>We strongly believe there's always an opportunity to learn from each other outside of 
              day-to-day work, whether it's company-wide offsites, internal hackathons, or co-worker meetups. 
              We always value cross-team collaboration and diversity of thought, no matter the job title.</p>
            </section>
            <section className="people">
              <h2>The People</h2>
              <p>We're all passionate about building a more efficient and inclusive financial infrastructure 
              together. At PayAPI, we have diverse backgrounds and skills.</p>
            </section>
          </div>
        </div>
        <ReadyToStart />
      </div>
    </AboutStyled>
  )
}