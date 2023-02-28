import styled from "styled-components";

export const HeaderStyled = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
padding: 2.5rem 10.3125rem 2.5rem 10.3125rem; 
.container {
  z-index: 100;
  width: 100%;
  max-width: 90rem;
  nav {
    display: flex;
    align-items: center;
    gap: 4.125rem;
    width: 100%;
    a {
      img {
        width: 10.3125rem;
      }
    }
    .mobile-button {
      display: none;
    }
    .nav-items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      .container-mobile-background {
        position: absolute;
      }
      button {
        display: none;
      }
      ul {
        list-style: none;
        display: flex;
        gap: 2.5rem;
        padding: 0rem;
        a {
          font-weight: 700;
          font-size: 0.9375rem;
          line-height: 1.125rem;
          color: #36536B;
          mix-blend-mode: normal;
          opacity: 1;
          text-decoration: none;
          &:hover {
            transition: 0.4s ease-in-out;
            color: #ba4270;
          }
        }
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
  
  .nav-items {
    gap: 1.5rem !Important;

    ul {
      gap: 1.875rem !Important;
    }
  }
}
// mobile
@media (max-width: 36.25rem) {
  padding: 2.5rem 1.5625rem !Important;
  nav {
    justify-content: space-between;
  }
  .nav-mobile-layout {
    position: relative;
    overflow: hidden;
  }
  .nav-items {
    opacity: 0;
    position: absolute;
    width: 0rem !Important;
    right: 0rem;
    height: 0rem;
    visibility: hidden;
    z-index: -1000;
    .container-mobile-background {
      display: none;  
    }
    button {
      display: block !Important;
    }
  }
  .mobile-button {
    display: block !Important;
    z-index: 1000;
  }
  .hidden {
    display: none;
    position: absolute;
    top: 0rem;
    right: 0rem;
    opacity: 0;
  }
  .close-mobile-menu {
    display: block !Important;
    min-height: 100vh;
    width: 40% !Important; 
    z-index: 200;
    position: absolute;
    top: 0rem;
    bottom: 0rem !Important;
    left: 0rem !Important;
    background: #1B262F;
    opacity: 0.5;
    animation: mobileAnimationClose 0.4s ease-in-out;
  }
  .mobile-layout {
    animation: mobileAnimation 0.4s ease-in-out;
    background-color: #1B262F;
    display: flex !Important; 
    position: absolute;
    top: 0rem;
    bottom: 0rem !Important;
    right: 0 !Important;
    opacity: 1;
    z-index: 1;
    /* transition: 0.4s ease-in-out; */
    flex-direction: column;
    align-items: center;
    width: 60% !Important;
    min-height: 100vh !Important;
    z-index: 2000 !Important;
    justify-content: flex-start !Important;
    padding: 3.125rem 1.5rem 0rem 1.5rem;
    visibility: visible;
    overflow: hidden;
    .container-mobile-background {
      position: absolute;
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: -1;
      width: 280%;
      top: -40.875rem;
      right: -25.625rem;

      .background-mobile {
        width: 100%;
        height: 48.75rem;
        border-radius: 50%;
        background: #36536B;
        mix-blend-mode: normal;
        opacity: 0.15;
      }
    }
    .container-mobile-background.main {
      width: 280%;
      top: -34.875rem !Important;
      right: -51% !Important;
      left: unset !Important;
    }
    button {
      position: absolute;
      right: 1.875rem;
    }
    ul {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 3.125rem;
      border-top: 0.0625rem solid white; 
      width: 100%;
      padding-top: 2.75rem !Important;
      li {
       a {
        color: #FBFCFE !Important;
       }   
      }
    }
    a {
      font-weight: 700;
      font-size: 0.9375rem;
      line-height: 1.125rem;
      text-align: center;
      color: #FBFCFE;
      mix-blend-mode: normal;
      opacity: 1;
      width: 100% !Important;
      max-width: 10.8125rem;
    }
  }
}
@keyframes mobileAnimation {
  from {
    opacity: 0;
    transform: translateX(25%);
  } to {
    transform: translateX(0%);
    opacity: 1;
  }
}
@keyframes mobileAnimationClose {
  from {
    opacity: 0;
  } to {
    opacity: 0.5;
  }
}
@media (max-width: 23.375rem) {
  .container-mobile-background {
    top: -33.875rem !Important;
  }
}`