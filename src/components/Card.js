import { Flex, Heading, Icon, Link, Image, Text } from "@chakra-ui/react";

export const Card = ({ children, ic }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        borderColor="2px solid #3182CE"
        p="9"
        shadow="1px 1px 4px 3px #3182CE"
        _hover={{ shadow: "5px 5px 5px 5px #3182CE" }}
        rounded="md"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Icon as={ic} my="3" w="40" h="20" />
        <Heading my="3" as="h3" fontSize="3xl">
          {children}
        </Heading>
      </Flex>
    </>
  );
};

export const ProjectCard = ({ desc, git, source, src }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        borderColor="#3182CE"
        p="3"
        shadow="lg"
        dropShadow="ld"
        shadowColor="#3182CE"
        rounded="md"
        mt="6"
        wrap="wrap"
        m="8"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Image
          my="8"
          objectFit="cover"
          src={src}
          w={{ lg: "500px", base: "200px" }}
          h={{ lg: "200px", base: "100px" }}
        />
        <Text my="8">{desc}</Text>
        <Flex my="6" gap="10">
          <Link
            p="5"
            border="1px solid #3182CE"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "blue.700", color: "white" }}
            href={git}
            target="_blank"
          >
            Browse Code
          </Link>
          <Link
            p="5"
            border="1px solid #3182CE"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "blue.700", color: "white" }}
            href={source}
            target="_blank"
          >
            Live
          </Link>
        </Flex>
      </Flex>
    </>
  );
};
