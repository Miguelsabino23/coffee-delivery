import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const CompleteYourOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  max-width: 34rem;

  margin-top: 2rem;
`;

export const DeliveryInformation = styled.div`
  color: ${(props) => props.theme.colors["yellow-dark"]};

  display: flex;
  gap: 0.3rem;
`;

export const TextDelivery = styled.div`
  h2 {
    font: ${mixins.fonts["textM"]};
    color: ${(props) => props.theme.colors["base-subtitle"]};
  }

  span {
    font: ${mixins.fonts["textS"]};
    color: ${(props) => props.theme.colors["base-text"]};
  }
`;

export const DeliveryForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 1rem;

  input {
    padding: 1rem;

    border-radius: 6px;

    background-color: ${(props) => props.theme.colors["base-input"]};
    color: ${(props) => props.theme.colors["base-label"]};

    font: ${mixins.fonts["textS"]};

    border: none;
    outline: 0;

    &::placeholder {
      color: ${(props) => props.theme.colors["base-label"]};
    }
  }

  div {
    display: flex;
    gap: 1rem;
  }
`;
