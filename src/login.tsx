import Picture from "./assets/main.png";
import Form from "./components/form";
import Logo from "./assets/logo.png";

const Login = () => {
  return (
    <main className="flex">
      <section className="w-4/6 h-screen">
        <img src={Picture} className="h-full w-full" />
      </section>

      <section className="w-1/3 h-screen p-12 flex flex-col gap-8">
        <img src={Logo} className="w-1/3" />
        <h1 className="text-xl font-semibold">Que bom ver você de novo</h1>
        <Form />
        <p className="text-xs text-center">Já tem uma conta? <span className="text-blue-500">Cadastre-se agora</span></p>
      </section>
    </main>
  );
};

export default Login;
