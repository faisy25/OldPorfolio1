import { Flex, Heading, Container } from "@chakra-ui/react";
import { ProjectCard } from "../components/Card";
import HeroThree from "../components/HeroThree";
import Particle from "../components/Particle";

const ProjectScreen = () => {
  return (
    <>
      <Particle />
      <Flex w="full" zIndex="100">
        <Container maxWidth="container.xl">
          <Flex
            mt="100px"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading
              as="h2"
              fontSize={{ lg: "5xl", sm: "3xl", base: "2xl" }}
              fontWeight="bold"
              color="#3182CE"
              mt="10"
              mb={{ md: "10", sm: "5", base: "3" }}
            >
              My Recent Projects
            </Heading>
            <Flex direction="column" justifyContent="center" wrap="wrap">
              <ProjectCard
                my={{ md: "10", sm: "5" }}
                source="https://pokemon-viewer-my-project.netlify.app/"
                git="https://gitlab.com/fs288080/pokemon-viewer"
                src="images/pook.jpeg"
                desc="The App is Built in Vanilla Javascript. It Displays all the Pokemons available till date wiht the help of Poke Api."
              />
              <ProjectCard
                my={{ md: "10", sm: "5" }}
                source="https://demon-my.herokuapp.com/"
                git="https://gitlab.com/fs288080/demon"
                src="images/demon.jpeg"
                desc="E-Commerce Website completely built in MERN stack from
                Login/Signup to Paypal Payment gateway.
                Use react in frontend with redux state management, backend in
                node js & data stored in mongodb. Work on rest api ,
                authentication, cart , order, login , MVC pattern , chakra ui . "
              />
            </Flex>
            <HeroThree />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default ProjectScreen;
