import styled from "styled-components";

export const PricingStyled = styled.main`
display: flex;
justify-content: center;
padding: 40px 165px 40px 165px;

.container {
  max-width: 1440px;
  width: 100%;
  position: relative;
  z-index: 2;

  h1 {
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.430769px;
    color: #36536B;
  }

  .background {
    z-index: -100;
    background: #36536B;
    mix-blend-mode: normal;
    opacity: 0.15;
    width: 780px;
    height: 780px;
    border-radius: 50%;
    position: absolute;
    top: -760px;
    right: -300px;
  }

  .grid-items {
    display: grid; 
    grid-template-columns: repeat(3, 33%);
    margin-top: 72px;
    margin-bottom: 60px;
    gap: 30px;
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
      gap: 15px;
      
      h2 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 32px;
        line-height: 40px;
        letter-spacing: -0.246154px;
        color: #BA4270;
      }

      p {
        font-family: 'Public Sans';
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
        color: #6C8294;
      }

      h3 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 56px;
        line-height: 72px;
        letter-spacing: -0.430769px;
        color: #36536B;
      }
    }

    ul {
      border-top: 1px solid #36536b5b;
      padding: 20px 10px;
      border-bottom: 1px solid #36536b5b;
      list-style: none;
      li {
        display: flex;
        gap: 15px;
        justify-content: flex-start;
        align-items: center;

        p {
          font-family: 'Public Sans';
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: #36536B;
        }
      }
      .disabled {
        p {
          padding-left: 30px;
          font-family: 'Public Sans';
          font-weight: 400;
          font-size: 16px;
          line-height: 28px;
          color: rgba(55, 84, 109, 0.514);
        }
      }
    }

    a {
      margin-top: 24px;
      display: grid;
      place-content: center;
      width: 168px;
      border: 1px solid #36536B;
      border-radius: 24px;
      height: 48px;
      text-decoration: none;
      font-family: 'Public Sans';
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      letter-spacing: -0.115385px;
      color: #36536B;

      &:hover,
      &:focus {
        color: #FBFCFE;
        background: #36536B;
      }
    }
  }
}

@media (max-width: 1148px) {
  padding: 40px 65px 40px 65px;
}

// tablet
@media (max-width: 768px) {
  padding: 40px 30px 40px 30px;

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
        padding: 0px !Important;
      }
    }

    a {
      margin: 0 auto;
    }

    h2 {
      font-size: 24px !Important;
      line-height: 40px !Important;
    }
    h3 {
      font-size: 48px !Important;
    }
  }
}

// mobile
@media (max-width: 580px) {

}
`