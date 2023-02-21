import styled from "styled-components";

export const MainStyled = styled.main`
width: 100%;

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  
  .background-circle {
    width: 780px;
    position: absolute !Important;
    height: 780px;
    right: -160px;
    top: -240px;
    border-radius: 50%;
    background: #36536B;
    mix-blend-mode: normal;
    opacity: 0.15;
  } 

  .content {
    padding: 0px 165px 40px 165px; 
    max-width: 1440px;
    width: 100%;
    position: relative;

  
    .grid-items {
      display: grid;
      grid-template-columns: 50% 50%;
  
      .col-1 {
        display: flex;
        align-items: flex-start;
        justify-content: center;
        flex-direction: column;
  
        h1 {
          max-width: 546px;
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 72px;
          line-height: 72px;
          letter-spacing: -0.553846px;
          color: #36536B;
        }
  
        form {
          margin-top: 59px;
          display: flex;
          background-color: blue;
          width: 445px;
          height: 48px;
          background: #FBFCFE;
          box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
          border-radius: 24px;
          display: flex;
          align-items: center;
          position: relative;
  
          label {
            width: 100%;
            input {
              width: 100%;
              max-width: 425px;
              margin-left: 10px;
              border: none;
              font-weight: 700;
              font-size: 15px;
              line-height: 18px;
              color: #36536B;
              opacity: 1;
  
              &::-webkit-input-placeholder,
              &:-moz-placeholder,
              &:-moz-placeholder { 
                mix-blend-mode: normal;
                opacity: 0.5;
              }
            }
          }
          button {
            position: absolute;
            right: 0px;
            width: 173px;
            height: 48px;
            background: #BA4270;
            box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
            border-radius: 24px;
            display: grid;
            place-content: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 15px;
            line-height: 18px;
            letter-spacing: -0.115385px;
            color: #FBFCFE;
  
            &:hover {
              transition: 0.4s ease-in-out;
              background: #DA6D97;
            }
          }
        }
        p {
          margin-top: 16px;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          color: #6C8294;
          a {
            font-weight: 700;
            text-decoration: none;
            color: #6C8294;
          }
        }
      }
  
      .col-2 {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          z-index: 300;
        }
      }
    }
  }
}

.container-work {
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center; 
  background: #1B262F;
  overflow: hidden;
  
  .work-with {
    position: relative;
    padding: 100px 165px 100px 165px;
    max-width: 1440px;
    display: grid;
    grid-template-columns: 50% 50%; 
    gap: 120px; 

    .background {
      z-index: 1;
      width: 780px;
      height: 780px;
      border-radius: 50%;
      mix-blend-mode: normal;
      opacity: 0.15;
      background: #36536B;
      position: absolute;
      left: -250px;
      top: -380px;
    }

    .work-col1 {
      z-index: 2;
      display: flex; 
      flex-direction: column;
      gap: 24px;

      h2 {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -0.369231px;
        color: #FBFCFE;
      }
      p {
        font-family: 'Public Sans';
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
        color: #FBFCFE;
        mix-blend-mode: normal;
        opacity: 0.7;
      }

      a {
        width: 129px;
        height: 48px;
        display: grid;
        place-content: center;
        background: transparent;
        border: 1px solid #FBFCFE;
        border-radius: 24px;
        font-weight: 700;
        font-size: 15px;
        line-height: 18px;
        letter-spacing: -0.115385px;
        text-decoration: none;
        color: #FBFCFE;
        &:hover {
          background: #FFFFFF; 
          color: #1B262F;
        }
      }
    }

    .work-col2 {
      display: flex;
      flex-wrap: wrap;
      align-items: center; 
      gap: 50px;
      max-width: 536px;
      height: auto;

      img { 
        width: 131px; 
        height: auto;
        filter: brightness(1000%);
      }
    }
  }
}

.container-infos {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px 165px 40px 115px;
  
  .content-info {
    width: 100%;
    max-width: 1440px;
    display: flex; 
    align-items: center;
    flex-direction: column;
    justify-content: center; 
    
    .infos {
      width: 100%;
      .easy-implement {
        position: relative;
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        img {
          position: relative;
          left: -30px;
        } 
      }
    }

    .text {
      max-width: 445px;
      display: flex;
      flex-direction: column;
      gap: 20px;

      h3 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 48px;
        line-height: 56px;
        letter-spacing: -0.369231px;
        color: #36536B;
      }
      p {
        font-family: 'Public Sans';
        font-weight: 400;
        font-size: 15px;
        line-height: 28px;
        color: #36536B;
        mix-blend-mode: normal;
        opacity: 0.7;
      }
    }

    .simpleUIUX {
      display: flex;
      width: 100%;
      justify-content: space-between;
      align-items: center;
      position: relative;
      z-index: 1;

      .background {
        z-index: -1;
        width: 780px;
        height: 780px;
        border-radius: 50%;
        background: #36536B;
        mix-blend-mode: normal;
        opacity: 0.15;
        position: absolute;
        right: -320px;
      }
    }

    .resources {
      width: 100%;
      padding: 50px 0px;
      display: flex;
      justify-content: space-between;

      div {
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        max-width: 350px;
      
        h5 {
          font-weight: 700;
          font-size: 18px;
          line-height: 25px;
          text-align: center;
          letter-spacing: -0.138462px;
          font-family: 'Public Sans';
          color: #36536B;
        }

        p {
          font-weight: 400;
          font-size: 15px;
          line-height: 25px;
          text-align: center;
          letter-spacing: -0.115385px;
          color: #36536B;
          mix-blend-mode: normal;
          opacity: 0.7;
        }
      }
    }
  }
}`