import { motion } from "framer-motion";

import TitleHome from "../components/TitleHome/TitleHome";

const styles = {
  container: {
    minHeight: "calc(100vh - 50px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
};

const HomePage = () => {
  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <TitleHome>Welcome to the contact book 🗄️ </TitleHome>
      </motion.div>
    </div>
  );
};

export default HomePage;
