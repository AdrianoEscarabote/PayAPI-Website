import styled from "styled-components";

export const ContactStyled = styled.main`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 40px 165px 40px 165px;

.container {
  width: 100%;
  max-width: 1440px;
  z-index: 1;
  position: relative;

  .background {
    z-index: -100;
    background: #36536B;
    mix-blend-mode: normal;
    opacity: 0.15;
    width: 780px;
    height: 780px;
    border-radius: 50%;
    position: absolute;
    top: -790px;
    right: -527px;
  }

  h1 {
    max-width: 680px;
    font-family: 'DM Serif Display';
    font-weight: 400;
    font-size: 56px;
    line-height: 56px;
    letter-spacing: -0.430769px;
    color: #36536B;
  }

  .grid-items {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 72px;

    .col1 {
      form {
        .error {
          font-family: 'Public Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: -0.0846154px;
          color: #FF0000;
          mix-blend-mode: normal;
          opacity: 0.5;
        }

        input[type="text"].error_input,
        input[type="email"].error_input,
        textarea.error_input {
          border-bottom: 1px solid #FF0000 !important;
          color: #FF0000 !important;
          mix-blend-mode: normal;
          opacity: 0.5;

          &::placeholder {
            color: #FF0000 !important;
          }
          
          &:-ms-input-placeholder {
            color: #FF0000 !important;
          }
          
          &::-ms-input-placeholder {
            color: #FF0000 !important;
          }
        }

        fieldset {
          border: unset;
          display: flex;
          flex-direction: column;
          gap: 24px;

          input,
          textarea {
            &:focus {
              outline: 2.6px dotted #000 !Important;
            }
          }

          input[type="text"],
          input[type="email"],
          textarea {
            border: unset;
            border-bottom: 1px solid #36536b1e;
            background: transparent;
            height: 42px;
            width: 100%;
            max-width: 445px;
            font-family: 'Public Sans';
            font-weight: 400;
            font-size: 15px;
            line-height: 25px;
            letter-spacing: -0.115385px;
            color: #36536B;

            &::placeholder {
              color: #92A3B1;
            }
            
            &:-ms-input-placeholder {
              color: #92A3B1;
            }
            
            &::-ms-input-placeholder {
              color: #92A3B1;
            }
          }

          textarea {
            height: 89px;
            resize: none;
          }
        }

        .disabled {
          pointer-events: none;
          opacity: 0.5;
        }

        button {
          margin-top: 24px;
          width: 152px; 
          height: 48px;
          border: 1px solid #36536B;
          border-radius: 24px;
          font-family: 'Public Sans';
          font-weight: 700;
          font-size: 15px;
          line-height: 18px;
          text-align: center;
          letter-spacing: -0.115385px;
          color: #36536B;

          &:hover {
            background: #36536B;
            color: #FBFCFE;
            transition: 0.4s ease-in-out;
          }
        }
      }
    }
    
    .col2 {
      display: flex;
      aling-items: center;
      flex-direction: column;
      justify-content: center;
      height: auto;
      gap: 37px;
      h2 {
        max-width: 445px;
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 24px;
        line-height: 32px;
        letter-spacing: -0.184615px;
        color: #36536B;
        mix-blend-mode: normal;
        opacity: 0.75;
      }

      .logos {
        display: flex;
        flex-wrap: wrap;
        align-items: center; 
        gap: 50px;
        max-width: 536px;
        height: auto;
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
  text-align: center;

  h1 {
    font-size: 48px !Important;
  }
  .grid-items {
    display: flex !Important;
    flex-direction: column;
    align-items: center;
    gap: 40px;

    form {
      max-width: 445px;
    }

    .col2 {
      display: flex;
      align-items: center;
      h2 {
        font-size: 24px !Important;
        line-height: 32px !Important;
      }

      .logos {
        display: flex;
        justify-content: space-between;
        max-width: 541px;
      }
    }
  }

}

// mobile
@media (max-width: 580px) {
  padding: 40px 25px !Important;
  h1 {
    font-size: 32px !Important;
    line-height: 36px !Important;
  }

  h2 {
    font-size: 24px !Important;
    line-height: 32px !Important;
  }

  .logos {
    img {
      margin: 0 auto;
    }
  }
}
`