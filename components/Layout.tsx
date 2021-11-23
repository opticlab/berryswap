import { Text } from "@chakra-ui/react";
import Footer from "./Footer";
import styles from "./Layout.module.css";
import NavBar from "./NavBar";

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <NavBar />

      <main className={styles.main}>{children}</main>

      <Footer />
    </>
  );
};

export default Layout;
