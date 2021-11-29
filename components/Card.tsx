import { Box, BoxProps } from "@chakra-ui/react";
import styles from "./Card.module.css";

export default function Card(props: BoxProps) {
  return <Box className={styles.card} {...props} />;
}
