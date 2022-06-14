import { Flex, Box, Text, Spacer, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from "react-icons/fa";
import { BsGridFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";
import millify from "millify";
import { fetchApi, baseUrl } from "../../utils/fetchApi";
import ImageScrollbar from "../../components/ImageScrollbar";

const PropertyDetails = ({
  propertyDetails: {
    price,
    rentFrequency,
    rooms,
    baths,
    title,
    area,
    agency,
    isVerified,
    description,
    type,
    purpose,
    furnishingStatus,
    amenities,
    photos,
  },
}) => {
  return (
    <Box maxWidth="1000px" margin="auto" p="4">
      {photos && <ImageScrollbar data={photos} />}
      <Box w="95%" m="auto" mt="5">
        <Flex alignItems="center">
          <Box paddingRight="3" color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontWeight="bold" fontSize="lg">
            AED {millify(price)}
            {rentFrequency && `/${rentFrequency}`}
          </Text>
        </Flex>
        <Flex
          alignItems="center"
          p="1"
          justifyContent="space-between"
          w="250px"
          color="blue.400"
        >
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft{" "}
          <BsGridFill />
        </Flex>
        <Text fontSize="lg" fontWeight="bold">
          {title}
        </Text>
        <Text pt="6px" pb="6px" borderBottom="1px" borderColor="gray.200">
          {description}
        </Text>
        <Flex
          flexWrap="wrap"
          justifyContent="space-between"
          alignItems="center"
          pb="10px"
          pt="10px"
          borderBottom="1px"
          borderColor="gray.200"
        >
          <Flex
            w="400px"
            justifyContent="space-between"
            alignItems="center"
            textTransform="uppercase"
          >
            <Text fontWeight="bold">Type</Text>
            <Text>{type}</Text>
          </Flex>
          <Flex
            w="400px"
            justifyContent="space-between"
            alignItems="center"
            textTransform="uppercase"
          >
            <Text fontWeight="bold">purpose</Text>
            <Text>{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex
              w="400px"
              justifyContent="space-between"
              alignItems="center"
              textTransform="uppercase"
            >
              <Text fontWeight="bold">furnishing status</Text>
              <Text>{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box mt="4px">
          {amenities.length && (
            <Text fontSize="2xl" fontWeight="bold">
              Properties
            </Text>
          )}
          <Flex flexWrap="wrap">
            {amenities.map((item) =>
              item.amenities.map((amenity) => (
                <Text
                  key={amenity.text}
                  bgColor="blue.300"
                  borderRadius="5px"
                  p="2"
                  fontSize="16px"
                  m="1"
                >
                  {amenity.text}
                </Text>
              ))
            )}
          </Flex>
        </Box>
      </Box>
    </Box>
  );
};

export default PropertyDetails;

export async function getServerSideProps({ params: { id } }) {
  const data = await fetchApi(`${baseUrl}/properties/detail?externalID=${id}`);

  return {
    props: {
      propertyDetails: data,
    },
  };
}
