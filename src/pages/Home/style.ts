import styled from "styled-components";
import { mixins } from "../../styles/mixins";

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;

  padding: 4rem 0;
  width: 100%;
`;

export const InfoContainer = styled.article`
  h1 {
    font: ${mixins.fonts["titleXL"]};

    color: ${(props) => props.theme.colors["base-title"]};
  }

  p {
    font: ${mixins.fonts["textL"]};
  }
`;

export const ListCoffee = styled.div`
  display: flex;
  flex-wrap: wrap;

  width: 100%;
  gap: 3.6rem;

  padding-top: 2rem;
`;

export const ContainerListCoff = styled.div`
  margin-top: 6rem;
  width: 1040px;

  h2 {
    font: ${mixins.fonts["titleL"]};
    color: ${(props) => props.theme.colors["base-title"]};
  }
`;
