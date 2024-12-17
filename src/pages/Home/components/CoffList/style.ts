import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CoffListContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  gap: 0.5rem;

  margin-top: 1rem;

  text-align: center;

  max-width: 16rem;
  height: 19.375rem;

  h3 {
    font: ${mixins.fonts["titleS"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  p {
    font: ${mixins.fonts["textS"]};
    color: ${(props) => props.theme.colors["base-label"]};

    max-width: 13.5rem;
  }

  img {
    width: 120px;
  }
`;

export const BackgroundCart = styled.button`
  display: flex;
  align-items: center;

  padding: 4px;
  border-radius: 4px;

  cursor: pointer;

  background-color: ${(props) => props.theme.colors["purple-dark"]};
`;

export const Type = styled.span`
  font: ${mixins.fonts["tag"]};

  color: ${(props) => props.theme.colors["yellow-dark"]};
  background-color: ${(props) => props.theme.colors["yellow-light"]};

  padding: 4px 6px;
  border-radius: 10px;

  margin-right: 4px;
`;

export const Buy = styled.div`
  width: 13rem;

  display: flex;
  justify-content: space-around;

  span:first-child {
    font: ${mixins.fonts["titleM"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }

  div {
    width: 5rem;
    padding: 0.25rem;
    border-radius: 4px;

    display: flex;
    align-items: center;
    justify-content: space-around;

    background: ${(props) => props.theme.colors["base-button"]};

    button {
      color: ${(props) => props.theme.colors["purple"]};
    }
  }
`;
