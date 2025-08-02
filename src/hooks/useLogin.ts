import axios from "axios";
import { useNavigate } from "react-router-dom";
import type { LoginData } from "../schema/loginSchema";

export function useLogin() {
  const navigate = useNavigate();

  const login = async (data: LoginData) => {
    try {
      const response = await axios.post(
        "http://localhost:3333/api/auth/login",
        data
      );

      const { token, user } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));

      alert("Login realizado com sucesso!");
      navigate("/dashboard");

    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message);
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  };

  return { login };
}
