import styled from "styled-components"

export const FooterStyled = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 30px 165px 30px 165px;
background: #1B262F;
overflow: hidden;

.container-footer {
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;

  .background {
    width: 780px;
    height: 780px;
    mix-blend-mode: normal;
    opacity: 0.15;
    border-radius: 50%;
    background: #36536B;
    position: absolute;
    right: -500px;
    top: -100px;
  }

  ul {
    list-style: none;
  }

  .logo-links {
    display: flex;
    align-items: center;
    ul {
      display: flex;
      gap: 40px;

      a {
        text-decoration: none;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        color: #FBFCFE;
        mix-blend-mode: normal;
        opacity: 0.7;
        &:hover {
          opacity: 1;
        }
      }
    }
  }

  .social-icons {
    ul {
      display: flex;
      gap: 20px;
    }
  }
}
`