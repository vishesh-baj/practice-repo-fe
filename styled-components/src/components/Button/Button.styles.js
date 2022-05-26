import styled, { keyframes } from "styled-components";

export const StyledButton = styled.button`
  border: 2px solid #4caf50;
  background-color: ${(props) =>
    props.variant === "outline" ? "white" : "#4caf50"};
  color: ${(props) => (props.variant === "outline" ? " #4caf50" : "white")};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  transition: all ease-in-out 0.5s;

  &:hover {
    background-color: ${(props) =>
      props.variant !== "outline" ? "white" : "#4caf50"};
    color: ${(props) => (props.variant !== "outline" ? " #4caf50" : "white")};
    padding: 15px 32px;
  }
`;

export const FancyButton = styled(StyledButton)`
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 100%);
  border: none;
`;
export const SubmitButton = styled(StyledButton).attrs((props) => ({
  type: "submit",
}))`
  box-shadow: 0 9px #999;

  &:active {
    background-color: ${(props) =>
      props.variant !== "outline" ? "#fff" : "#4caf40"};

    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
`;
export const DarkButton = styled(StyledButton)`
  background-color: ${(props) => props.theme.dark.primary};
  border: ${(props) => props.theme.dark.primary};
  color: ${(props) => props.theme.dark.text};
`;
const rotate = keyframes`
    from {
        transform: rotate(0)
    }
     to {
        transform: rotate(360)
    }
`;

export const AnimatedLogo = styled.img`
  height: 40vmin;
  pointer-events: none;
  animation: ${rotate} infinite 2s linear;
`;
