import React from "react";
import { VStack, HStack, Image, Text, Box } from "@chakra-ui/react";
import TestimonialsFrame from "./TestimonialsFrame";
import stockOne from "../../assets_folder/Test_Stocks/stock1.jpg"
import stockTwo from "../../assets_folder/Test_Stocks/stock2.jpg"
import stockThree from "../../assets_folder/Test_Stocks/stock3.jpg"
import stockFour from "../../assets_folder/Test_Stocks/stock4.jpg"
import stockFive from "../../assets_folder/Test_Stocks/stock5.jpg"


function Testimonials(){
    return(

    <VStack
    position="relative"
    top={0}
    left={0}
    right={0}
    bg='white'
    w='100%'
    h="90vh"
    paddingTop={100}
    paddingBottom={300}
    spacing={100}
    >
    <Text fontFamily="secondaryFont" fontSize="5xl" fontWeight="normal" color="#36454F"> See our authentic customer testimonials ! </Text>
    <HStack spacing={12}>
        <TestimonialsFrame name="Boris" image={stockOne} rating="5" reviewText='"Wow what a delicious time! Only regret was not buying more food!"'/>
        <TestimonialsFrame name="Richard" image={stockTwo} rating="4.5" reviewText='"The lemon tart is just like my nonna used to make!'/>
        <TestimonialsFrame name="Olivia" image={stockThree} rating="5" reviewText='"Try the Bruschetta! It is some of the best in town!"'/>
        <TestimonialsFrame name="Emily" image={stockFour} rating="5" reviewText='I had a wonderful time. The service was impeccable.'/>
        <TestimonialsFrame name="Don" image={stockFive} rating="4" reviewText='"Don sipped delicious coffee 8 times out of 9!"'/>
    </HStack>

    </VStack>

    )
}

export default Testimonials