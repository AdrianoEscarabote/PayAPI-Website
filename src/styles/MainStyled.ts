import styled from "styled-components";

export const MainStyled = styled.main`
width: 100%;

.container {
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 0rem 10.3125rem 2.5rem 10.3125rem; 
  
  .background-circle {
    width: 48.75rem;
    position: absolute !Important;
    height: 48.75rem;
    right: -19rem;
    top: -18.875rem;
    border-radius: 50%;
    background: #36536B;
    mix-blend-mode: normal;
    opacity: 0.15;
  } 

  .content {
    max-width: 90rem;
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
        margin-bottom: 5.625rem;
        gap: 1.25rem;
  
        h1 {
          max-width: 34.125rem;
          font-family: 'DM Serif Display', serif;
          font-weight: 400;
          font-size: 4.5rem;
          line-height: 4.5rem;
          letter-spacing: -0.0346rem;
          color: #36536B;
          padding-bottom: -0.625rem;
        }
  
        form {
          margin-top: 1.9375rem;
          display: flex;
          background-color: blue;
          width: 27.8125rem;
          height: 3rem;
          background: #FBFCFE;
          box-shadow: 0.625rem 0.625rem 1.5625rem -0.625rem rgba(54, 83, 107, 0.25);
          border-radius: 1.5rem;
          display: flex;
          align-items: center;
          position: relative;
          
          label {
            width: 100%;
            padding-left: 1.4375rem;
            input {
              width: 57%;
              max-width: 26.5625rem;
              border: none;
              font-weight: 700;
              font-size: 0.9375rem;
              line-height: 1.125rem;
              color: #36536B;
              opacity: 1;
              &:focus {
                outline: 0.1625rem dotted #000;
              }
  
              &::placeholder {
                mix-blend-mode: normal;
                opacity: 0.5;
              }
              
              &:-ms-input-placeholder {
                mix-blend-mode: normal;
                opacity: 0.5;
              }
              
              &::-ms-input-placeholder {
                mix-blend-mode: normal;
                opacity: 0.5;
              }
            }
          }
          button {
            position: absolute;
            right: 0rem;
            width: 10.8125rem;
            height: 3rem;
            background: #BA4270;
            box-shadow: 0.625rem 0.625rem 1.5625rem -0.625rem rgba(54, 83, 107, 0.25);
            border-radius: 1.5rem;
            display: grid;
            place-content: center;
            text-decoration: none;
            font-weight: 700;
            font-size: 0.9375rem;
            line-height: 1.125rem;
            letter-spacing: -0.0072rem;
            color: #FBFCFE;
  
            &:hover,
            &:focus {
              transition: 0.4s ease-in-out;
              background: #DA6D97;
            }
          }
        }
        p {
          padding-bottom: 0.625rem;
          padding-left: 1.5625rem;
          font-weight: 400;
          font-size: 0.9375rem;
          line-height: 1.125rem;
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
          top: -1.5rem;
          right: -4.75rem;
        }
      }
    }
  }
}
.container-work {
  position: relative;
  top: -5.875rem;
  width: 100%;
  height: 29.5rem;
  display: flex;
  align-items: center;
  justify-content: center; 
  background: #1B262F;
  overflow: hidden;
  padding: 6.25rem 10.3125rem 6.25rem 10.3125rem;
  .work-with {
    position: relative;
    max-width: 90rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    .container-background {
      position: absolute;
    }
    .background {
      z-index: 1;
      width: 48.75rem;
      height: 48.75rem;
      border-radius: 50%;
      mix-blend-mode: normal;
      opacity: 0.15;
      background: #36536B;
      position: absolute;
      left: -25rem;
      top: -37.125rem;
    }
    .work-col1 {
      z-index: 2;
      display: flex; 
      flex-direction: column;
      gap: 1.6875rem;
      max-width: 27.8125rem;
      h2 {
        font-family: 'DM Serif Display', serif;
        font-weight: 400;
        font-size: 3rem;
        line-height: 3.5rem;
        letter-spacing: -0.0231rem;
        color: #FBFCFE;
      }
      p {
        font-family: 'Public Sans';
        font-weight: 400;
        font-size: 0.9375rem;
        line-height: 1.75rem;
        color: #FBFCFE;
        mix-blend-mode: normal;
        opacity: 0.7;
      }
      a {
        width: 8.0625rem;
        height: 3rem;
        display: grid;
        place-content: center;
        background: transparent;
        border: 0.0625rem solid #FBFCFE;
        border-radius: 1.5rem;
        font-weight: 700;
        font-size: 0.9375rem;
        line-height: 1.125rem;
        letter-spacing: -0.0072rem;
        text-decoration: none;
        color: #FBFCFE;
        &:focus {
          outline: 0.1625rem dotted #fff;
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
      max-width: 33.5rem;
    }

    .images {
      display: flex;
      align-items: center; 
      justify-content: flex-start;
      flex-wrap: wrap;
      gap: 3.125rem; 
      max-width: 33.5rem;
      height: auto;

      img { 
        width: 8.1875rem; 
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
  padding: 2.5rem 10.3125rem 3rem 7.1875rem;
  
  .content-info {
    width: 100%;
    max-width: 90rem;
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
          top: -4.0625rem;
          left: -5.9375rem;
        }

        img {
          position: relative;
          left: -0.3125rem;
          top: -2.4375rem;
        } 
      }
    }

    .text {
      max-width: 27.8125rem;
      display: flex;
      flex-direction: column;
      gap: 1.25rem;

      h3 {
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 3rem;
        line-height: 3.5rem;
        letter-spacing: -0.0231rem;
        color: #36536B;
      }
      p {
        font-family: 'Public Sans';
        font-weight: 400;
        font-size: 0.9375rem;
        line-height: 1.75rem;
        color: #1e2e3b;
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
        left: 3.125rem;
        top: -4.375rem;
      }

      .background {
        z-index: -1;
        width: 48.75rem;
        height: 48.75rem;
        border-radius: 50%;
        background: #36536B;
        mix-blend-mode: normal;
        opacity: 0.15;
        position: absolute;
        right: -34.375rem;
        top: -8.4375rem;
      }

      img {
        position: relative;
        top: -2.875rem;
        right: -5.9375rem
      }
    }

    .resources {
      width: 100%;
      padding-bottom: 3.125rem;
      display: flex;
      justify-content: space-between;
      padding-left: 2.8125rem;

      div {
        text-align: center;
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
        max-width: 21.875rem;
        gap: 2.1875rem;
      
        h4 {
          font-weight: 700;
          font-size: 1.125rem;
          line-height: 1.5625rem;
          text-align: center;
          letter-spacing: -0.0087rem;
          font-family: 'Public Sans';
          color: #36536B;
        }

        p {
          font-weight: 400;
          font-size: 0.9375rem;
          line-height: 1.5625rem;
          text-align: center;
          letter-spacing: -0.0072rem;
          color: #1e2e3b;
          mix-blend-mode: normal;
          opacity: 0.7;
        }
      }
    }
    .section-form {
      position: relative;
      bottom: 0.5rem;
      
      h4 {
        padding-left: 3.125rem;
      }
    }
  }
}

@media (max-width: 71.75rem) {
  .container-work {
    padding: 0rem !Important;
  } 
  .work-with {
    gap: 1.25rem;
  }
  .container-infos {
    padding: 2.5rem 1.875rem 2.5rem 1.875rem;
  }
  .container {
    padding: 0rem 1.875rem 2.5rem 1.875rem;
    .content {
      .background-circle {
        right: -17.5rem;
      }

      img {
        position: relative;
        right: -7.5rem;
      }
    }
  }
  .resources {
    gap: 1.875rem;
  }
  .work-with {
    padding: 6.25rem 3.4375rem 6.25rem 3.4375rem !important;
  }
  .simpleUIUX {
    img {
      right: -4.6875rem !Important;
    }
  }  
}

// tablet
@media (max-width: 57.75rem) {
  .container {
    .content {
      max-width: 49rem !Important;

      .container-background {
        display: flex;
        align-items: center;
        top: -25rem;
        left: -2.5rem;
        width: 111%;
        height: 100%;
        position: absolute;
      }
      
      .background-circle {
        width: 100%;
        height: 50rem;
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
          form {
            text-align: left !Important;
          }
        }

        .col-2 {
          img {
            z-index: 2;
          }
        }

        h1 {
          font-size: 3rem !Important;
          line-height: 3.5rem !Important;
        }
        img {
          width: 16.1875rem;
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
    padding: 0rem !Important;
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
      left: 3.125rem;
      height: 100%;
      display: flex;
      align-items: center;
      .background {
        position: relative !Important; 
        width: 100%; 
        height: 80%;
        top: -20.5625rem !Important;
        right: 3.4375rem !Important;
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
    left: 1.875rem !Important;
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
      padding-bottom: 3.75rem;
    }

    .phoneSimpleUi {
      img {
        position: initial !Important;
        padding-left: 2.5rem;
      }
    }

    .background {
      display: none;
    }
  }
}

// mobile
@media (max-width: 36.25rem) {
  .container {
    padding: 0rem 1.5625rem 2.5rem 1.5625rem;
    .content {
      max-width: 49rem !Important;

      .container-background {
        left: -62% !Important;

        top: -25rem;
        width: 200%;
        height: 62.5rem !Imortant;

        .background-circle {
          width: 100%;
          height: 57.5rem;
          right: -2.5rem !Important;
          left: unset !Important;
        }
      }

      .grid-items {
        .col-2 {
          img {
            position: relative !Important;
            top: -1.25rem;
            left: 0.5rem !Important;
            width: 11.75rem !Important;
            height: auto !Important;
          }
        }
        h1 {
          font-weight: 400 !Important;
          font-size: 2rem !Important;
          line-height: 2.25rem !Important;
        }
        .col-1 {
          position: relative;
          top: -1.25rem;
          form {
            flex-direction: column !Important; 
            align-items: center !Important;
            width: 100%; 
            max-width: 20.4375rem !Important;
            background: transparent;
            box-shadow: unset;
            gap: 1rem;
            height: auto;
      
            label {
              border-radius: 1.5rem;
              box-shadow: 0.625rem 0.625rem 1.5625rem -0.625rem rgba(54, 83, 107, 0.25);
              background: #fff; 
              width: 100% !Important;
              padding: 0px !Important;
      
              input {
                width: 100%;
                outline: transparent;
                height: 3rem;
                border-radius: 1.5rem;
                padding-left: 1.6875rem;
                margin-left: unset !Important;
              }
            }
      
            button {
              width: 100%;
              max-width: 20.4375rem;
              height: 3rem !Important;
              position: initial !Important;
            }
          }
        }
      }
    }
  }

  .container-work {
    padding: 0rem;
  } 

  .work-with {
    padding: 5rem 1.5625rem 5rem 1.5625rem !important;

    .container-background {
      right: -3.4375rem;

      .background {
        position: relative !Important; 
        width: 100%; 
        height: 25rem;
      }
    }

    .work-col2 {
      img {
        margin: 0 auto;
      }
    }
    
    .work-col1 {
      h2 {
        font-size: 2rem !important;
        line-height: 2.25rem !important;
      }
    }
  }

  .phoneSimpleUi {
    img {
      padding-left: 1.25rem !Important;
    }
  }

  .infos {
    padding-bottom: 1.25rem;
  }

  .easy-implement {
    img {
      /* position: initial !Important; */
      left: 0.625rem !Important;
    }
  }
  
  .container-infos {
    padding: 2.5rem 1.5625rem 2.5rem 1.5625rem;

    h3 {
      font-size: 2.25rem !Important;
      line-height: 2.25rem !Important;
    }

    .resources {
      display: flex !Important;
      flex-direction: column;
      align-items: center;
    }
  }
}`