"use client";

import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
  Image,
} from "@chakra-ui/react";

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={"5xl"}>
      <Stack
        textAlign={"center"}
        align={"center"}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: "3xl", sm: "4xl", md: "6xl" }}
          lineHeight={"110%"}
        >
          WEB{" "}
          <Text as={"span"} color={"orange.400"}>
            Delivery
          </Text>
        </Heading>
        <Text color={"gray.500"} maxW={"3xl"}>
          Commandez vos repas preferes jusqu'a chez vous, en quelques clics
          simplement.
        </Text>
        <Stack spacing={6} direction={"row"}>
          <Button
            rounded={"full"}
            px={6}
            onClick={() => {
              window.location.href = "/Menu";
            }}
            colorScheme={"orange"}
            bg={"orange.400"}
            _hover={{ bg: "orange.500" }}
          >
            Visiter le restaurant
          </Button>
        </Stack>
        <Flex w={"full"}>
          <Image src=""></Image>
        </Flex>
      </Stack>
    </Container>
  );
}
