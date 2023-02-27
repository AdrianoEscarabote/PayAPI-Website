import styled from "styled-components";

export const ReadyToStart = () => {
  
  return (
    <ReadyToStartStyled className="section-form">
      <div className="container-form">
        <h4>Ready to start?</h4>
        <form noValidate>
          <label htmlFor="email-ready">
            <input type="email" name="email-ready" id="email-ready" placeholder="Enter email address" />
          </label>
          <button type="submit">Schedule a Demo</button>
        </form>
      </div>
    </ReadyToStartStyled>
  )
}

export const ReadyToStartStyled = styled.section`
display: flex;
align-items: center;
padding: 40px 0px;
width: 100%;

.container-form {
  max-width: 1440px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 400;
    font-size: 48px;
    line-height: 56px;
    letter-spacing: -0.369231px;
    color: #36536B;
    font-family: 'DM Serif Display';
  }
  
  form {
    display: flex;
    align-items: center;
    background-color: blue;
    width: 445px;
    height: 48px;
    background: #FBFCFE;
    box-shadow: 10px 10px 25px -10px rgba(54, 83, 107, 0.25);
    border-radius: 24px;
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
}

// tablet
@media (max-width: 932px) {
  .container-form {
    display: flex;
    flex-direction: column;
    gap: 40px;
  }
}

// mobile
@media (max-width: 580px) {
  .container-form {
    h4 {
      font-weight: 400;
      font-size: 32px;
      line-height: 36px;
    }

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
`