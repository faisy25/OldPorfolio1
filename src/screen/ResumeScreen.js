import { Flex, Link, Icon, Grid, Text } from "@chakra-ui/react";
import React, { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../components/Particle";
import classes from "../css/pdf.module.css";

import HeroThree from "../components/HeroThree";

const resumeLink =
  "https://gitlab.com/fs288080/portfolio/-/raw/master/src/Assests/resume.pdf?inline=false";

const ResumeScreen = () => {
  const [numPages, setNumPages] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);
  const [show, setShow] = useState(true);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const showResume = () => {
    setShow(show);
  };
  const notShowResume = () => {
    setShow(!show);
  };

  return (
    <>
      <Particle />
      <Flex
        w="full"
        zIndex="100"
        mt="85px"
        alignItems="center"
        justifyContent="center"
      >
        <Grid>
          <Flex justifyContent="center" alignItems="center" my="10">
            <Link
              border="1px solid blue"
              bgColor="#3182CE"
              p="2"
              rounded="md"
              shadow="md"
              href={resumeLink}
              color="white"
              _hover={{ textDecor: "none" }}
              textAlign="center"
              fontSize="1rem"
            >
              Download CV <Icon as={AiOutlineCloudDownload} w="4" h="4" />
            </Link>
          </Flex>

          <Flex
            justifyContent="center"
            align="center"
            mx="0"
            display={{
              md: showResume ? "block" : "none",
              base: notShowResume ? "none" : "block"
            }}
          >
            {show && (
              <Flex direction="column">
                <Document
                  file="resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page className={classes.reactpdf} pageNumber={pageNumber} />
                </Document>

                <Text>
                  Page {pageNumber} of {numPages}
                </Text>
              </Flex>
            )}
            {!show && <Text></Text>}
          </Flex>

          <Flex>
            <HeroThree />
          </Flex>
        </Grid>
      </Flex>
    </>
  );
};

export default ResumeScreen;
