import {
    Avatar, Box, HStack, Image, View
} from "native-base";
import React from "react";
import { ScrollView } from "react-native";
import { SliderBox } from "react-native-image-slider-box";
import SliderCard from "../components/ProductCards/SliderCard";
import SliderCard2 from "../components/ProductCards/SliderCard2";
import SectionTitle from "../components/utils/SectionTitle";


export default function Home() {
    const images = [
      "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60",
      "https://images.unsplash.com/photo-1555583743-991174c11425?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGphY2tldHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=900&q=60"
    ]
    return (
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <View
          style={{ flex: 1 }}
          _light={{
            bg: "#FFFFFF"
          }}
          _dark={{
            bg: "#0C0C0C"
          }}
        >
          <Box
            w="100%"
            h="200"
            mt={"6"}
            justifyContent="center"
            alignItems={"center"}
          >
            <SectionTitle title="CATEGORIES" />
  
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
              <HStack w="100%" flex={1} px={4} space={3} py={5}>
                <Avatar
                  bg="pink.600"
                  alignSelf="center"
                  size="xl"
                  source={{
                    uri: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80"
                  }}
                >
                  GG
                </Avatar>
                <Avatar
                  bg="pink.600"
                  alignSelf="center"
                  size="xl"
                  source={{
                    uri: "https://images.unsplash.com/photo-1551028719-00167b16eac5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1335&q=80"
                  }}
                >
                  GG
                </Avatar>
                <Avatar
                  bg="pink.600"
                  alignSelf="center"
                  size="xl"
                  source={{
                    uri: "https://images.unsplash.com/photo-1603217192634-61068e4d4bf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGplYW5zfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                  }}
                >
                  GG
                </Avatar>
                <Avatar
                  bg="pink.600"
                  alignSelf="center"
                  size="xl"
                  source={{
                    uri: "https://images.unsplash.com/flagged/photo-1585052201332-b8c0ce30972f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8ZHJlc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=900&q=60"
                  }}
                >
                  GG
                </Avatar>
              </HStack>
            </ScrollView>
          </Box>
  
          <Box w="100%" flex={1}>
            <SectionTitle title="TRENDING COLLECTIONS" />
            <View w={"100%"} flex={0.7} px={"5"} mt={5}>
              <Box overflow="hidden" >
              <SliderBox images={images} sliderBoxHeight={500} ImageComponent={Image} alt="test" autoplay={true} autoplayInterval={4000} circleLoop={true}/>
              </Box>
              {/* <Image
                alt="Image"
                size={"lg"}
                source={{
                  uri: "https://images.unsplash.com/photo-1492288991661-058aa541ff43?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60"
                }}
                h={"400"}
                w={"100%"}
              ></Image> */}
              <Image
                mt={5}
                alt="Image"
                size={"lg"}
                source={{
                  uri: "https://images.unsplash.com/photo-1531303435785-3853ba035cda?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
                }}
                h={"200"}
                w={"100%"}
              ></Image>
            </View>
          </Box>
  
          <Box w="100%" flex={1} mt={5}>
            <SectionTitle title="TWENTY21" />
            <HStack px={5} space={3} mt={5}>
              <SliderCard />
              <SliderCard />
            </HStack>
          </Box>
  
          
          <Box w="100%" flex={1} mt={5}>
            <SectionTitle title="SPRING ESSENTIALS" />
            <ScrollView horizontal showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
            <HStack px={5} space={3} mt={5}>
              <SliderCard2 />
              <SliderCard2 />
            </HStack>
            </ScrollView>
          </Box>
        </View>
      </ScrollView>
    );
  }
