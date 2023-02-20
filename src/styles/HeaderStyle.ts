import styled from "styled-components";

export const HeaderStyled = styled.header`
width: 100%;
display: flex;
align-items: center;
justify-content: center;
color: #fff;

.container {
  z-index: 100;
  width: 100%;
  max-width: 1440px;
  padding: 40px 165px 40px 165px; 

  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
    
    .nav-items {
      display: flex;
      align-items: center;
      gap: 64px;

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
}`