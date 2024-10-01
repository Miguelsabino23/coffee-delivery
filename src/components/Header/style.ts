import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Aside = styled.aside`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  div {
    color: ${(props) => props.theme.colors["purple"]};
    background-color: ${(props) => props.theme.colors["purple-light"]};

    display: flex;
    align-items: center;
    gap: 0.2rem;

    padding: 0.4rem;
    border-radius: 4px;

    font-family: ${mixins.fonts.textS};
  }

  a:last-child {
    background-color: ${(props) => props.theme.colors["yellow-light"]};
    color: ${(props) => props.theme.colors["yellow-dark"]};

    display: flex;

    padding: 0.4rem;
    border-radius: 4px;
  }
`;
