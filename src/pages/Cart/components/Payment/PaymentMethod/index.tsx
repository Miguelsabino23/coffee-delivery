import { IconProps } from "@phosphor-icons/react";
import { ComponentType } from "react";
import { useTheme } from "styled-components";
import { ButtonPayment } from "./style";

interface PaymentMethodType {
  Icon: ComponentType<IconProps>;
  method: string;
  onClick: (method: string) => void;
}

export function PaymentMethod({ Icon, method, onClick }: PaymentMethodType) {
  const theme = useTheme();

  return (
    <ButtonPayment onClick={() => onClick(method)}>
      <Icon size={20} color={theme.colors["purple-dark"]} />
      <span>{method}</span>
    </ButtonPayment>
  );
}
