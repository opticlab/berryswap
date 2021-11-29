import { Text } from "@chakra-ui/react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <Text>Brought to you by 🍓</Text>
    </footer>
  );
};

export default Footer;
