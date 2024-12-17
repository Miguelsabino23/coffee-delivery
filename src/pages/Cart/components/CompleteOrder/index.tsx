import {
  CompleteYourOrder,
  DeliveryForm,
  DeliveryInformation,
  TextDelivery,
} from "./style";
import { MapPinLine } from "@phosphor-icons/react";
import { ViaCepContext } from "../../../../context/ViaCepContext";
import { Payment } from "../Payment";
import { useSafeContext } from "../../../../utils/useSafeContext";

export function CompleteOrder() {
  const context = useSafeContext(
    ViaCepContext,
    "ViaCepContext não foi encontrado. Verifique se está dentro do provider."
  );

  const { cep, dados, setCep, address, setAddress } = context;

  console.log(address);

  return (
    <CompleteYourOrder>
      <div>
        <DeliveryInformation>
          <div>
            <MapPinLine size={20} />
          </div>
          <TextDelivery>
            <h2>Endereço de Entrega</h2>
            <span>Informe o endereço onde deseja receber seu pedido</span>
          </TextDelivery>
        </DeliveryInformation>
        <DeliveryForm>
          <input
            type='text'
            placeholder='CEP'
            value={cep || ""}
            onChange={(e) => setCep(e.target.value.replace(/\D/g, ""))}
            style={{ width: "12.8rem" }}
            maxLength={8}
            required
          />
          <input
            type='text'
            placeholder='Rua'
            value={dados?.logradouro || ""}
            required
            readOnly
          />
          <div>
            <input
              type='text'
              placeholder='Número'
              defaultValue={""}
              style={{ flex: "1" }}
              onChange={(e) => setAddress({ number: e.target.value })}
              required
            />
            <input
              type='text'
              defaultValue={""}
              placeholder='Complemento'
              style={{ flex: "2" }}
            />
          </div>
          <div>
            <input
              type='text'
              placeholder='Bairro'
              style={{}}
              value={dados?.bairro || ""}
              required
              readOnly
            />
            <input
              type='text'
              placeholder='Cidade'
              style={{ width: "9.1rem" }}
              value={dados?.localidade || ""}
              required
              readOnly
            />
            <input
              type='text'
              placeholder='UF'
              style={{ width: "3.2rem" }}
              maxLength={2}
              value={dados?.uf || ""}
              readOnly
            />
          </div>
        </DeliveryForm>
        <Payment />
      </div>
    </CompleteYourOrder>
  );
}
