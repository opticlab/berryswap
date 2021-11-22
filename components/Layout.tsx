import { Container, ContainerProps, Text } from "@chakra-ui/react";
import NavBar from "./NavBar";
import styles from "./Layout.module.css";
import Dashboard from "./Dashboard";

const Layout: React.FC<ContainerProps> = ({ children, ...props }) => {
  return (
    <Container maxWidth="100%" p={0} {...props}>
      <header>
        <NavBar />
      </header>

      <main className={styles.main}>{children}</main>

      <footer className={styles.footer}>
        <Text>Brought to you by 🍓</Text>
      </footer>
    </Container>
  );
};

export default Layout