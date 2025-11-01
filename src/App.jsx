import { useState } from "react";
import Header from "./Components/Header";
import Main from "./Components/Main";
import Footer from "./Components/Footer";

function App() {
  // Estado para controlar si el menú responsive está abierto o cerrado
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <div
      className={`font-poppins bg-[#fdfaf7] text-[#4a2c2a] min-h-screen flex flex-col transition-all duration-300`}
    >
      {/* Header */}
      <Header menuAbierto={menuAbierto} setMenuAbierto={setMenuAbierto} />

      {/* Contenedor principal */}
      <div
        className={`${
          menuAbierto ? "mt-40" : "mt-0"
        } flex-grow transition-all duration-300`}
      >
        <Main />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
