import React from 'react';
import { NativeBaseProvider, Box, Text, Heading, VStack, useColorModeValue, FormControl, Input, Link, Button, Icon, HStack, Center, Pressable,useColorMode } from 'native-base';
import { MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';

export default function BottomNavigation({ state, descriptors, navigation }) {
    //const [selected, setSelected] = React.useState(1);
    return (
        <HStack
          bg="indigo.600"
          _light={{
            bg:'#FFFFFF'
          }}
          _dark={{
            bg:'#0C0C0C'
          }}
          alignItems="center"
          py="3"
          safeAreaBottom
          shadow={6}
        >
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;
  
            const isFocused = state.index === index;
  
            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key
              });
  
              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name);
              }
            };
  
            const onLongPress = () => {
              navigation.emit({
                type: "tabLongPress",
                target: route.key
              });
            };
  
            return (
              <Pressable
                //cursor="pointer"
                opacity={isFocused ? 1 : 0.5}
                py="3"
                flex={1}
                onPress={onPress}
                onLongPress={onLongPress}
                key={index}
              >
                <Center>
                  <Icon
                    as={
                      <MaterialCommunityIcons
                        name={isFocused ? options.icon : options.unActiveIcon}
                      />
                    }
                    size="2xl"
                    color={useColorModeValue("black","white")}
                    _light={{
                      bg: '#FFFFFF'
                    }}
                    _dark={{
                      bg: '#0C0C0C'
                    }}
                  />
                </Center>
              </Pressable>
            );
          })}
        </HStack>
     
    );
  }