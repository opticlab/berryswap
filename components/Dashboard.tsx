import { BoxProps, Center, Heading } from "@chakra-ui/react";

export default function Dashboard(props: BoxProps) {
  return (
    <Heading as="h1" size="4xl" {...props}>
      Dashboard goes here
    </Heading>
  );
}
