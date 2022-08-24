import { Flex, Text, Image, Grid } from "@chakra-ui/react";
import Type from "../components/Type";

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

const HeroOne = () => {
  return (
    <>
      <Grid
        templateColumns={{ md: "6fr 6fr", sm: "12fr", base: "12fr" }}
        gap={6}
        mx="auto"
        mt={{ md: "20", sm: "20", base: "20" }}
      >
        <Flex direction="column">
          <Text as="h2" fontSize={{ lg: "5xl", base: "3xl" }} fontWeight="bold">
            Hi there, <span>👋🏻</span>
          </Text>

          <Text as="h2" fontSize={{ lg: "5xl", base: "3xl" }} fontWeight="bold">
            I am ,<br />
            <BlueText>Faisal Shaikh</BlueText>
          </Text>

          <Flex>
            <Type />
          </Flex>
        </Flex>
        <Flex mt="10" justifyContent="center">
          <Image
            src="images/home_image.svg"
            objectFit="cover"
            w={{ lg: "600px", md: "400px", sm: "300px", base: "250px" }}
          />
        </Flex>
      </Grid>
    </>
  );
};

export default HeroOne;
