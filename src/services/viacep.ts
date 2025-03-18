export async function searchAdress(cep: string) {
  try {
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();
    if (data.erro) {
      throw new Error("CEP não encontrado");
    }
    return data;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(error.message || "Erro ao buscar o CEP");
    } else {
      throw new Error("Erro ao buscar o CEP");
    }
  }
}
