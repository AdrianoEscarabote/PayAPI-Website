import styled from "styled-components"

export const FooterStyled = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 30px 165px 14px 165px;
background: #1B262F;
overflow: hidden;

.container-footer {
  max-width: 1440px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  bottom: 7px;
  z-index: 1;

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
    z-index: -1;
  }
  a {
    &:focus {
      opacity: 1;
      outline: 2.6px dotted #fff;
    }
  } 

  ul {
    list-style: none;
  }

  .logo-links {
    display: flex;
    align-items: center;
    gap: 64px;

    img {
      filter: brightness(1000%);
    }

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

      a {
        cursor: pointer;
        &:hover {
          filter: invert(75%) sepia(28%) saturate(4434%) hue-rotate(295deg) brightness(89%) contrast(92%);
        }
      }
    }
  }
}

@media (max-width: 1148px) {
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
  padding: 40px 25px !Important;

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