import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo.png";

const Dashboard = () => {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");

    if (!token || !user) {
      navigate("/");
    } else {
      const parsedUser = JSON.parse(user);
      setUserName(parsedUser.name);
    }
  }, [navigate]);

  return (
    <div className="h-screen flex flex-col gap-40">
      <header className="flex items-center justify-between p-4 border-b border-gray-200">
        <img src={Logo} alt="Logo" />

        <nav>
          <button
            onClick={() => {
              localStorage.removeItem("token");
              localStorage.removeItem("user");
              navigate("/");
            }}
            className="mt-4 bg-blue-500 text-white font-bold px-4 py-2 rounded cursor-pointer hover:opacity-90"
          >
            Sair
          </button>
        </nav>
      </header>

      <main>
        <h1 className="text-4xl font-semibold text-center">
          Seja bem-vindo, <span className="text-blue-500">{userName}</span>!
        </h1>
      </main>
    </div>
  );
};

export default Dashboard;
