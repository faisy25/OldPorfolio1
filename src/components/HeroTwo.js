import { Flex, Heading, Image, Text, Container } from "@chakra-ui/react";

const BlueText = ({ children }) => {
  return (
    <>
      <span
        style={{
          color: "#3182CE",
          fontWeight: "bold"
        }}
      >
        {children}
      </span>
    </>
  );
};

const HeroTwo = () => {
  return (
    <>
      <Container maxWidth="container.xl" mt="20">
        <Flex direction="row" wrap="wrap" justifyContent="space-evenly">
          <Flex direction="column" justifyContent="flex-start">
            <Heading
              color="blue.500"
              fontWeight="bold"
              mt="3"
              mb="5"
              as="h2"
              fontSize="4xl"
            >
              Let me Introduce Myself,
            </Heading>

            <Text fontSize="2xl" fontWeight="medium" mt="3" mb="5">
              Passed out Diploma (Electronics & Tele-Communication) in 2018.
              <br />
              Passed out B.E (Electronics & Tele-Communication) in 2021.
            </Text>
            <Text fontSize="2xl" fontWeight="medium" mt="3" mb="5">
              An aspiring developer who loves to take on new projects that
              <br />
              challenges his analytical and technological capacities.
            </Text>
            <Text fontSize="2xl" fontWeight="medium" mt="3" mb="5">
              I am a fluent <BlueText>JavaScript</BlueText> developer.
            </Text>
            <Text fontSize="2xl" fontWeight="medium" mt="3" mb="5">
              My field of interest's are building new web applications and
              products.
            </Text>
            <Text fontSize="2xl" fontWeight="medium" mt="3" mb="5">
              Whenever possible, I apply my passion for developing products with
              <br />
              <BlueText>Node.js</BlueText> and modern{" "}
              <BlueText>Javascript</BlueText> library and frameworks like{" "}
              <BlueText>React.js</BlueText> and <BlueText>Redux</BlueText>.
            </Text>
          </Flex>
          <Flex justifyContent="center" alignItems="center" mt="5">
            <Image
              rounded="full"
              objectFit="cover"
              borderRadius="full"
              src="images/my_photo.jpg"
              w={{ lg: "300px", md: "250px", base: "200px" }}
            />
          </Flex>
        </Flex>
      </Container>
    </>
  );
};

export default HeroTwo;
