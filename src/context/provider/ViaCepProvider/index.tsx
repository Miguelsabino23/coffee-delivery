import { ReactNode, useEffect, useState } from "react";
import { searchAdress } from "../../../services/viacep";
import { ViaCepContext } from "../../ViaCepContext";

interface ViaCepContextProviderProps {
  children: ReactNode;
}

export type ViaCepResponse = {
  cep: string;
  logradouro: string;
  complemento: string;
  bairro: string;
  localidade: string;
  uf: string;
  ibge: string;
  gia: string;
  ddd: string;
  siafi: string;
};

export interface Address {
  number: string | "S/N";
}

export function ViaCepContextProvider({
  children,
}: ViaCepContextProviderProps) {
  //Via cep
  const [cep, setCep] = useState<string>("");
  const [dados, setDados] = useState<ViaCepResponse | null>(null);
  const [erro, setErro] = useState<string>("");
  const [debouncedCep, setDebouncedCep] = useState<string>("");
  const [address, setAddress] = useState<Address>({
    number: "",
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedCep(cep);
    }, 500);

    return () => clearTimeout(timer);
  }, [cep]);

  //Busca o endereço ao mudar o debounce
  useEffect(() => {
    if (debouncedCep.length === 8) {
      automaticAdressSearch(debouncedCep);
    } else if (debouncedCep.length < 8) {
      setDados(null);
      setErro("");
    }
  }, [debouncedCep]);

  const automaticAdressSearch = async (cep: string) => {
    try {
      const endereco = await searchAdress(cep);
      setDados(endereco);
      setErro("");
    } catch (error) {
      if (error instanceof Error) {
        setErro(error.message);
      } else {
        setErro("Erro desconhecido");
      }

      setDados(null);
    }
  };

  return (
    <ViaCepContext.Provider
      value={{
        cep,
        setCep,
        dados,
        erro,
        debouncedCep,
        logradouro: dados?.logradouro || "",
        bairro: dados?.bairro || "",
        localidade: dados?.localidade || "",
        uf: dados?.uf || "",
        address,
        setAddress,
      }}
    >
      {children}
    </ViaCepContext.Provider>
  );
}
