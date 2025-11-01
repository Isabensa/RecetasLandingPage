import { useState } from "react";
import { motion } from "framer-motion";

function Main() {
  const [mostrarRecetas, setMostrarRecetas] = useState(false);
  const [recetaSeleccionada, setRecetaSeleccionada] = useState(null);

  // 🧁 Lista de recetas con datos reales
  const recipes = [
    {
      id: 1,
      name: "Empanadas",
      image: "/recipes/empanadas.jpeg",
      descripcion: "Clásicas empanadas argentinas con relleno jugoso y masa casera.",
      ingredientes: [
        "12 tapas de empanadas",
        "300 g carne picada",
        "1 cebolla",
        "2 huevos duros",
        "Aceitunas verdes",
        "Sal, pimienta y comino",
      ],
      pasos:
        "Rehogá la cebolla con la carne y condimentos. Agregá huevo y aceitunas picadas. Rellená las tapas, cerrá y horneá a 180°C por 20 minutos.",
    },
    {
      id: 2,
      name: "Ensalada César",
      image: "/recipes/ensaladacesar.png",
      descripcion: "Fresca y sabrosa, ideal para acompañar cualquier plato.",
      ingredientes: [
        "Lechuga romana",
        "Pollo grillado",
        "Croutones",
        "Queso parmesano",
        "Aderezo César",
      ],
      pasos:
        "Cortá la lechuga, mezclala con el pollo, croutones y parmesano. Agregá el aderezo justo antes de servir.",
    },
    {
      id: 3,
      name: "Lasagna",
      image: "/recipes/lasagna.jpg",
      descripcion: "Capas de sabor con carne, salsa y queso gratinado.",
      ingredientes: [
        "Láminas de lasagna",
        "Carne picada",
        "Salsa de tomate",
        "Queso mozzarella",
        "Bechamel",
      ],
      pasos:
        "Cociná la carne con salsa. Armá capas alternando pasta, carne y queso. Cubrí con bechamel y horneá 30 min a 180°C.",
    },
    {
      id: 4,
      name: "Ñoquis",
      image: "/recipes/ñoquis.jpeg",
      descripcion: "Tiernos y caseros, perfectos con tu salsa favorita.",
      ingredientes: ["1 kg papas", "300 g harina", "1 huevo", "Sal y nuez moscada"],
      pasos:
        "Herví las papas, hacé puré, agregá harina y huevo. Formá tiras, cortá ñoquis y hervilos hasta que suban a la superficie.",
    },
    {
      id: 5,
      name: "Pasta Alfredo",
      image: "/recipes/pastaalfredo.png",
      descripcion: "Una receta cremosa y deliciosa lista en minutos.",
      ingredientes: [
        "200 g fideos",
        "1 taza crema de leche",
        "Queso parmesano",
        "Manteca y ajo",
      ],
      pasos:
        "Cociná la pasta. En una sartén, derretí manteca, agregá ajo, crema y queso. Mezclá con la pasta caliente.",
    },
    {
      id: 6,
      name: "Pizza Casera",
      image: "/recipes/pizza.png",
      descripcion: "Masa esponjosa, salsa casera y el toque que más te guste.",
      ingredientes: [
        "500 g harina",
        "300 ml agua tibia",
        "10 g levadura",
        "Salsa de tomate",
        "Queso mozzarella",
      ],
      pasos:
        "Prepará la masa con harina, agua y levadura. Dejá levar, estirá, agregá salsa y queso. Horneá a 220°C por 15 minutos.",
    },
  ];

  return (
    <main className="container mx-auto px-4 pt-[120px] pb-12 bg-[#fdfaf7] min-h-screen flex flex-col items-center text-center">
      {/* Sección principal */}
      <div className="flex flex-col md:flex-row items-center justify-center gap-10 w-full">
        {/* Imagen de cocinera */}
        <motion.div
          className="w-full md:w-1/3 flex justify-center"
          initial={{ opacity: 0, x: -50 }}
          animate={{
            opacity: 1,
            x: 0,
            y: [0, -10, 0],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          whileHover={{ scale: 1.1 }}
        >
          <img
            src="/recipes/cocinera.jpg"
            alt="Cocinera"
            className="max-w-[220px] md:max-w-[260px] rounded-full shadow-md"
          />
        </motion.div>

        {/* Texto y botón */}
        <motion.div
          className="w-full md:w-2/3 flex flex-col items-center justify-center text-center"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h2 className="text-3xl md:text-4xl font-dancing text-[#8b5e3c] mb-2">
            “Cocinar es un acto de amor que se sirve en cada plato.”
          </h2>

          <p className="text-lg text-[#4a2c2a] mt-2 leading-relaxed w-3/4 md:w-2/3">
            Bienvenida a <span className="font-semibold">Sabores de Isa</span> 🍓 un rincón donde lo casero se mezcla con el cariño. Encontrá recetas simples, deliciosas y llenas de amor.
          </p>

          <button
            onClick={() => setMostrarRecetas(!mostrarRecetas)}
            className="mt-6 bg-[#cfa18d] text-white py-3 px-8 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105 hover:bg-[#8b5e3c]"
          >
            {mostrarRecetas ? "Ocultar Recetas Populares" : "Ver Recetas Populares"}
          </button>
        </motion.div>
      </div>

      {/* Sección de recetas */}
      {mostrarRecetas && (
        <motion.section
          className="mt-12 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
        >
          {recipes.map((recipe) => (
            <motion.div
              key={recipe.id}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col items-center justify-center hover:shadow-lg transition-transform transform hover:scale-105 cursor-pointer"
              whileHover={{ y: -5 }}
              onClick={() => setRecetaSeleccionada(recipe)}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                className="w-28 h-28 object-cover rounded-md mb-2"
              />
              <h3 className="text-[#4a2c2a] font-semibold text-md">{recipe.name}</h3>
              <p className="text-sm text-gray-600 mt-1">{recipe.descripcion}</p>
            </motion.div>
          ))}
        </motion.section>
      )}

      {/* Modal de receta */}
      {recetaSeleccionada && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="bg-white rounded-2xl p-6 max-w-md w-full text-left shadow-xl"
          >
            <img
              src={recetaSeleccionada.image}
              alt={recetaSeleccionada.name}
              className="rounded-md mb-4 w-full"
            />
            <h2 className="text-2xl font-semibold text-[#8b5e3c] mb-3">
              {recetaSeleccionada.name}
            </h2>

            <h3 className="font-semibold text-[#4a2c2a] mb-1">Ingredientes:</h3>
            <ul className="list-disc ml-5 mb-3 text-gray-700">
              {recetaSeleccionada.ingredientes.map((i, idx) => (
                <li key={idx}>{i}</li>
              ))}
            </ul>

            <h3 className="font-semibold text-[#4a2c2a] mb-1">Preparación:</h3>
            <p className="text-gray-700">{recetaSeleccionada.pasos}</p>

            <div className="text-center mt-6">
              <button
                onClick={() => setRecetaSeleccionada(null)}
                className="bg-[#cfa18d] text-white py-2 px-8 rounded-full font-semibold hover:bg-[#8b5e3c]"
              >
                Cerrar
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </main>
  );
}

export default Main;
