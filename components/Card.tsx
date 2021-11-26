import { Box, BoxProps } from "@chakra-ui/layout";
import styles from "./Card.module.css";

interface CardProps extends BoxProps {}

const Card: React.FC<CardProps> = (props) => {
  return <Box className={styles.card} {...props} />;
};

export default Card;
