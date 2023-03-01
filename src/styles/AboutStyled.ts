import styled from "styled-components";

export const AboutStyled = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
.container {
  max-width: 90rem;
  width: 100%;
  position: relative;
  z-index: 2;
  .content {
    padding: 2.5rem 10.3125rem 2.5rem 10.3125rem;
    .background {
      z-index: -100;
      background: #36536B;
      mix-blend-mode: normal;
      opacity: 0.15;
      width: 48.75rem;
      height: 48.75rem;
      border-radius: 50%;
      position: absolute;
      top: -48.25rem;
      right: -27.3125rem;
    } 
    .text {
      padding-left: 5.9375rem;
      display: flex;
      flex-direction: column;
      gap: 5rem;
      h1 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 3.5rem;
        line-height: 3.5rem;
        letter-spacing: -0.0269rem;
        color: #36536B;
        max-width: 38.75rem;
      }
      .vision,
      .business,
      .culture,
      .people {
        display: flex;
        gap: 1.875rem;
        h2 {
          width: 15.9375rem; 
          font-family: 'DM Serif Display';
          font-weight: 400;
          font-size: 2rem;
          line-height: 2.5rem;
          letter-spacing: -0.0154rem;
          color: #36536B;
        }
        p {
          max-width: 39.6875rem;
          font-family: 'Public Sans';
          font-weight: 400;
          font-size: 0.9375rem;
          line-height: 1.75rem;
          color: #6C8294;
        }
      }
    }
  }
}
.image { 
  width: 100%;
  margin-top: 6.25rem;
  display: flex;
  justify-content: center;
  background: #1B262F;
  z-index: 1;
  .container-background {
    position: relative;
    max-width: 90rem;
    z-index: -2;
    .background {
      z-index: -3 !Important;
      background: #36536B;
      mix-blend-mode: normal;
      opacity: 0.15;
      width: 48.75rem;
      height: 48.75rem;
      border-radius: 50%;
      position: absolute;
      left: -28.125rem;
      top: -8.75rem;
    }
  }
  img {
    max-width: 90rem;
    width: 100%;
    z-index: 1001;
  }
}
.stats {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  margin-top: 4.625rem;
  gap: 1.875rem;
  .col {
    border-top: 0.0625rem solid #36536b5b;
      padding: 1.25rem 0.625rem;
      border-bottom: 0.0625rem solid #36536b5b;
    h4 {
      font-family: 'DM Serif Display';
      font-weight: 400;
      font-size: 3.5rem;
      line-height: 4.5rem;
      letter-spacing: -0.0269rem;
      color: #BA4270;
    }
  }
}
.section-form {
  width: 100%;
  .container-form {
    width: 100%;
  }
}
.culture {
  margin-top: 4.5625rem;
}
.people {
  margin-bottom: 7.5rem;
}
@media (max-width: 71.75rem) {
  .content {
    padding: 2.5rem 4.0625rem 2.5rem 4.0625rem !Important;
  }
  .text {
    padding: 0rem !Important;
  }
}
// tablet
@media (max-width: 48rem) {
  .section-form {
    padding: 0rem 0rem 2.5rem 0rem;
  } 
  h1 {
    font-size: 3rem !Important;
    text-align: center;
    margin: 0 auto;
  }
  .container-background {
    display: none;
  }
  .stats {
    width: 100%;
    display: flex !Important;
    align-items: center;
    .col {
      width: 30% !Important;
      padding-right: 0rem !Important;
    }
  }
  .content {
    padding: 2.5rem 1.875rem !Important;
  }
}
// mobile
@media (max-width: 36.25rem) {
  text-align: center;
  .stats {
    flex-direction: column;
    border-top: 0.0625rem solid #36536b5b;
    padding: 1.25rem 0.625rem;
    border-bottom: 0.0625rem solid #36536b5b;
    .col {
      width: 100% !Important;
      border: none;
    }
  }
  .content {
    padding: 2.5rem 1.5625rem 0rem 1.5625rem !Important;
  }

  h1 {
    font-size: 2rem !Important;
    line-height: 2.25rem !Important;
  }
  h2 {
    font-size: 1.5rem !Important;
    line-height: 2rem !Important;
  }
  .vision,
  .business,
  .culture,
  .people {
    width: 100%;
    flex-direction: column;
    align-items: center;
  }
}`