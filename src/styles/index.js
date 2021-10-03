import styled from "@emotion/styled";

export const lightTheme = {
  background: "url('../images/bg-desktop-light.jpg')",
  backgroundMobile: "url('../images/bg-mobile-light.jpg')",
  border: "hsl(236, 9%, 61%)",
  primary: "hsl(0, 0%, 98%)",
  secondary: "hsl(236, 33%, 92%)",
  text: "hsl(236, 9%, 61%)",
  textHover: "hsl(235, 19%, 35%)",
};
export const darkTheme = {
  background: `url('../images/bg-desktop-dark.jpg')`,
  backgroundMobile: "url('../images/bg-mobile-dark.jpg')",
  border: "hsl(237, 14%, 26%)",
  primary: "hsl(235, 24%, 19%)",
  secondary: "hsl(235, 21%, 11%)",
  text: "hsl(234, 11%, 52%)",
  textHover: "hsl(236, 33%, 92%)",
};

export const MainStyles = styled.main`
  background-color: ${({ theme }) => theme.secondary};
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
  font-size: 16px;
  width: 100%;
  min-height: 100vh;
  height: 100%;
  transition: all 0.3s ease-in-out;
  &:before {
    background-image: ${({ theme }) => theme.background};
    background-position: 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100%;
    height: 300px;
    transition: all .3s ease;
  }
  @media (max-width: 465px) {
    font-size: 12px;
    &:before {
      background-image: ${({ theme }) => theme.backgroundMobile};
      height: 200px;
    }
  }
`;

export const ContainerStyles = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  margin: 0 auto;
  max-width: 600px;
  position: relative;
  width: 90%;
`;

export const ListaStyles = styled.ul`
  background: ${({ theme }) => theme.primary};
  border-radius: 0.25rem;
  margin: 3rem 0;
  padding: 0;
  width: 100%;
`;

export const Span = styled.span`
  color: ${({ theme }) => theme.text};
  font-family: inherit;
  margin-top: 3rem;
`;

export const FooterStyles = styled.footer`
  position: relative;
  bottom: 0;
  left: 0;
  text-align: center;
  width: 100%;
  background: ${({ theme }) => theme.primary};
  padding: 10px 0;
  color: ${({ theme }) => theme.text};
  transition: all 0.3s linear;
  a {
    color: hsl(235, 21%, 11%);
  }
`;
