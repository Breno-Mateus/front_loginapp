import { useForm } from "react-hook-form";
import { loginSchema } from "../schema/loginSchema";
import type { LoginData } from "../schema/loginSchema";
import { zodResolver } from "@hookform/resolvers/zod";

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginData>({
    resolver: zodResolver(loginSchema),
  });

  const onSubmit = (data: LoginData) => {
    console.log(data);
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
