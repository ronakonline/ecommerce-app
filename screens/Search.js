import {
  extendTheme,
  HStack,
  Input,
  NativeBaseProvider,
  Switch,
  Text,
  useColorMode,
  View,
  Box,
  Button,
  ScrollView,
  Image,
  VStack,
  Heading
} from "native-base";
import React from "react";

export default function Search() {
  return (
    <View
      flex={1}
      _light={{
        bg: "#FFFFFF"
      }}
      _dark={{
        bg: "#0C0C0C"
      }}
    >
      <Box px={4} mt={4}>
        <Input
          size={"xl"}
          variant="underlined"
          placeholder="SEARCH PRODUCTS"
          _focus={{
            borderBottomColor: "black"
          }}
          _light={{
            borderBottomColor: "black"
          }}
          _dark={{
            borderBottomColor: "#868686"
          }}
        />
      </Box>

      <Box px={4} mt={6}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          <HStack space={2}>
            <Button
              size="lg"
              variant={"solid"}
              borderRadius={"none"}
              _dark={{
                borderColor: "#3E3E3E"
              }}
              _light={{
                borderColor: "black"
              }}
            >
              <Text color="white">All</Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor: "#3E3E3E"
              }}
              _light={{
                borderColor: "black"
              }}
            >
              <Text
                _dark={{
                  color: "white"
                }}
                _light={{
                  color: "black"
                }}
              >
                Tops
              </Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor: "#3E3E3E"
              }}
              _light={{
                borderColor: "black"
              }}
            >
              <Text
                _dark={{
                  color: "white"
                }}
                _light={{
                  color: "black"
                }}
              >
                Sweatshirts
              </Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor: "#3E3E3E"
              }}
              _light={{
                borderColor: "black"
              }}
            >
              <Text
                _dark={{
                  color: "white"
                }}
                _light={{
                  color: "black"
                }}
              >
                Jackets
              </Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor: "#3E3E3E"
              }}
              _light={{
                borderColor: "black"
              }}
            >
              <Text
                _dark={{
                  color: "white"
                }}
                _light={{
                  color: "black"
                }}
              >
                Pants
              </Text>
            </Button>
          </HStack>
        </ScrollView>
      </Box>

      <VStack px={4} mt={8} space={4}>
        <Box rounded={"none"} borderWidth={1} borderColor={"#979797"}>
          <HStack>
            <Image
              alt="image"
              source={{
                uri: "https://images.unsplash.com/photo-1587733861310-9f78468626a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
              }}
              w={"34%"}
              h={"110"}
            />
            <Box w={"66%"} p={4}>
              <VStack>
                <Heading size="sm" ml="-1">
                  Ribbed polo-Neck Jumper
                </Heading>
                <Text
                  fontSize="sm"
                  color={"#979797"}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  Jack & James
                </Text>
                <Text pt={2} bold fontSize="md">
                  $460.00
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <Box rounded={"none"} borderWidth={1} borderColor={"#979797"}>
          <HStack>
            <Image
              alt="image"
              source={{
                uri: "https://images.unsplash.com/photo-1587733861310-9f78468626a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
              }}
              w={"34%"}
              h={"110"}
            />
            <Box w={"66%"} p={4}>
              <VStack>
                <Heading size="sm" ml="-1">
                  Ribbed polo-Neck Jumper
                </Heading>
                <Text
                  fontSize="sm"
                  color={"#979797"}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  Jack & James
                </Text>
                <Text pt={2} bold fontSize="md">
                  $460.00
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
        <Box rounded={"none"} borderWidth={1} borderColor={"#979797"}>
          <HStack>
            <Image
              alt="image"
              source={{
                uri: "https://images.unsplash.com/photo-1587733861310-9f78468626a6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2338&q=80"
              }}
              w={"34%"}
              h={"110"}
            />
            <Box w={"66%"} p={4}>
              <VStack>
                <Heading size="sm" ml="-1">
                  Ribbed polo-Neck Jumper
                </Heading>
                <Text
                  fontSize="sm"
                  color={"#979797"}
                  fontWeight="500"
                  ml="-0.5"
                  mt="-1"
                >
                  Jack & James
                </Text>
                <Text pt={2} bold fontSize="md">
                  $460.00
                </Text>
              </VStack>
            </Box>
          </HStack>
        </Box>
      </VStack>
    </View>
  );
}
