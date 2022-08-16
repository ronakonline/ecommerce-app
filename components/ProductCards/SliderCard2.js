import React from "react";
import { Box, Heading, AspectRatio, Image, Text, Center, HStack, Stack, NativeBaseProvider } from "native-base";

export default function SliderCard() {
  return (
    <Box alignItems="center" maxW={"4/6"}>
      <Box  >
        <Box>
          <AspectRatio w="100%" ratio={4/3} height={"150"}>
            <Image source={{
            uri: "https://images.unsplash.com/photo-1471017851983-fc49d89c57c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
          }} alt="image" />
          </AspectRatio>
        </Box>
          <Stack space={2} px={3} py={2}>
            <Heading size="sm" ml="-1">
            Ribbed polo-Neck Jumper
            </Heading>
            <Text fontSize="sm" color={"#979797"} fontWeight="500" ml="-0.5" mt="-1">
              Jack & James
            </Text>
            <Text fontSize="sm" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              $460.00
            </Text>
          </Stack>
      </Box>
    </Box>
  );
}
