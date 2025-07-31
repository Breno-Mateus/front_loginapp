import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/loginSchema";
import type { LoginData } from "../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = async (data: LoginData) => {
    try {
      const response = await axios.post("http://localhost:3333/api/auth/login", data); // ou o link da sua API hospedada

      const { token, user } = response.data;

      // Salva o token no localStorage ou cookie
      localStorage.setItem("token", token);

      // Exemplo: redirecionar ou atualizar o estado do usuário
      console.log("Usuário logado:", user);

      // Redirecionar
      // navigate("/dashboard"); ← se estiver usando React Router

    } catch (error: unknown) {
      if (axios.isAxiosError(error) && error.response) {
        alert(error.response.data.message); // Erro de autenticação
      } else {
        alert("Erro ao conectar com o servidor.");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 pb-6 border-b border-gray-200">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-sm">Email</label>
        <input
          className="bg-gray-100 rounded-sm px-4 py-2 text-xs"
          type="email"
          id="email"
          {...register("email")}
          placeholder="Digite o seu email"
          required
        />
        {errors.email && <span className="text-xs text-red-500">{errors.email.message}</span>}
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-sm">Senha</label>
        <input
          className="bg-gray-100 rounded-sm px-4 py-2 text-xs"
          type="password"
          id="password"
          {...register("password")}
          placeholder="Digite a senha"
          required
        />
        {errors.password && <span className="text-xs text-red-500">{errors.password.message}</span>}
      </div>

      <button type="submit" className="bg-[#007AFF] text-white font-bold py-1 rounded-sm">Entrar</button>
    </form>
  );
};

export default Form;
