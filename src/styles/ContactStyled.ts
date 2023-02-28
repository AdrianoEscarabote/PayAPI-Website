import styled from "styled-components";

export const ContactStyled = styled.main`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
padding: 2.5rem 10.3125rem 2.5rem 10.3125rem;

.container {
  width: 100%;
  max-width: 90rem;
  z-index: 1;
  position: relative;

  .background {
    z-index: -100;
    background: #36536B;
    mix-blend-mode: normal;
    opacity: 0.15;
    width: 48.75rem;
    height: 48.75rem;
    border-radius: 50%;
    position: absolute;
    top: -49.375rem;
    right: -32.9375rem;
  }

  h1 {
    max-width: 42.5rem;
    font-family: 'DM Serif Display';
    font-weight: 400;
    font-size: 3.5rem;
    line-height: 3.5rem;
    letter-spacing: -0.0269rem;
    color: #36536B;
  }

  .grid-items {
    display: grid;
    grid-template-columns: 50% 50%;
    margin-top: 4.5rem;

    .col1 {
      form {
        .error {
          font-family: 'Public Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 0.6875rem;
          line-height: 0.8125rem;
          letter-spacing: -0.0053rem;
          color: #FF0000;
          mix-blend-mode: normal;
          opacity: 0.5;
        }

        input[type="text"].error_input,
        input[type="email"].error_input,
        textarea.error_input {
          border-bottom: 0.0625rem solid #FF0000 !important;
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
          gap: 1.5rem;

          input,
          textarea {
            &:focus {
              outline: 0.1625rem dotted #000 !Important;
            }
          }

          input[type="text"],
          input[type="email"],
          textarea {
            border: unset;
            border-bottom: 0.0625rem solid #36536b1e;
            background: transparent;
            height: 2.625rem;
            width: 100%;
            max-width: 27.8125rem;
            font-family: 'Public Sans';
            font-weight: 400;
            font-size: 0.9375rem;
            line-height: 1.5625rem;
            letter-spacing: -0.0072rem;
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
            height: 5.5625rem;
            resize: none;
          }
        }

        .disabled {
          pointer-events: none;
          opacity: 0.5;
        }

        button {
          margin-top: 1.5rem;
          width: 9.5rem; 
          height: 3rem;
          border: 0.0625rem solid #36536B;
          border-radius: 1.5rem;
          font-family: 'Public Sans';
          font-weight: 700;
          font-size: 0.9375rem;
          line-height: 1.125rem;
          text-align: center;
          letter-spacing: -0.0072rem;
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
      gap: 2.3125rem;
      h2 {
        max-width: 27.8125rem;
        font-family: 'DM Serif Display';
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 2rem;
        letter-spacing: -0.0115rem;
        color: #36536B;
        mix-blend-mode: normal;
        opacity: 0.75;
      }

      .logos {
        display: flex;
        flex-wrap: wrap;
        align-items: center; 
        gap: 3.125rem;
        max-width: 33.5rem;
        height: auto;
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
  text-align: center;

  h1 {
    font-size: 3rem !Important;
  }
  .grid-items {
    display: flex !Important;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    form {
      max-width: 27.8125rem;
    }

    .col2 {
      display: flex;
      align-items: center;
      h2 {
        font-size: 1.5rem !Important;
        line-height: 2rem !Important;
      }

      .logos {
        display: flex;
        justify-content: space-between;
        max-width: 33.8125rem;
      }
    }
  }

}

// mobile
@media (max-width: 36.25rem) {
  padding: 2.5rem 1.5625rem !Important;
  h1 {
    font-size: 2rem !Important;
    line-height: 2.25rem !Important;
  }

  h2 {
    font-size: 1.5rem !Important;
    line-height: 2rem !Important;
  }

  .logos {
    img {
      margin: 0 auto;
    }
  }
}`