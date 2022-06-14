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
      {/* <Banner
        purpose="BUY A HOME"
        title1="Buy Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Sale"
        linkName="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/173096160/253f2431365643238ce0236883ab58d2"
      />
      <Flex flexWrap="wrap" mt={6}>
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Box borderBottom="2px" borderColor="gray.200"></Box>
      <Banner
        purpose="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/170244921/9d92c8a8263f4c52a9adeebbb67ab9aa"
      />
      <Flex flexWrap="wrap" mt={6}>
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex> */}
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
