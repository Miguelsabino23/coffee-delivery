import styled from "styled-components";
import { mixins } from "../../../../../styles/mixins";

export const ButtonPayment = styled.button`
  display: flex;
  gap: 0.5rem;
  align-items: center;

  padding: 0.8rem;
  border-radius: 4px;

  background-color: ${(props) => props.theme.colors["base-input"]};

  span {
    font: ${mixins.fonts["buttonM"]};
    text-transform: uppercase;

    color: ${(props) => props.theme.colors["base-text"]};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme.colors["purple"]};
  }
`;
