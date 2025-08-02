import axios from "axios";
import type { RegisterData } from "../schema/registerSchema";

export function useRegister() {
  const register = async (data: RegisterData, setRegister: (value: boolean) => void) => {
    try {
      await axios.post("http://localhost:3333/api/auth/register", data);
      alert("Usuário cadastrado com sucesso!");
      setRegister(false);
    } catch (error: unknown) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  };

  return { register };
}
