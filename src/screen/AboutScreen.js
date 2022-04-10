import { Flex, Text, Heading, Image, Container } from "@chakra-ui/react";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb
} from "react-icons/di";
import {
  SiRedux,
  SiChakraui,
  SiVisualstudiocode,
  SiPostman,
  SiBootstrap
} from "react-icons/si";
import { BiFootball } from "react-icons/bi";
import { CgGames } from "react-icons/cg";
import { GiCricketBat } from "react-icons/gi";
import { IoIosFitness } from "react-icons/io";
import { AiFillGithub } from "react-icons/ai";
import { Card } from "../components/Card";

import GitHubCalendar from "react-github-calendar";
import Particle from "../components/Particle";

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

const AboutScreen = () => {
  const skill = [
    { skill: "JavaScript", ic: DiJavascript1 },
    { skill: "Node js", ic: DiNodejs },
    { skill: "React js", ic: DiReact },
    { skill: "Mongo DB", ic: DiMongodb },
    { skill: "Redux", ic: SiRedux },
    { skill: "HTML", ic: DiHtml5 },
    { skill: "CSS", ic: DiCss3 },
    { skill: "Chakra UI", ic: SiChakraui },
    { skill: "Bootstrap", ic: SiBootstrap }
  ];

  const tools = [
    { skill: "VsCode", ic: SiVisualstudiocode },
    { skill: "PostMan", ic: SiPostman },
    { skill: "Git", ic: AiFillGithub }
  ];

  const others = [
    { skill: "Football", ic: BiFootball },
    { skill: "Cricket", ic: GiCricketBat },
    { skill: "Video games", ic: CgGames },
    { skill: "Fitness", ic: IoIosFitness }
  ];

  return (
    <>
      <Particle />
      <Flex w="full" zIndex="100" marginTop="40px">
        <Container maxWidth="container.xl" mt="100px">
          <Flex direction="row" wrap="wrap" justifyContent="space-evenly">
            <Flex mx="10" direction="column">
              <Heading
                as="h2"
                fontWeight="medium"
                fontSize={{ lg: "4xl", base: "2xl" }}
              >
                Know who <BlueText>I am,</BlueText>
              </Heading>
              <Text
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                Hello everyone , I'm <BlueText>Faisal Shaikh</BlueText> <br />
                born and broughtup in Mumbai , India.
              </Text>
              <Text
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                I have completed my{" "}
                <BlueText>B.E in Electronics & Tele-Communication</BlueText>{" "}
                from <br /> Don Bosco Institue of Technology in 2021.
              </Text>
              <Text
                fontSize={{ lg: "2xl", base: "xl" }}
                fontWeight="medium"
                mt="3"
                mb="2"
              >
                I am fluent in <BlueText>JavaScript</BlueText> and in{" "}
                <BlueText>MERN Stack</BlueText> .
              </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Image
                src="images/about.svg"
                w="400px"
                h="300px"
                mt={{ md: "20px", base: "2rem" }}
              />
            </Flex>
          </Flex>

          <Flex
            mt="10"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ md: "5xl", base: "3xl" }}>
              <BlueText>Professional</BlueText> Skillset
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-evenly"
              gap="10"
              mt="20"
            >
              {skill.map((item) => (
                <Card ic={item.ic}>{item.skill}</Card>
              ))}
            </Flex>
          </Flex>

          <Flex
            mt="20"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ md: "5xl", base: "3xl" }}>
              <BlueText>Tools</BlueText> Skillset
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-evenly"
              mt="20"
              gap="10"
            >
              {tools.map((item) => (
                <Card ic={item.ic}>{item.skill}</Card>
              ))}
            </Flex>
          </Flex>

          <Flex
            mt="20"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ md: "5xl", base: "3xl" }}>
              <BlueText>Other</BlueText> Skillset
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-evenly"
              mt="20"
              gap="10"
            >
              {others.map((item) => (
                <Card ic={item.ic}>{item.skill}</Card>
              ))}
            </Flex>
          </Flex>

          <Flex
            mt="20"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ md: "5xl", base: "3xl" }}>
              Days <BlueText>I code </BlueText>
            </Heading>
            <Flex
              p="10"
              mt="10"
              direction="row"
              justifyContent="center"
              wrap="wrap"
              gap="20"
              backdropFilter="saturate(180%) blur(10px)"
            >
              <GitHubCalendar
                username="faisy25"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
              />
            </Flex>
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default AboutScreen;
