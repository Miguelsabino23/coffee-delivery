import styled from "styled-components";
import { mixins } from "../../styles/mixins";

interface IconProps {
  bgColor?: string;
}

export const SuccessContainer = styled.div`
  display: flex;
  justify-content: space-between;

  margin-top: 6rem;

  h1 {
    font: ${mixins.fonts["titleL"]};

    color: ${(props) => props.theme.colors["yellow-dark"]};
  }

  h2 {
    font: ${mixins.fonts["textL"]};

    color: ${(props) => props.theme.colors["base-subtitle"]};
  }
`;

export const InfosDelivery = styled.div`
  display: flex;
  margin-top: 2rem;
`;

export const Icon = styled.div<IconProps>`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  margin-right: 0.5rem;

  background-color: ${({ bgColor }) => bgColor || "gray"};
  color: ${(props) => props.theme.colors["white"]};

  border-radius: 50%;
`;

export const BorderEnvolved = styled.div`
  padding: 1.5rem;
  margin-top: 2rem;
  border: 1px solid #dbac2c;
  border-radius: 6px 40px 6px 40px;
`;
