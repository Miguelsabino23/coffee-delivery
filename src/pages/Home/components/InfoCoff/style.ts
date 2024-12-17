import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const InfoCoffContainer = styled.div`
  display: flex;
  flex-direction: column;

  div:first-child {
    display: flex;
    height: 18rem;

    div {
      display: flex;
      flex-direction: column;

      h1 {
        font: ${mixins.fonts["titleXL"]};
        color: ${(props) => props.theme.colors["base-title"]};
        margin-bottom: 1rem;
      }

      p {
        font: ${mixins.fonts["textL"]};
        color: ${(props) => props.theme.colors["base-subtitle"]};
      }
    }
  }
`;

export const ItensContainer = styled.div`
  display: flex;

  align-items: center;

  gap: 1rem;
  margin-top: 0.5rem;

  p {
    font: ${mixins.fonts["textM"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const BaseIcon = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0.3rem;
  border-radius: 100%;

  color: ${(props) => props.theme.colors["white"]};
`;

export const IconCartContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme.colors["yellow-dark"]};
`;

export const IconTimerContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme.colors["yellow"]};
`;
export const IconPackageContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme.colors["base-text"]};
`;
export const IconCoffeContainer = styled(BaseIcon)`
  background-color: ${(props) => props.theme.colors["purple"]};
`;
