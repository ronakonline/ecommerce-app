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
  Heading
} from "native-base";
import React from "react";
import BottomNavigation from "./components/layout/BottomNavigation";
import HeaderNavigation from "./components/layout/HeaderNavigation";
import Home from "./screens/Home";

// Define the config
const config = {
  useSystemColorMode: false,
  initialColorMode: "dark"
};

// extend the theme
export const theme = extendTheme({ config });

function Settings() {
  return (
    <View
      style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
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
  );
}

function Search() {
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
            borderBottomColor:"black"
          }}
          _dark={{
            borderBottomColor:'#868686'
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
                borderColor:"#3E3E3E"
              }}
              _light={{
                borderColor:"black"
              }}
            >
              <Text color="white">All</Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor:"#3E3E3E"
              }}
              _light={{
                borderColor:"black"
              }}
            >
              <Text _dark={{
                color:'white'
              }} _light={{
                color:'black'
              }}>Tops</Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor:"#3E3E3E"
              }}
              _light={{
                borderColor:"black"
              }}
            >
              <Text _dark={{
                color:'white'
              }} _light={{
                color:'black'
              }}>Sweatshirts</Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor:"#3E3E3E"
              }}
              _light={{
                borderColor:"black"
              }}
            >
              <Text _dark={{
                color:'white'
              }} _light={{
                color:'black'
              }}>Jackets</Text>
            </Button>
            <Button
              size="lg"
              variant={"outline"}
              borderRadius={"none"}
              _dark={{
                borderColor:"#3E3E3E"
              }}
              _light={{
                borderColor:"black"
              }}
            >
              <Text _dark={{
                color:'white'
              }} _light={{
                color:'black'
              }}>Pants</Text>
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
                <Text fontSize="sm" color={"#979797"} fontWeight="500" ml="-0.5" mt="-1">
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
                <Text fontSize="sm" color={"#979797"} fontWeight="500" ml="-0.5" mt="-1">
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
                <Text fontSize="sm" color={"#979797"} fontWeight="500" ml="-0.5" mt="-1">
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
            component={Settings}
            options={{ icon: "cart", unActiveIcon: "cart-outline" }}
          />
          <Tab.Screen
            name="Settings2"
            component={Settings}
            options={{ icon: "account", unActiveIcon: "account-outline" }}
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
