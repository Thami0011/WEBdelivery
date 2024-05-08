import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

export default function CallToActionWithIllustration() {
  const [imageSrc, setImageSrc] = useState("");

  useEffect(() => {
    import("../assets/image.jpg").then((image) => {
      setImageSrc(image.default);
    });
  }, []);

  return (
    <Container
      maxW={"100vw"}
      style={{
        backgroundImage: `url(${imageSrc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        filter: "brightness(0.8)",
      }}
    >
      <Stack
        textAlign={"left"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
        w={"100%"}
        align="left"
        marginLeft={{ base: "20px", md: "40px" }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
          color={"black"}
        >
          WEB{" "}
          <Text as={"span"} color={"orange.400"}>
            Delivery
          </Text>
        </Heading>
        <Text
          color={"black"}
          maxW={"3xl"}
          fontSize={"xl"}
          fontFamily={"'Roboto', sans-serif"}
          fontWeight={"bold"}
        >
          Commandez vos repas préférés jusqu'à chez vous, en quelques clics
          simplement.
        </Text>
        <Button
          rounded={"full"}
          px={8}
          py={4}
          fontSize={"xl"}
          onClick={() => {
            window.location.href = "/Menu";
          }}
          colorScheme={"orange.400"}
          bg={"orange"}
          _hover={{ bg: "orange.500" }}
          alignSelf="flex-start" // Aligner le bouton à gauche
        >
          Voir le menu
        </Button>
      </Stack>
    </Container>
  );
}
