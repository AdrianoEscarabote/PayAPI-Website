import { useState } from "react";
import styled from "styled-components";

export const ReadyToStart = () => {
  const [inputValue, setInputValue] = useState("");
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    setInputValue("")
  }
  return (
    <ReadyToStartStyled className="section-form">
      <div className="container-form">
        <h4>Ready to start?</h4>
        <form noValidate onSubmit={handleSubmit}>
          <label htmlFor="email-ready">
            <input type="email" value={inputValue} onChange={e => setInputValue(e.currentTarget.value)} name="email-ready" id="email-ready" placeholder="Enter email address" />
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
padding: 2.5rem 0rem;
width: 100%;

.container-form {
  max-width: 90rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h4 {
    font-weight: 400;
    font-size: 3rem;
    line-height: 3.5rem;
    letter-spacing: -0.0231rem;
    color: #36536B;
    font-family: 'DM Serif Display';
  }
  
  form {
    display: flex;
    align-items: center;
    background-color: blue;
    width: 27.8125rem;
    height: 3rem;
    background: #FBFCFE;
    box-shadow: 0.625rem 0.625rem 1.5625rem -0.625rem rgba(54, 83, 107, 0.25);
    border-radius: 1.5rem;
    position: relative;
  
    label {
      width: 100%;
      padding-left: 1.4375rem;
      input {
        width: 56%;
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

        &:focus {
          outline
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
  
      &:hover {
        transition: 0.4s ease-in-out;
        background: #DA6D97;
      }
    }
  }
}
// tablet
@media (max-width: 58.25rem) {
  .container-form {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
}
// mobile
@media (max-width: 36.25rem) {
  .container-form {
    h4 {
      font-weight: 400;
      font-size: 2rem;
      line-height: 2.25rem;
    }

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
`