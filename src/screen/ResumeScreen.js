import { Flex, Link, Icon, Container } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { AiOutlineCloudDownload } from "react-icons/ai";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import Particle from "../components/Particle";

import HeroThree from "../components/HeroThree";

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/legacy/build/pdf.worker.min.js`;

const resumeLink =
  "https://gitlab.com/fs288080/portfolio/-/raw/master/src/Assests/Faisal__Resume.pdf?inline=false";

const ResumeScreen = () => {
  const [width, setWidth] = useState(1200);

  const [numPages, setNumPages] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <>
      <Particle />
      <Flex w="full" zIndex="100">
        <Container maxWidth="container.xl" mt="85px">
          <Flex direction="column" justifyContent="center" alignItems="center">
            <Flex my="10" direction="row" alignItems="center">
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
              >
                &nbsp;Download CV
              </Link>
              <Icon as={AiOutlineCloudDownload} w="8" h="8" mx="2" />
            </Flex>

            <Flex justifyContent="center" mx="0">
              <Flex display="column">
                <Document
                  file="Faisal__Resume.pdf"
                  onLoadSuccess={onDocumentLoadSuccess}
                >
                  <Page
                    pageNumber={pageNumber}
                    scale={width > 786 ? 1.2 : 0.6}
                  />
                </Document>
                {""}
                <p>
                  Page {pageNumber} of {numPages}
                </p>
              </Flex>
            </Flex>
            <HeroThree />
          </Flex>
        </Container>
      </Flex>
    </>
  );
};

export default ResumeScreen;
