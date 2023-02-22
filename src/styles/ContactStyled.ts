import styled from "styled-components";

export const ContactStyled = styled.main`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  .container {
    width: 100%;
    max-width: 1440px;
    padding: 40px 165px 40px 165px;
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
      top: -760px;
      right: -150px;
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

          fieldset {
            border: unset;
            display: flex;
            flex-direction: column;
            gap: 24px;

            input[type="text"],
            input[type="email"],
            textarea {
              border: unset;
              outline: unset;
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

              &::-webkit-input-placeholder,
              &:-moz-placeholder,
              &:-moz-placeholder { 
                color: #36536b48;
              }
            }

            textarea {
              height: 89px;
              resize: none;
            }
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
`