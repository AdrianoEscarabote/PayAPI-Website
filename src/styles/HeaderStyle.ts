import styled from "styled-components";

export const HeaderStyled = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: #fff;
padding: 40px 165px 40px 165px; 

.container {
  z-index: 100;
  width: 100%;
  max-width: 1440px;

  nav {
    display: flex;
    align-items: center;
    gap: 64px;
    width: 100%;

    .mobile-button {
      display: none;
    }
    
    .nav-items {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      button {
        display: none;
      }

      ul {
        list-style: none;
        display: flex;
        gap: 40px;
        padding: 0px;

        a {
          font-weight: 700;
          font-size: 15px;
          line-height: 18px;
          color: #36536B;
          mix-blend-mode: normal;
          opacity: 0.7;
          text-decoration: none;

          &:hover {
            transition: 0.4s ease-in-out;
            opacity: 1;
          }
        }
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
  
  .nav-items {
    gap: 24px !Important;

    ul {
      gap: 30px !Important;
    }
  }
}

// mobile
@media (max-width: 580px) {
  padding: 40px 25px !Important;
  
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
    width: 0px !Important;
    right: 0px;
    height: 0px;
    visibility: hidden;
    z-index: -1000;

    button {
      display: block !Important;
    }
  }

  .mobile-button {
    display: block !Important;
    z-index: 1000;
  }

  .mobile-layout {
    background-color: #1B262F;
    display: flex !Important; 
    position: absolute;
    top: 0px;
    bottom: 0px !Important;
    right: 0 !Important;
    opacity: 1;
    z-index: 1;
    transition: 0.4s ease-in-out;
    flex-direction: column;
    align-items: center;
    width: 60% !Important;
    min-height: 100vh !Important;
    z-index: 2000 !Important;
    justify-content: flex-start !Important;
    padding: 50px 24px 0px 24px;
    visibility: visible;

    button {
      position: absolute;
      right: 30px;
    }

    ul {
      z-index: 2;
      display: flex;
      flex-direction: column;
      align-items: center;
      margin-top: 50px;
      border-top: 1px solid white; 
      width: 100%;
      padding-top: 44px !Important;

      li {
       a {
        color: #FBFCFE !Important;
       }   
      }
    }
    a {
      font-weight: 700;
      font-size: 15px;
      line-height: 18px;
      text-align: center;
      color: #FBFCFE;
      mix-blend-mode: normal;
      opacity: 1;
      width: 100% !Important;
      max-width: 173px;
    }
  }
}
`