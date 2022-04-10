import {
  Flex,
  Text,
  Heading,
  Link,
  Icon,
  Container,
  Box
} from "@chakra-ui/react";
import { BsLinkedin, BsInstagram, BsGithub } from "react-icons/bs";
import { FaGitlab } from "react-icons/fa";

const HeroThree = () => {
  return (
    <>
      <Container maxWidth="container.2xl" mt="10">
        <Box>
          <Flex justifyContent="center" textAlign="center" textColor="blue.500">
            <Flex direction="column">
              <Heading as="h3" mt="4">
                Find me on
              </Heading>
              <Text>Feel free to connect with me</Text>
              <Flex mt="4" direction="row" justifyContent="space-evenly">
                <Link
                  href="https://gitlab.com/fs288080"
                  color="orange.500"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={FaGitlab} w="8" h="8" />
                </Link>
                <Link
                  href="https://www.linkedin.com/in/faisal-shaikh-98b8a61ab/"
                  color="blue.700"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={BsLinkedin} w="8" h="8" />
                </Link>
                <Link
                  href="https://github.com/faisy25"
                  color="gray.600"
                  mx="3"
                  target="_blank"
                >
                  <Icon as={BsGithub} w="8" h="8" />
                </Link>
                <Link href="/" mx="3" color="brown" target="_blank">
                  <Icon as={BsInstagram} w="8" h="8" />
                </Link>
              </Flex>
            </Flex>
          </Flex>
        </Box>
      </Container>
    </>
  );
};

export default HeroThree;
