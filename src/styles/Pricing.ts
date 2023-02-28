import styled from "styled-components";

export const PricingStyled = styled.main`
display: flex;
justify-content: center;
padding: 2.5rem 10.3125rem 2.5rem 10.3125rem;

.container {
  max-width: 90rem;
  width: 100%;
  position: relative;
  z-index: 2;

  h1 {
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 3.5rem;
    letter-spacing: -0.0269rem;
    color: #36536B;
  }

  .background {
    z-index: -100;
    background: #36536B;
    mix-blend-mode: normal;
    opacity: 0.15;
    width: 48.75rem;
    height: 48.75rem;
    border-radius: 50%;
    position: absolute;
    top: -47.5rem;
    right: -18.75rem;
  }

  .grid-items {
    display: grid; 
    grid-template-columns: repeat(3, 33%);
    margin-top: 4.5rem;
    margin-bottom: 3.75rem;
    gap: 1.875rem;
  }

  .col1,
  .col2,
  .col3 {
    z-index: 200;
    width: 100%;
    height: auto;
    .text {
      display: flex;
      flex-direction: column;
      gap: 0.9375rem;
      
      h2 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 2rem;
        line-height: 2.5rem;
        letter-spacing: -0.0154rem;
        color: #BA4270;
      }

      p {
        font-family: 'Public Sans';
        font-weight: 400;
        font-size: 0.9375rem;
        line-height: 1.75rem;
        color: #6C8294;
      }

      h3 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 3.5rem;
        line-height: 4.5rem;
        letter-spacing: -0.0269rem;
        color: #36536B;
      }
    }

    ul {
      border-top: 0.0625rem solid #36536b5b;
      padding: 1.25rem 0.625rem;
      border-bottom: 0.0625rem solid #36536b5b;
      list-style: none;
      li {
        display: flex;
        gap: 0.9375rem;
        justify-content: flex-start;
        align-items: center;

        p {
          font-family: 'Public Sans';
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.75rem;
          color: #36536B;
        }
      }
      .disabled {
        p {
          padding-left: 1.875rem;
          font-family: 'Public Sans';
          font-weight: 400;
          font-size: 1rem;
          line-height: 1.75rem;
          color: rgba(55, 84, 109, 0.514);
        }
      }
    }

    a {
      margin-top: 1.5rem;
      display: grid;
      place-content: center;
      width: 10.5rem;
      border: 0.0625rem solid #36536B;
      border-radius: 1.5rem;
      height: 3rem;
      text-decoration: none;
      font-family: 'Public Sans';
      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 1.125rem;
      letter-spacing: -0.0072rem;
      color: #36536B;
      &:focus {
        border: 0.1625rem solid #FFFFFF !Important;
        background: #1B262F; 
        color: #FFFFFF;
      }
      &:hover {
        background: #1B262F; 
        color: #FFFFFF;
      }
    }
  }
}

@media (max-width: 71.75rem) {
  padding: 2.5rem 4.0625rem 2.5rem 4.0625rem;
}

// tablet
@media (max-width: 48rem) {
  padding: 2.5rem 1.875rem 2.5rem 1.875rem;

  .background {
    top: -50rem !Important;
    right: -32.5rem !Important;
  }

  h1 {
    margin: 0 auto;
    text-align: center;
  }

  .grid-items {
    display: flex !Important;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    text-aling: center;

    .text {
      text-align: center;
    }

    ul {
      display: flex;
      align-items: center;
      flex-direction: column;
      p {
        padding: 0rem !Important;
      }
    }

    a {
      margin: 0 auto;
    }

    h2 {
      font-size: 1.5rem !Important;
      line-height: 2.5rem !Important;
    }
    h3 {
      font-size: 3rem !Important;
    }
  }
}

.background-mobile {
  display: none;
}
`