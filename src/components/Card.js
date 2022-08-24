import { Flex, Heading, Icon, Link, Image, Text } from "@chakra-ui/react";

export const Card = ({ children, ic }) => {
  return (
    <>
      <Flex
        direction="column"
        justifyContent="center"
        alignItems="center"
        borderColor="2px solid #3182CE"
        p={{ md: "9", sm: "6", base: "4" }}
        shadow="1px 1px 4px 3px #3182CE"
        _hover={{ shadow: "5px 5px 5px 5px #3182CE" }}
        rounded="md"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Icon
          as={ic}
          my="3"
          w={{ md: "40", sm: "30", base: "20" }}
          h={{ md: "20", sm: "10", base: "10" }}
        />
        <Heading
          my="3"
          as="h3"
          fontSize={{ md: "3xl", sm: "2xl", base: "1.5xl" }}
        >
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
        rounded="md"
        mt="6"
        wrap="wrap"
        m="8"
        backdropFilter="saturate(180%) blur(10px)"
      >
        <Image
          my={{ md: "8", sm: "6", base: "4" }}
          objectFit="cover"
          src={src}
          // w={{ lg: "500px", base: "200px" }}
          h={{ lg: "200px", base: "100px" }}
          maxW="100%"
        />
        <Text my={{ md: "8", sm: "6", base: "4" }} textAlign="center">
          {desc}
        </Text>
        <Flex
          my="6"
          gap={{ md: "10", sm: "8", base: "6" }}
          justifyContent="center"
          alignItems="center"
        >
          <Link
            p={{ md: "5", sm: "4", base: "3" }}
            border="1px solid #3182CE"
            rounded="md"
            shadow="md"
            _hover={{ textDecor: "none", bgColor: "blue.700", color: "white" }}
            href={git}
            target="_blank"
          >
            Code
          </Link>
          <Link
            p={{ md: "5", sm: "4", base: "3" }}
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
