import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
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
  Heading,
 AspectRatio, Center, Stack,
} from "native-base";
import React from "react";
import BottomNavigation from "./components/layout/BottomNavigation";
import HeaderNavigation from "./components/layout/HeaderNavigation";
import Home from "./screens/Home";
import Search from "./screens/Search";
import BackHeader from "./components/layout/BackHeader";
import { Rating } from "react-native-ratings";
import { MaterialIcons } from '@expo/vector-icons';

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark"
};

// extend the theme
export const theme = extendTheme({ config });

function Category() {
  return (
    <>
      <BackHeader />
      <View
        px={4}
        style={{ flex: 1 }}
        _light={{
          bg: "#FFFFFF"
        }}
        _dark={{
          bg: "#0C0C0C"
        }}
      >
        <HStack flexWrap="wrap">
            <Box
              maxW="48%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: "gray.50"
              }}
              p={3}
              mr={3}
            >
              <Box rounded={"lg"}>
                <AspectRatio w="100%" ratio={3/3}>
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }}
                    alt="image"
                    rounded={"lg"}
                  />
                </AspectRatio>
              </Box>
              <Stack pt={1} space={3}>
                <Stack space={4}>
                  <Text 
                    fontStyle={"normal"}
                    bold
                    fontSize={13}
                    fontWeight={"bold"}
                    letterSpacing={0.5}

                  >
                  Nike Air Max 270 React ENG
                  </Text>
                  {/* <Box h={10} w={100} >
                  <Rating ratingCount={5} startingValue={4} readonly={true}
                    style={{
                      fontSize:10
                    }}
                  />
                  </Box> */}
                  <Stack space={2}>
                  <Text
                     fontStyle={"normal"}
                     fontSize={12}
                     fontWeight={700}
                     letterSpacing={0.5}
                    _light={{
                      color: "violet.500"
                    }}
                    _dark={{
                      color: "violet.400"
                    }}
                  >
                    $460.00
                  </Text>
                  <HStack w={100} alignItems="center" justifyContent={"space-between"} space={2}>
                    <Text
                      color={"#9098B1"}
                      fontStyle={"normal"}
                     fontSize={10}
                     fontWeight={400}
                     letterSpacing={0.5}
                     textDecorationLine="line-through"
                    >
                      $550.00
                    </Text>
                    <Text
                     color={"#FB7181"}
                     fontStyle={"normal"}
                    fontSize={10}
                    fontWeight={700}
                    letterSpacing={0.5}
                    >
                      24% Off
                    </Text>
                    {/* <MaterialIcons name="delete-outline" size={24} color="black" /> */}
                  </HStack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Box
              maxW="48%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: "gray.50"
              }}
              p={3}
            >
              <Box rounded={"lg"}>
                <AspectRatio w="100%" ratio={3/3}>
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }}
                    alt="image"
                    rounded={"lg"}
                  />
                </AspectRatio>
              </Box>
              <Stack pt={1} space={3}>
                <Stack space={4}>
                  <Text 
                    fontStyle={"normal"}
                    bold
                    fontSize={13}
                    fontWeight={"bold"}
                    letterSpacing={0.5}

                  >
                  Nike Air Max 270 React ENG
                  </Text>
                  {/* <Box h={10} w={100} >
                  <Rating ratingCount={5} startingValue={4} readonly={true}
                    style={{
                      fontSize:10
                    }}
                  />
                  </Box> */}
                  <Stack space={2}>
                  <Text
                     fontStyle={"normal"}
                     fontSize={12}
                     fontWeight={700}
                     letterSpacing={0.5}
                    _light={{
                      color: "violet.500"
                    }}
                    _dark={{
                      color: "violet.400"
                    }}
                  >
                    $460.00
                  </Text>
                  <HStack w={100} alignItems="center" justifyContent={"space-between"} space={2}>
                    <Text
                      color={"#9098B1"}
                      fontStyle={"normal"}
                     fontSize={10}
                     fontWeight={400}
                     letterSpacing={0.5}
                     textDecorationLine="line-through"
                    >
                      $550.00
                    </Text>
                    <Text
                     color={"#FB7181"}
                     fontStyle={"normal"}
                    fontSize={10}
                    fontWeight={700}
                    letterSpacing={0.5}
                    >
                      24% Off
                    </Text>
                    {/* <MaterialIcons name="delete-outline" size={24} color="black" /> */}
                  </HStack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Box
              maxW="48%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: "gray.50"
              }}
              p={3}
              mr={3}
            >
              <Box rounded={"lg"}>
                <AspectRatio w="100%" ratio={3/3}>
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }}
                    alt="image"
                    rounded={"lg"}
                  />
                </AspectRatio>
              </Box>
              <Stack pt={1} space={3}>
                <Stack space={4}>
                  <Text 
                    fontStyle={"normal"}
                    bold
                    fontSize={13}
                    fontWeight={"bold"}
                    letterSpacing={0.5}

                  >
                  Nike Air Max 270 React ENG
                  </Text>
                  {/* <Box h={10} w={100} >
                  <Rating ratingCount={5} startingValue={4} readonly={true}
                    style={{
                      fontSize:10
                    }}
                  />
                  </Box> */}
                  <Stack space={2}>
                  <Text
                     fontStyle={"normal"}
                     fontSize={12}
                     fontWeight={700}
                     letterSpacing={0.5}
                    _light={{
                      color: "violet.500"
                    }}
                    _dark={{
                      color: "violet.400"
                    }}
                  >
                    $460.00
                  </Text>
                  <HStack w={100} alignItems="center" justifyContent={"space-between"} space={2}>
                    <Text
                      color={"#9098B1"}
                      fontStyle={"normal"}
                     fontSize={10}
                     fontWeight={400}
                     letterSpacing={0.5}
                     textDecorationLine="line-through"
                    >
                      $550.00
                    </Text>
                    <Text
                     color={"#FB7181"}
                     fontStyle={"normal"}
                    fontSize={10}
                    fontWeight={700}
                    letterSpacing={0.5}
                    >
                      24% Off
                    </Text>
                    {/* <MaterialIcons name="delete-outline" size={24} color="black" /> */}
                  </HStack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
            <Box
              maxW="48%"
              rounded="lg"
              overflow="hidden"
              borderColor="coolGray.200"
              borderWidth="1"
              _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
              }}
              _web={{
                shadow: 2,
                borderWidth: 0
              }}
              _light={{
                backgroundColor: "gray.50"
              }}
              p={3}
            >
              <Box rounded={"lg"}>
                <AspectRatio w="100%" ratio={3/3}>
                  <Image
                    source={{
                      uri: "https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg"
                    }}
                    alt="image"
                    rounded={"lg"}
                  />
                </AspectRatio>
              </Box>
              <Stack pt={1} space={3}>
                <Stack space={4}>
                  <Text 
                    fontStyle={"normal"}
                    bold
                    fontSize={13}
                    fontWeight={"bold"}
                    letterSpacing={0.5}

                  >
                  Nike Air Max 270 React ENG
                  </Text>
                  {/* <Box h={10} w={100} >
                  <Rating ratingCount={5} startingValue={4} readonly={true}
                    style={{
                      fontSize:10
                    }}
                  />
                  </Box> */}
                  <Stack space={2}>
                  <Text
                     fontStyle={"normal"}
                     fontSize={12}
                     fontWeight={700}
                     letterSpacing={0.5}
                    _light={{
                      color: "violet.500"
                    }}
                    _dark={{
                      color: "violet.400"
                    }}
                  >
                    $460.00
                  </Text>
                  <HStack w={100} alignItems="center" justifyContent={"space-between"} space={2}>
                    <Text
                      color={"#9098B1"}
                      fontStyle={"normal"}
                     fontSize={10}
                     fontWeight={400}
                     letterSpacing={0.5}
                     textDecorationLine="line-through"
                    >
                      $550.00
                    </Text>
                    <Text
                     color={"#FB7181"}
                     fontStyle={"normal"}
                    fontSize={10}
                    fontWeight={700}
                    letterSpacing={0.5}
                    >
                      24% Off
                    </Text>
                    {/* <MaterialIcons name="delete-outline" size={24} color="black" /> */}
                  </HStack>
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </HStack>
      </View>
    </>
  );
}

