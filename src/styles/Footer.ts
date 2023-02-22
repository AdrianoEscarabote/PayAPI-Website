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
    gap: 64px;
    ul {
      display: flex;
      gap: 40px;
      padding: 0px;

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

@media (max-width: 1048px) {
  padding: 40px 65px 40px 65px !Important;
}

// tablet
@media (max-width: 768px) {
  padding: 40px 30px !Important;

  .logo-links {
    gap: 24px !Important;

    ul {
      gap: 30px !Important;
    }
  }
}

// mobile

@media (max-width: 580px) {
  .container-footer {
    flex-direction: column;
    align-items: center;
    max-width: 135px;

    .background {
      top: 137px;
      left: -310px;
    }

    .logo-links {
      flex-direction: column;

      ul {
        flex-direction: column;
        text-align: center;
      }
    }
    .social-icons {
      ul {
        padding: 0px;
      }
    }
  }
}
`