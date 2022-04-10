// import { Flex } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screen/HomeScreen";
import AboutScreen from "./screen/AboutScreen";
import ProjectScreen from "./screen/ProjectScreen";
import ResumeScreen from "./screen/ResumeScreen";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <>
      <Header />
      <Flex>
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/about" element={<AboutScreen />} />
          <Route path="/projects" element={<ProjectScreen />} />
          <Route path="/resume" element={<ResumeScreen />} />
        </Routes>
      </Flex>
      <Footer />
    </>
  );
};

export default App;
