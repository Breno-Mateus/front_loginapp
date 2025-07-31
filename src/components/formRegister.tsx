import { useForm } from "react-hook-form";
import { registerSchema, type RegisterData } from "../schema/registerSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";

type Props ={
  setRegister: (value: boolean) => void;
};

const FormRegister = ({setRegister} : Props) => {

  const { register, handleSubmit, reset, formState: { errors } } = useForm<RegisterData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterData) => {
    try{
      await axios.post("http://localhost:3333/api/auth/register", data);
      reset();
      alert("Usuário cadastrado com sucesso!");
      setRegister(false);
    } catch (error: unknown) {
      console.error("Erro ao cadastrar usuário:", error);
      alert("Erro ao cadastrar usuário. Tente novamente.");
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4 pb-6 border-b border-gray-200">
      <div className="flex flex-col gap-1">
        <label htmlFor="name" className="text-sm">Nome</label>
        <input
          className="bg-gray-100 rounded-sm px-4 py-2 text-xs"
          type="text"
          id="name"
          {...register("name")}
          placeholder="Digite o seu nome"
          required
        />
        {errors.name && <span className="text-xs text-red-500">{errors.name.message}</span>}
      </div>

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

      <button type="submit" className="bg-[#007AFF] text-white font-bold py-1 rounded-sm cursor-pointer hover:opacity-90">Cadastrar</button>
    </form>
  )
};

export default FormRegister;