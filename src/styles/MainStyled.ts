import styled from "styled-components";

export const MainStyled = styled.main`
width: 100%;

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0px 165px 40px 165px; 
  
  .background-circle {
    width: 780px;
    position: absolute !Important;
    height: 780px;
    right: -304px;
    top: -302px;
    border-radius: 50%;
    background: #36536B;
    mix-blend-mode: normal;
    opacity: 0.15;
  } 

  .content {
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
        margin-bottom: 90px;
        gap: 20px;
  
        h1 {
          max-width: 546px;
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 72px;
          line-height: 72px;
          letter-spacing: -0.553846px;
          color: #36536B;
          padding-bottom: -10px;
        }
  
        form {
          margin-top: 31px;
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
              &:focus {
                outline: 2.6px dotted #000;
              }
  
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
  
            &:hover,
            &:focus {
              transition: 0.4s ease-in-out;
              background: #DA6D97;
            }
          }
        }
        p {
          padding-bottom: 10px;
          padding-left: 25px;
          font-weight: 400;
          font-size: 15px;
          line-height: 18px;
          color: #6C8294;
          a {
            font-weight: 700;
            text-decoration: none;
            color: #6C8294;
            &:hover,
            &:focus {
              color: #000;
            }
          }
        }
      }
  
      .col-2 {
        display: flex;
        align-items: center;
        justify-content: center;
        img {
          z-index: 300;
          position: relative;
          top: -24px;
          right: -76px;
        }
      }
    }
  }
}
.container-work {
  position: relative;
  top: -94px;
  width: 100%;
  height: 472px;
  display: flex;
  align-items: center;
  justify-content: center; 
  background: #1B262F;
  overflow: hidden;
  padding: 100px 165px 100px 165px;
  .work-with {
    position: relative;
    max-width: 1440px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .container-background {
      position: absolute;
    }
    .background {
      z-index: 1;
      width: 780px;
      height: 780px;
      border-radius: 50%;
      mix-blend-mode: normal;
      opacity: 0.15;
      background: #36536B;
      position: absolute;
      left: -400px;
      top: -594px;
    }
    .work-col1 {
      z-index: 2;
      display: flex; 
      flex-direction: column;
      gap: 27px;
      max-width: 445px;
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
        &:focus {
          outline: 2.6px dotted #fff;
          background: #FFFFFF; 
          color: #1B262F;
        }
        &:hover {
          background: #FFFFFF; 
          color: #1B262F;
        }
      }
    }

    .work-col2 {
      display: flex;
      width: 100%;
      align-items: center;
      justify-content: center;
      max-width: 536px;
    }

    .images {
      display: flex;
      align-items: center; 
      justify-content: flex-start;
      flex-wrap: wrap;
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
  padding: 40px 165px 48px 115px;
  
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

        .text {
          position: relative;
          top: -65px;
          left: -95px;

        }

        img {
          position: relative;
          left: -5px;
          top: -39px;
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

      .text {
        position: relative;
        left: 50px;
        top: -70px;
      }

      .background {
        z-index: -1;
        width: 780px;
        height: 780px;
        border-radius: 50%;
        background: #36536B;
        mix-blend-mode: normal;
        opacity: 0.15;
        position: absolute;
        right: -550px;
        top: -135px;
      }

      img {
        position: relative;
        top: -46px;
        right: -95px
      }
    }

    .resources {
      width: 100%;
      padding-bottom: 50px;
      display: flex;
      justify-content: space-between;
      padding-left: 45px;

      div {
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        max-width: 350px;
        gap: 35px;
      
        h4 {
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
    .section-form {
      position: relative;
      bottom: 8px;
      
      h4 {
        padding-left: 50px;
      }
    }
  }
}

@media (max-width: 1148px) {
  .container-work {
    padding: 0px !Important;
  } 
  .work-with {
    gap: 20px;
  }
  .container-infos {
    padding: 40px 30px 40px 30px;
  }
  .container {
    padding: 0px 30px 40px 30px;
    .content {
      .background-circle {
        right: -280px;
      }

      img {
        position: relative;
        right: -120px;
      }
    }
  }
  .resources {
    gap: 30px;
  }
  .work-with {
    padding: 100px 55px 100px 55px !important;
  }
  .simpleUIUX {
    img {
      right: -75px !Important;
    }
  }  
}


// tablet
@media (max-width: 924px) {
  .container {
    .content {
      max-width: 784px !Important;

      .container-background {
        display: flex;
        align-items: center;
        top: -400px;
        left: -40px;
        width: 111%;
        height: 100%;
        position: absolute;
      }
      
      .background-circle {
        width: 100%;
        height: 800px;
        position: relative !important;
        right: unset !Important;
        left: unset !Important;
      }

      .grid-items {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        text-align: center;

        .col-1 {
          align-items: center !Important;
          text-align: center !Important;
        }

        .col-2 {
          img {
            z-index: 2;
          }
        }

        h1 {
          font-size: 48px !Important;
          line-height: 56px !Important;
        }
        img {
          width: 259px;
          height: auto;
          position: initial !Important;
        }
      }
    }
  }
  .container-work {
    height: auto !Important; 
  }
  .resources,
  h4 {
    padding: 0px !Important;
  }

  .work-with {
    display: flex !Important;
    flex-direction: column-reverse;
    max-width: 100% !Important;
    z-index: 20;

    .container-background {
      position: absolute;
      margin: 0 auto;
      width: 100%;
      left: 50px;
      height: 100%;
      display: flex;
      align-items: center;
      .background {
        position: relative !Important; 
        width: 100%; 
        height: 80%;
        top: -329px !Important;
        right: 55px !Important;
        left: unset !Important;
      }
    }

    .work-col1 {
      text-align: center;

      a {
        margin: 0 auto;
      }
    }

    .work-col2 {
      align-items: center !Important;
      margin: 0 auto;
    }
  }

  .easy-implement {
    display: flex;
    flex-direction: column;
    .text {
      left: unset !Important;
    }
  }
  img {
    left: 30px !Important;
  }

  .text {
    text-align: center;   
    align-items: center;
  }

  .simpleUIUX {
    flex-direction: column-reverse;
    align-items: center !Important;
    .text {
      position: initial !Important;
      padding-bottom: 60px;
    }

    .phoneSimpleUi {
      img {
        position: initial !Important;
        padding-left: 40px;
      }
    }

    .background {
      display: none;
    }
  }
}

// mobile
@media (max-width: 580px) {
  .container {
    padding: 0px 25px 40px 25px;
    .content {
      max-width: 784px !Important;

      .container-background {
        left: -62% !Important;

        top: -400px;
        width: 200%;
        height: 1000px !Imortant;

        .background-circle {
          width: 100%;
          height: 920px;
          right: -40px !Important;
          left: unset !Important;
        }
      }

      .grid-items {
        .col-2 {
          img {
            position: relative !Important;
            top: -20px;
            left: 8px !Important;
            width: 188px !Important;
            height: auto !Important;
          }
        }
        h1 {
          font-weight: 400 !Important;
          font-size: 32px !Important;
          line-height: 36px !Important;
        }
        .col-1 {
          position: relative;
          top: -20px;
          form {
            flex-direction: column !Important; 
            align-items: center !Important;
            width: 100%; 
            max-width: 327px !Important;
            background: transparent;
            box-shadow: unset;
            gap: 16px;
            height: auto;
      
            label {
              border-radius: 24px;
              box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
              background: #fff; 
              width: 100% !Important;
      
              input {
                width: 91.5%;
                outline: transparent;
                height: 48px;
                border-radius: 24px;
                padding-left: 27px;
                margin-left: unset !Important;
              }
            }
      
            button {
              width: 100%;
              max-width: 327px;
              height: 48px !Important;
              position: initial !Important;
            }
          }
        }
      }
    }
  }

  .container-work {
    padding: 0px;
  } 

  .work-with {
    padding: 80px 25px 80px 25px !important;

    .container-background {
      right: -55px;

      .background {
        position: relative !Important; 
        width: 100%; 
        height: 400px;
      }
    }

    .work-col2 {
      img {
        margin: 0 auto;
      }
    }
    
    .work-col1 {
      h2 {
        font-size: 32px !important;
        line-height: 36px !important;
      }
    }
  }

  .phoneSimpleUi {
    img {
      padding-left: 20px !Important;
    }
  }

  .infos {
    padding-bottom: 20px;
  }

  .easy-implement {
    img {
      /* position: initial !Important; */
      left: 10px !Important;
    }
  }
  
  .container-infos {
    padding: 40px 25px 40px 25px;

    h3 {
      font-size: 36px !Important;
      line-height: 36px !Important;
    }

    .resources {
      display: flex !Important;
      flex-direction: column;
      align-items: center;
      
    }
  }
}`