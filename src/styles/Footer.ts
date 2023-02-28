import styled from "styled-components"

export const FooterStyled = styled.footer`
display: flex;
justify-content: center;
align-items: center;
padding: 1.875rem 10.3125rem 0.875rem 10.3125rem;
background: #1B262F;
overflow: hidden;

.container-footer {
  max-width: 90rem;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: relative;
  bottom: 0.4375rem;
  z-index: 1;

  .background {
    width: 48.75rem;
    height: 48.75rem;
    mix-blend-mode: normal;
    opacity: 0.15;
    border-radius: 50%;
    background: #36536B;
    position: absolute;
    right: -31.25rem;
    top: -6.25rem;
    z-index: -1;
  }

  a {
    &:focus {
      opacity: 1;
      outline: 0.1625rem dotted #fff;
    }
  } 

  ul {
    list-style: none;
  }

  .logo-links {
    display: flex;
    align-items: center;
    gap: 4rem;

    img {
      filter: brightness(1000%);
    }

    ul {
      display: flex;
      gap: 2.5rem;
      padding: 0rem;

      a {
        text-decoration: none;
        font-weight: 700;
        font-size: 0.9375rem;
        line-height: 1.125rem;
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
      gap: 1.25rem;

      a {
        cursor: pointer;
        &:hover,
        &:focus {
          img {
            outline: 0.1625rem dotted #fff !Important;
            filter: invert(75%) sepia(28%) saturate(4434%) hue-rotate(295deg) brightness(89%) contrast(92%);
          }
        }
      }
    }
  }
}

@media (max-width: 71.75rem) {
  padding: 2.5rem 4.0625rem 2.5rem 4.0625rem !Important;
}

// tablet
@media (max-width: 48rem) {
  padding: 2.5rem 1.875rem !Important;

  .logo-links {
    gap: 1.5rem !Important;

    ul {
      gap: 1.875rem !Important;
    }
  }
}

// mobile
@media (max-width: 36.25rem) {
  padding: 2.5rem 1.5625rem !Important;

  .container-footer {
    flex-direction: column;
    align-items: center;
    max-width: 8.4375rem;

    .background {
      top: 8.5625rem;
      left: -19.375rem;
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
        padding: 0rem;
      }
    }
  }
}`