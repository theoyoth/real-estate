import Image from "next/image";
import { Box, Text } from "@chakra-ui/react";
import bg from "../assets/image/bg.jpg";
import styles from "../styles/Home.module.css";

function Landing() {
  return (
    <Box maxH="100vh" maxW="100vw" zIndex="-10" position="relative">
      <Image
        src={bg}
        alt="bg"
        height={672}
        width={1370}
        className={styles.bgLanding}
      />
      <Box w="100%" position="absolute" top="150px" textAlign="center">
        <Text fontSize="6xl" fontWeight="bold" color="gray.100">
          Find House that you want
        </Text>
        <Text
          fontWeight="semibold"
          color="gray.200"
          fontSize="2xl"
          textShadow="1px 1px #337fba"
        >
          Find real estate you like, and live there.
        </Text>
      </Box>
    </Box>
  );
}

export default Landing;
