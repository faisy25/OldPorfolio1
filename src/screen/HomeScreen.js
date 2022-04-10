import { Flex, Container } from "@chakra-ui/react";
import HeroOne from "../components/HeroOne";
import HeroTwo from "../components/HeroTwo";
import HeroThree from "../components/HeroThree";
import Particle from "../components/Particle";

const HomeScreen = () => {
  return (
    <>
      <Particle />
      <Flex mt="85px" w="full" zIndex="100">
        <Container maxWidth="container.xl">
          <Flex direction="column">
            {/* section 1 */}
            <HeroOne />
            <HeroTwo mt="10" />
            <HeroThree />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};
export default HomeScreen;
// faisal-portfolio-react
