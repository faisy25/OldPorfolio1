import { Divider, Flex, Text } from "@chakra-ui/react";

const Footer = () => {
  const date = new Date();
  return (
    <>
      <Divider mt="10" />
      <Flex py="5" as="footer" justifyContent="center" w="100%" mt="auto">
        <Text fontWeight="bold" fontSize="1.5rem" color="blue.500">
          Copyright © {date.getFullYear()}
        </Text>
      </Flex>
    </>
  );
};

export default Footer;
