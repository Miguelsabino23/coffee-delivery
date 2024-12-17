import styled from "styled-components";
import { mixins } from "../../../../styles/mixins";

export const ConfirmationContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 2rem;
`;

export const CartItems = styled.li`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  img {
    width: 4rem;
  }

  span {
    font: ${mixins.fonts["textM"]};
  }

  div {
    p {
      font: ${mixins.fonts["textM"]};
    }
    div {
      display: flex;
      justify-content: space-around;
      align-items: center;

      button {
        display: flex;
        gap: 0.2rem;
        align-items: center;

        color: ${(props) => props.theme.colors["purple-dark"]};

        span {
          color: ${(props) => props.theme.colors["base-subtitle"]};

          font: ${mixins.fonts["buttonM"]};
        }
      }
      div {
        display: flex;
        gap: 0.4rem;

        padding: 1rem;
      }
    }
  }
`;
