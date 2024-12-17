import { createContext, Dispatch, SetStateAction } from "react";
import { Address, ViaCepResponse } from "../provider/ViaCepProvider";

interface ViaCepContextType {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
  setCep: (cep: string) => void;
  dados: ViaCepResponse | null;
  erro: string;
  debouncedCep: string;
  address: Address;
  setAddress: Dispatch<SetStateAction<Address>>;
}

export const ViaCepContext = createContext<ViaCepContextType | undefined>(
  undefined
);
