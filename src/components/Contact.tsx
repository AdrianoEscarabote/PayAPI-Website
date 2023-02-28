import { ContactStyled } from "../styles/ContactStyled";
import logoTesla from "../assets/shared/desktop/tesla.svg";
import logoMicrosoft from "../assets/shared/desktop/microsoft.svg";
import logoHp from "../assets/shared/desktop/hewlett-packard.svg";
import logoOracle from "../assets/shared/desktop/oracle.svg";
import logoGoogle from "../assets/shared/desktop/google.svg";
import logoNvidia from "../assets/shared/desktop/nvidia.svg";
import { ReadyToStart } from "./shared/ReadyToStart";
import { useReducer, useState } from "react";

type FormState = {
  email: string;
  name: string;
  message: string;
  title: string;
  companyName: string;
  errorMessageEmail: string;
  errorName: string;
  titleError: string;
  messageError: string;
  companyNameError: string;
};

type Action =
  | { type: "SET_EMAIL"; payload: string }
  | { type: "SET_NAME"; payload: string }
  | { type: "SET_MESSAGE"; payload: string }
  | { type: "SET_TITLE"; payload: string }
  | { type: "SET_COMPANY_NAME"; payload: string }
  | { type: "SET_ERROR_EMAIL"; payload: string }
  | { type: "SET_ERROR_NAME"; payload: string }
  | { type: "SET_ERROR_TITLE"; payload: string }
  | { type: "SET_ERROR_MESSAGE"; payload: string }
  | { type: "SET_ERROR_COMPANY_NAME"; payload: string }
  | { type: "CLEAN_FORM"; payload: string};

const initialState: FormState = {
  email: "",
  name: "",
  message: "",
  title: "",
  companyName: "",
  errorMessageEmail: "",
  errorName: "",
  titleError: "",
  messageError: "",
  companyNameError: "",
};

const formReducer = (state: FormState, action: Action): FormState => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_NAME":
      return { ...state, name: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "SET_TITLE":
      return { ...state, title: action.payload };
    case "SET_COMPANY_NAME":
      return { ...state, companyName: action.payload };
    case "SET_ERROR_EMAIL":
      return { ...state, errorMessageEmail: action.payload };
    case "SET_ERROR_NAME":
      return { ...state, errorName: action.payload };
    case "SET_ERROR_TITLE":
      return { ...state, titleError: action.payload };
    case "SET_ERROR_MESSAGE":
      return { ...state, messageError: action.payload };
    case "SET_ERROR_COMPANY_NAME":
      return { ...state, companyNameError: action.payload };
    case "CLEAN_FORM":
      return {
        ...state,
        companyName: "",
        companyNameError: "",
        email: "",
        errorMessageEmail: "",
        errorName: "",
        message: "",
        messageError: "",
        name: "",
        title: "",
        titleError: "",
      }
    default:
      return state;
  };
};

