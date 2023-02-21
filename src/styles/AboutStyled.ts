import styled from "styled-components";

export const AboutStyled = styled.main`
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;

.container {
  max-width: 1440px;
  width: 100%;
  position: relative;
  z-index: 2;

  .content {
    padding: 40px 165px 40px 165px;

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
    
    .text {
      padding-left: 95px;
      display: flex;
      flex-direction: column;
      gap: 80px;
  
      h1 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 56px;
        line-height: 56px;
        letter-spacing: -0.430769px;
        color: #36536B;
        max-width: 620px;
      }
      
  
      .vision,
      .business,
      .culture,
      .people {
        display: flex;
        gap: 30px;

        h2 {
          width: 255px; 
          font-family: 'DM Serif Display';
          font-weight: 400;
          font-size: 32px;
          line-height: 40px;
          letter-spacing: -0.246154px;
          color: #36536B;
        }
        p {
          max-width: 635px;
          font-family: 'Public Sans';
          font-weight: 400;
          font-size: 15px;
          line-height: 28px;
          color: #6C8294;
  
        }
      }
    }
  }
}

.image { 
  width: 100%;
  margin-top: 100px;
  display: flex;
  justify-content: center;
  background: #1B262F;
  
  .container-background {
    position: relative;
    max-width: 1440px;
    z-index: 2;
    z-index: 900 !Important;

    .background {
      z-index: -1;
      background: #36536B;
      mix-blend-mode: normal;
      opacity: 0.15;
      width: 780px;
      height: 780px;
      border-radius: 50%;
      position: absolute;
      left: -450px;
      top: -80px;
    }
  }

  img {
    max-width: 1440px;
    width: 100%;
    z-index: 1001;
  }
}

.stats {
  display: grid;
  grid-template-columns: repeat(3, 33%);
  margin-top: 74px;
  gap: 30px;

  .col {
    border-top: 1px solid #36536b5b;
      padding: 20px 10px;
      border-bottom: 1px solid #36536b5b;
    h4 {
      font-family: 'DM Serif Display';
      font-weight: 400;
      font-size: 56px;
      line-height: 72px;
      letter-spacing: -0.430769px;
      color: #BA4270;
    }
  }
}

.section-form {
  width: 100%;
  .container-form {
    padding: 40px !Important;
    width: 100%;
  }
}

.culture {
  margin-top: 73px;
}

.people {
  margin-bottom: 120px;
}

`