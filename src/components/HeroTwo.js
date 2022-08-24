import { Flex, Heading, Image, Text, Grid } from "@chakra-ui/react";

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
      <Grid
        mt="20"
        templateColumns={{ md: "6fr 6fr", sm: "12fr", base: "12fr" }}
        gap={6}
        mx="auto"
      >
        <Flex direction="column" justifyContent="flex-start">
          <Heading
            color="blue.500"
            fontWeight="bold"
            my="2"
            as="h2"
            fontSize={{ base: "2xl", sm: "2xl", md: "4xl" }}
          >
            Let me Introduce Myself,
          </Heading>

          <Text
            fontSize={{ md: "2xl", sm: "1xl", base: "1xl" }}
            fontWeight="medium"
            my="1"
          >
            Passed out Diploma (Electronics & Tele-Communication) in 2018.
            <br />
            Passed out B.E (Electronics & Tele-Communication) in 2021.
          </Text>
          <Text
            fontSize={{ md: "2xl", sm: "1xl", base: "1xl" }}
            fontWeight="medium"
            my="1"
          >
            An aspiring developer who loves to take on new projects that
            challenges his analytical and technological capacities.
          </Text>
          <Text
            fontSize={{ md: "2xl", sm: "1xl", base: "1xl" }}
            fontWeight="medium"
            my="1"
          >
            I am a fluent <BlueText>JavaScript</BlueText> developer.
          </Text>
          <Text
            fontSize={{ md: "2xl", sm: "1xl", base: "1xl" }}
            fontWeight="medium"
            my="1"
          >
            My field of interest's are building new web applications and
            products.
          </Text>
          <Text
            fontSize={{ md: "2xl", sm: "1xl", base: "1xl" }}
            fontWeight="medium"
            my="1"
          >
            Whenever possible, I apply my passion for developing products with{" "}
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
      </Grid>
    </>
  );
};

export default HeroTwo;
