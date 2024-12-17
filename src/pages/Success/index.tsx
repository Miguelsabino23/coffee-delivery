import { BorderEnvolved, Icon, InfosDelivery, SuccessContainer } from "./style";
import { useTheme } from "styled-components";
import illustration from "../../assets/Illustration.svg";
import { ViaCepContext } from "../../context/ViaCepContext";
import { CurrencyDollar, MapPin, Timer } from "@phosphor-icons/react";
import { PaymentMethodContext } from "../../context/PaymentMethodContext";
import { useSafeContext } from "../../utils/useSafeContext";

export function Success() {
  const theme = useTheme();
  const apiContext = useSafeContext(
    ViaCepContext,
    "ViaCep não foi encontrado. Verifique se está dentro do provider."
  );
  const paymentMethod = useSafeContext(
    PaymentMethodContext,
    "paymentMethod não foi encontrado. Verifique se está dentro do provider"
  );

  const {
    bairro = "desconhecido",
    localidade = "desconhecido",
    logradouro = "desconhecido",
    uf = "desconhecido",
    address,
  } = apiContext;

  const { selectedMethod } = paymentMethod;

  return (
    <SuccessContainer>
      <div>
        <h1>Uhu! Pedido confirmado</h1>
        <h2>Agora é só aguardar que logo o café chegará até você</h2>
        <BorderEnvolved>
          <InfosDelivery>
            <Icon bgColor={theme.colors["purple-dark"]}>
              <MapPin size={20} weight='fill' />
            </Icon>
            <div>
              <p>
                Entrega em{" "}
                <strong>
                  {logradouro || "Endereço indefinido"}, {address.number}
                </strong>
              </p>
              <p>
                {bairro || "Bairro indefinido"} - {""}
                {localidade || "Cidade indefinida"}, {uf || "UF indefinida"}
              </p>
            </div>
          </InfosDelivery>
          <InfosDelivery>
            <Icon bgColor={theme.colors["yellow"]}>
              <Timer size={20} weight='fill' />
            </Icon>
            <div>
              <p>Previsão de entrega</p>
              <strong>
                <span>20 min - 30 min</span>
              </strong>
            </div>
          </InfosDelivery>
          <InfosDelivery>
            <Icon bgColor={theme.colors["yellow-dark"]}>
              <CurrencyDollar size={20} />
            </Icon>
            <div>
              <p>Pagamento na entrega</p>
              <span>
                <strong>{selectedMethod}</strong>
              </span>
            </div>
          </InfosDelivery>
        </BorderEnvolved>
      </div>

      <img src={illustration} alt='' />
    </SuccessContainer>
  );
}
