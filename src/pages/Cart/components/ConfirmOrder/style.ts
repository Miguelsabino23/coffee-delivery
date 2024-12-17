import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const ConfirmOrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.8rem;

  margin-top: 1rem;

  div {
    display: flex;
    justify-content: space-between;
  }

  a {
    background-color: ${(props) => props.theme.colors["yellow"]};
    color: ${(props) => props.theme.colors["white"]};

    font: ${mixins.fonts["buttonG"]};
    text-transform: uppercase;

    text-decoration: none;
    text-align: center;

    padding: 0.5rem;
    border-radius: 6px;
  }
`;
