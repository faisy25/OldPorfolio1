import { Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex py="5" as="footer" justifyContent="center" mt="20">
        <Text fontWeight="bold" fontSize="1.5rem" color="blue.500">
          Copyright © 2022
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
