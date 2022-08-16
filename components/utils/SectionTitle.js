import { HStack,Text,View,Icon,Box,IconButton,useColorMode ,Heading} from "native-base";
import { SimpleLineIcons,Feather } from '@expo/vector-icons'; 
export default function SectionTitle({title}) {
    const { colorMode, toggleColorMode } = useColorMode();
    return (

        <HStack w="100%"  px="5" justifyContent={"space-between"} flexDirection={"row"} alignItems={"center"}>
            <Heading size={"sm"}>{title}</Heading>
            <IconButton icon={<Icon size="sm" as={Feather} name="menu" color={colorMode == 'dark' ? 'white' : 'black' } />} />
        </HStack>
    );
}