import styled from "styled-components";

export const PaymentContainer = styled.div``;

export const PaymentInformation = styled.div`
  display: flex;
  gap: 0.2rem;

  margin-top: 4rem;

  div {
    color: ${(props) => props.theme.colors["purple-dark"]};
  }
`;

export const PaymentMethodContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.2rem;

  margin-top: 2rem;
`;
