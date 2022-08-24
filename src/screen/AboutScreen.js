import { Flex, Text, Heading, Image, Container, Grid } from "@chakra-ui/react";
import {
  DiJavascript1,
  DiNodejs,
  DiHtml5,
  DiCss3,
  DiReact,
  DiMongodb,
  DiMysql
} from "react-icons/di";
import {
  SiRedux,
  SiChakraui,
  SiVisualstudiocode,
  SiPostman,
  SiBootstrap,
  SiLeetcode
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
    { skill: "Bootstrap", ic: SiBootstrap },
    { skill: "MySql", ic: DiMysql }
  ];

  const tools = [
    { skill: "VsCode", ic: SiVisualstudiocode },
    { skill: "PostMan", ic: SiPostman },
    { skill: "Git", ic: AiFillGithub },
    { skill: "Leetcode", ic: SiLeetcode }
  ];

  const others = [
    { skill: "Football", ic: BiFootball },
    { skill: "Cricket", ic: GiCricketBat },
    { skill: "V Games", ic: CgGames },
    { skill: "Fitness", ic: IoIosFitness }
  ];

  return (
    <>
      <Particle />
      <Flex w="full" zIndex="100" marginTop="40px">
        <Container maxWidth="container.xl" mt="100px">
          <Grid templateColumns={{ md: "6fr 6fr", sm: "12fr", base: "12fr" }}>
            <Flex mx="10" direction="column">
              <Heading
                as="h2"
                fontWeight="medium"
                fontSize={{ lg: "4xl", md: "3xl", sm: "2xl", base: "1xl" }}
              >
                Know who <BlueText>I am,</BlueText>
              </Heading>
              <Text
                fontSize={{ lg: "2xl", base: "1xl" }}
                fontWeight="medium"
                my="1"
              >
                Hello everyone , I'm <BlueText>Faisal Shaikh</BlueText> born and
                broughtup in Mumbai , India.
              </Text>
              <Text
                fontSize={{ lg: "2xl", base: "1xl" }}
                fontWeight="medium"
                my="1"
              >
                I have completed my{" "}
                <BlueText>B.E in Electronics & Tele-Communication</BlueText>{" "}
                from Don Bosco Institue of Technology in 2021.
              </Text>
              <Text
                fontSize={{ lg: "2xl", base: "1xl" }}
                fontWeight="medium"
                my="1"
              >
                I am fluent in <BlueText>JavaScript</BlueText> and in{" "}
                <BlueText>MERN Stack</BlueText> .
              </Text>
            </Flex>
            <Flex justifyContent="center" alignItems="center">
              <Image
                src="images/about.svg"
                w={{ md: "450px", sm: "350px", base: "300px" }}
                h={{ md: "300px", sm: "250px", base: "200px" }}
                mt="20px"
              />
            </Flex>
          </Grid>

          <Flex
            mt="10"
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ md: "5xl", sm: "3xl", base: "2xl" }}>
              <BlueText>Professional</BlueText> Skillset
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-evenly"
              gap="10"
              mt={{ md: "20", sm: "10", base: "10" }}
            >
              {skill.map((item) => (
                <Card key={item.skill} ic={item.ic}>
                  {item.skill}
                </Card>
              ))}
            </Flex>
          </Flex>

          <Flex
            mt={{ md: "20", sm: "10", base: "10" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ md: "5xl", sm: "3xl", base: "2xl" }}>
              <BlueText>Tools</BlueText> Skillset
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-evenly"
              mt={{ md: "20", sm: "10", base: "10" }}
              gap="10"
            >
              {tools.map((item) => (
                <Card key={item.skill} ic={item.ic}>
                  {item.skill}
                </Card>
              ))}
            </Flex>
          </Flex>

          <Flex
            mt={{ md: "20", sm: "10", base: "10" }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Heading as="h2" fontSize={{ md: "5xl", sm: "3xl", base: "2xl" }}>
              <BlueText>Other</BlueText> Skillset
            </Heading>
            <Flex
              direction="row"
              wrap="wrap"
              justifyContent="space-evenly"
              mt={{ md: "20", sm: "10", base: "10" }}
              gap="10"
            >
              {others.map((item) => (
                <Card key={item.skill} ic={item.ic}>
                  {item.skill}
                </Card>
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
              p={{ md: "10", sm: "5", base: "5" }}
              mt={{ md: "10", sm: "5", base: "5" }}
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
