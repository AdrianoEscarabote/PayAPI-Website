import styled from "styled-components";

export const ReadyToStart = () => {
  
  return (
    <ReadyToStartStyled className="section-form">
      <div className="container-form">
        <h4>Ready to start?</h4>
        <form noValidate>
          <label htmlFor="email">
            <input type="email" name="email" id="email" placeholder="Enter email address" />
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
    display: flex;
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
}`