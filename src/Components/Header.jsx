import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [modalActivo, setModalActivo] = useState(null);

  const cerrarModal = () => setModalActivo(null);

  return (
    <>
      {/* HEADER PRINCIPAL */}
      <header className="bg-[#fdfaf7]/80 backdrop-blur-md text-[#4a2c2a] py-4 px-6 flex justify-between items-center fixed w-full top-0 left-0 z-50 border-b border-[#e6d5c3] shadow-sm">
        {/* Logo */}
        <h1 className="text-xl md:text-2xl font-bold flex items-center gap-2">
          🍓 <span>Sabores de Isa</span>
        </h1>

        {/* Menú principal (desktop) */}
        <nav className="hidden md:flex space-x-6 font-medium">
          <button onClick={() => setModalActivo("inicio")} className="hover:text-[#8b5e3c] transition">
            Inicio
          </button>
          <button onClick={() => setModalActivo("recetas")} className="hover:text-[#8b5e3c] transition">
            Recetas
          </button>
          <button onClick={() => setModalActivo("sobremi")} className="hover:text-[#8b5e3c] transition">
            Sobre mí
          </button>
          <button onClick={() => setModalActivo("contacto")} className="hover:text-[#8b5e3c] transition">
            Contacto
          </button>
        </nav>

        {/* Íconos redes sociales */}
        <div className="hidden md:flex items-center space-x-4 text-2xl">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b5e3c] transition"
          >
            <i className="bi bi-facebook"></i>
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#8b5e3c] transition"
          >
            <i className="bi bi-instagram"></i>
          </a>
        </div>

        {/* Botón hamburguesa (responsive) */}
        <button
          className="text-3xl md:hidden focus:outline-none"
          onClick={() => setMenuAbierto(!menuAbierto)}
        >
          {menuAbierto ? <FiX /> : <FiMenu />}
        </button>

        {/* Menú desplegable responsive */}
        {menuAbierto && (
          <nav className="absolute top-full left-0 w-full bg-[#fdfaf7] flex flex-col items-center space-y-4 py-6 shadow-md">
            <button onClick={() => setModalActivo("inicio")} className="hover:text-[#8b5e3c]">
              Inicio
            </button>
            <button onClick={() => setModalActivo("recetas")} className="hover:text-[#8b5e3c]">
              Recetas
            </button>
            <button onClick={() => setModalActivo("sobremi")} className="hover:text-[#8b5e3c]">
              Sobre mí
            </button>
            <button onClick={() => setModalActivo("contacto")} className="hover:text-[#8b5e3c]">
              Contacto
            </button>
            <div className="flex space-x-4 mt-4 text-2xl">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <i className="bi bi-instagram"></i>
              </a>
            </div>
          </nav>
        )}
      </header>

      {/* MODALES */}
      <AnimatePresence>
        {modalActivo && (
          <>
            {/* Fondo oscuro con desenfoque */}
            <motion.div
              key={modalActivo}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-center items-center z-50 p-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Contenido del modal */}
             <motion.div
                initial={{ y: 80, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 80, opacity: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-[#fdfaf7] text-[#4a2c2a] rounded-2xl p-6 max-w-md w-full shadow-xl relative"
              >

                <button
                  onClick={cerrarModal}
                  className="absolute top-3 right-4 text-[#8b5e3c] text-xl hover:text-[#4a2c2a]"
                >
                  ✖
                </button>

                {modalActivo === "inicio" && (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Inicio 🍓</h2>
                    <p>Bienvenida a Sabores de Isa, donde cocinar es compartir amor en cada plato.</p>
                  </>
                )}

                {modalActivo === "recetas" && (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Recetas 🍞</h2>
                    <p>Explorá nuestras recetas caseras, simples y deliciosas, hechas con ingredientes cotidianos.</p>
                  </>
                )}

                {modalActivo === "sobremi" && (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Sobre mí 👩‍🍳</h2>
                    <p>Soy Isa, amante de la cocina tradicional y los sabores que traen recuerdos felices.</p>
                  </>
                )}

                {modalActivo === "contacto" && (
                  <>
                    <h2 className="text-2xl font-bold mb-2">Contacto 📩</h2>
                    <p>Podés escribirme a <span className="font-semibold">saboresdeisa@gmail.com</span> o seguirme en redes.</p>
                  </>
                )}
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;
