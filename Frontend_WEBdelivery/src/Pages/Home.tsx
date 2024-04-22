import React from "react";
import PageTitle from "../Components/Hero";
import { ChakraProvider } from "@chakra-ui/react";


const Home = () => {
  return (
    <ChakraProvider>
      <PageTitle />
    </ChakraProvider>
  );
};

export default Home;
