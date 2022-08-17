import React from 'react';
import { VStack, HStack, Button, IconButton, Icon, Text, NativeBaseProvider, Center, Box, StatusBar,useColorMode } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { SimpleLineIcons,Feather,Ionicons } from '@expo/vector-icons'; 

export default function HeaderNavigation({navigation,options,route}) {
  //console.log(options.headerTitle);
  const { colorMode, toggleColorMode } = useColorMode();
    return <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop bg={colorMode == 'dark' ? "#0C0C0C" : "#FFFFFF"} />
        <HStack bg={colorMode == 'dark' ? "#0C0C0C" : "#FFFFFF"} px="1" py="3" justifyContent="space-between" alignItems="center" w="100%" maxW="600px">
          <HStack alignItems="center">
            <IconButton icon={<Icon size="sm" as={Ionicons} name="chevron-back-sharp" color={colorMode == 'dark' ? 'white' : 'black' } />} />
           
          </HStack>
          <HStack > 
          <Text fontSize="20" fontWeight="bold">
            Test Results
              {/* {options.headerTitle} */}
            </Text>
          </HStack>
          <HStack>
            <IconButton icon={<Icon as={SimpleLineIcons} name="handbag" size="sm" color={colorMode == 'dark' ? 'white' : 'black' }/>} />
            
          </HStack>
        </HStack>
      </>;
  }