function Settings() {
  return (
    <>
      <BackHeader />
      <View
        style={{ flex: 1 }}
        _light={{
          bg: "#FFFFFF"
        }}
        _dark={{
          bg: "#0C0C0C"
        }}
      >
        <Text>Home!</Text>
        <ToggleDarkMode />
      </View>
    </>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <NavigationContainer>
      <NativeBaseProvider>
        <Tab.Navigator
          tabBar={(props) => <BottomNavigation {...props} />}
          screenOptions={{ header: (props) => <HeaderNavigation {...props} /> }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              icon: "home",
              unActiveIcon: "home-outline",
              headerTitle: "Home Page"
            }}
          />
          <Tab.Screen
            name="Search"
            component={Search}
            options={{
              icon: "magnify",
              unActiveIcon: "magnify",
              headerTitle: "Search"
            }}
          />
          <Tab.Screen
            name="Settings1"
            component={Category}
            options={{
              icon: "cart",
              unActiveIcon: "cart-outline",
              headerShown: false
            }}
            screenOptions={{ headerShown: false }}
          />
          <Tab.Screen
            name="Settings2"
            component={Settings}
            options={{
              icon: "account",
              unActiveIcon: "account-outline",
              headerShown: false
            }}
            screenOptions={{ headerShown: false }}
          />
        </Tab.Navigator>
      </NativeBaseProvider>
    </NavigationContainer>
  );
}

// Color Switch Component
function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <HStack space={2} alignItems="center">
      <Text>Dark</Text>
      <Switch
        isChecked={colorMode === "light"}
        onToggle={toggleColorMode}
        aria-label={
          colorMode === "light" ? "switch to dark mode" : "switch to light mode"
        }
      />
      <Text>Light</Text>
    </HStack>
  );
}
