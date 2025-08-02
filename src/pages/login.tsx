import Picture from "../assets/main.png";
import FormLogin from "../components/formLogin";
import Logo from "../assets/logo.png";
import Figma from "../assets/figma.png";
import { useState } from "react";
import FormRegister from "../components/formRegister";

const Login = () => {

  const [register, setRegister] = useState(false);

  return (
    <main className="flex flex-col justify-around md:flex-row h-screen">
      <section className="hidden md:block w-1/2 xl:w-4/6 h-screen">
        <img src={Picture} className="h-full w-full" />
      </section>

      <section className="md:w-1/2 xl:w-1/3 md:h-screen p-12 flex flex-col justify-around gap-8">
        <img src={Logo} className="hidden md:block w-1/3" />

        {register ? (
          <>
          <h1 className="text-xl font-semibold">Cadastre um novo usuário</h1>
          <FormRegister setRegister={setRegister}/>
          <p className="text-xs text-center">
            Já tem uma conta?{" "}
            <a className="text-blue-500 cursor-pointer" onClick={() => setRegister(false)}>Faça o login agora</a>
          </p>
          </>
        ): (
          <>
          <h1 className="text-xl font-semibold">Que bom ver você de novo</h1>
          <FormLogin />
          <p className="text-xs text-center">
            Já tem uma conta?{" "}
            <a className="text-blue-500 cursor-pointer" onClick={() => setRegister(true)}>Cadastre-se agora</a>
          </p>
          </>
        )}
        
        <div className="flex justify-between px-4">
          <div className="flex items-center gap-1">
            <img src={Figma} />
            <p className="text-sm text-blue-400">@uiunicorn</p>
          </div>

          <p className="text-sm text-gray-400">© Perfect Login 2021</p>
        </div>
      </section>

      <section className="md:hidden flex items-center justify-center">
        <img src={Logo} className="w-2/5" />
      </section>

      <section className="flex justify-between md:hidden px-4">
        <div className="flex items-center gap-1">
          <img src={Figma} />
          <p className="text-sm text-blue-400">@uiunicorn</p>
        </div>

        <p className="text-sm text-gray-400">© Perfect Login 2021</p>
      </section>
    </main>
  );
};

export default Login;
