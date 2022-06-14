import NextLink from "next/link";
import Image from "next/image";
import { Box, Flex, Container, Button, Text } from "@chakra-ui/react";

import { fetchApi, baseUrl } from "../utils/fetchApi";
import Property from "../components/Property";
import Landing from "../components/Landing";

const Banner = ({
  purpose,
  title1,
  title2,
  desc1,
  desc2,
  buttonText,
  linkName,
  imageUrl,
}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" mt={5}>
    <Image src={imageUrl} width={500} height={300} alt={title1} />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">
        {purpose}
      </Text>
      <Text fontSize="2xl" fontWeight="bold">
        {title1}
        <br />
        {title2}
      </Text>
      <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">
        {desc1}
        <br />
        {desc2}
      </Text>
      <Button
        fontSize="xl"
        bg="blue.400"
        color="white"
        border="none"
        paddingTop="10px"
        paddingBottom="10px"
        borderRadius="6px"
      >
        <NextLink href={linkName}>
          <a>{buttonText}</a>
        </NextLink>
      </Button>
    </Box>
  </Flex>
);

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Box>
      <Landing />
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6`
  );
  const propertyForRent = await fetchApi(
    `${baseUrl}/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6`
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
