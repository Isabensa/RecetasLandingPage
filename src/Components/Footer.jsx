import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-[#8b5e3c] text-white py-6 text-center mt-12">
      <motion.p
        className="text-lg font-semibold"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        Hecho con 💗 por Isabel - 2024
      </motion.p>
    </footer>
  );
}

export default Footer;