const FormComponent = () => {
  const [buttonAvaliable, setButtonAvaliable] = useState<boolean>(true);
  const [inputChecked, setInputChecked] = useState<boolean>(false)
  const [formData, dispatch] = useReducer(formReducer, initialState)

  const handleChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {name, value} = event.target;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  
    switch (name) {
      case "email":
        dispatch({ type: "SET_EMAIL", payload: value});
        if (value === "") {
          dispatch({ type: "SET_ERROR_EMAIL", payload: "Email can't be empty" });
        } else if (!emailRegex.test(value)) {
          dispatch({ type: "SET_ERROR_EMAIL", payload: "Please enter a valid email address" });
        } else {
          dispatch({ type: "SET_ERROR_EMAIL", payload: "" });
        }
        break;
      case "name":
        dispatch({ type: "SET_NAME", payload: value});
        if (value === "") {
          dispatch({ type: "SET_ERROR_NAME", payload: "Name can't be empty" });
        } else {
          dispatch({ type: "SET_ERROR_NAME", payload: "" });
        }
        break;
      case "message":
        dispatch({ type: "SET_MESSAGE", payload: value });
        if (value === "") {
          dispatch({ type: "SET_ERROR_MESSAGE", payload: "Message can't be empty" });
        } else {
          dispatch({ type: "SET_ERROR_MESSAGE", payload: "" });
        }
        break;
      case "title":
        dispatch({ type: "SET_TITLE", payload: value });
        if (value === "") {
          dispatch({ type: "SET_ERROR_TITLE", payload: "Title can't be empty" });
        } else {
          dispatch({ type: "SET_ERROR_TITLE", payload: "" });
        }
        break;
      case "company": 
        dispatch({ type: "SET_COMPANY_NAME", payload: value });
        if (value === "") {
          dispatch({ type: "SET_ERROR_COMPANY_NAME", payload: "Company name can't be empty" });
        } else {
          dispatch({ type: "SET_ERROR_COMPANY_NAME", payload: "" });
        }
        break;
      default:
        break;
    };

    if (formData.email !== "" && formData.name !== "" && formData.title !== "" && formData.message !== "" && formData.companyName !== "") {
      setButtonAvaliable(false);
    };
  };

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = (ev) => {
    ev.preventDefault();
    dispatch({ type: "CLEAN_FORM", payload: "" });
    setButtonAvaliable(true);
    inputChecked ? setInputChecked(false) : setInputChecked(false)
  };

  return (
    <form noValidate> 
      <fieldset>
        <legend className="sr-only">Add your information in the form below!</legend>

        <label htmlFor="name" aria-label="type your name">
          <input type="text" name="name" value={formData.name} onChange={handleChange} id="name" className={formData.errorName ? "error_input" : ""} placeholder="Name"/>
          <p className="error">{formData.errorName}</p>
        </label>

        <label htmlFor="email" aria-label="type your email">
          <input type="email" value={formData.email} onChange={handleChange} name="email" id="email" className={formData.errorMessageEmail ? "error_input" : ""} placeholder="Email Address" />
          <p className="error">{formData.errorMessageEmail}</p>
        </label>

        <label htmlFor="company" aria-label="provide the name of your company">
          <input type="text" value={formData.companyName} onChange={handleChange} name="company" id="company" className={formData.companyNameError ? "error_input" : ""}  placeholder="Company Name" />
          <p className="error">{formData.companyNameError}</p>
        </label>

        <label htmlFor="title">
          <input type="text" value={formData.title} onChange={handleChange} name="title" id="title" placeholder="Title" className={formData.titleError ? "error_input" : ""}  />
          <p className="error">{formData.titleError}</p>
        </label>

        <label aria-label="here you can write a message if you want." htmlFor="message" id="message">
          <textarea value={formData.message} className={formData.messageError ? "error_input" : ""}  onChange={handleChange} name="message" placeholder="Message" id="message"></textarea>
          <p className="error">{formData.messageError}</p>
        </label>
        
        <label className="label_checkbox" htmlFor="up-to-date" aria-label="leave the input checked if you want to stay updated on company announcements and updates to our API">
          <input onChange={(ev) => setInputChecked(ev.currentTarget.checked)} checked={inputChecked} type="checkbox" name="up-to-date" id="up-to-date" />
          <span>Stay up-to-date with company announcements and updates to our API</span>
        </label>
      </fieldset>

      <button type="submit" onClick={handleClick} className={buttonAvaliable ? "disabled" : ""} disabled={buttonAvaliable} aria-label={buttonAvaliable ? "complete the form" : "click to confirm the form"}>Submit</button>
    </form>
  );
};

export const Contact = () => {
  
  return (
    <ContactStyled>
      <div className="container">
        <div className="background"></div>
        <h1>Submit a help request and we’ll get in touch shortly.</h1>
        <div className="grid-items">
          <div className="col1">
            <FormComponent />
          </div>
          <div className="col2">
            <h2>Join the thousands of innovators already building with us</h2>
            <div className="logos">
              <img src={logoTesla} alt="" aria-hidden="true" />
              <img src={logoMicrosoft} alt="" aria-hidden="true" />
              <img src={logoHp} alt="" aria-hidden="true" />
              <img src={logoOracle} alt="" aria-hidden="true" />
              <img src={logoGoogle} alt="" aria-hidden="true" />
              <img src={logoNvidia} alt="" aria-hidden="true" />
            </div>
          </div>
        </div>
        <ReadyToStart />
      </div>
    </ContactStyled>
  );
};