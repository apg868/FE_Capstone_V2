import React from "react";
import { HStack, VStack, Image, Text, Box} from "@chakra-ui/react";
import { FaStar} from 'react-icons/fa';


function TestimonialsFrame(props){
const rating = props.rating
const image = props.image
const reviewText = props.reviewTest
const name = props.name

// const starIcons = Array.from({ length: rating }, (_, index) => (
//     <FaStar key={index} />
// ));
    return(
<VStack spacing={3} border="2px" borderColor="black" width="150px" height="300px" borderRadius={20}>
<HStack spacing={1}>
<FaStar fontSize="18px"/>
<Text fontFamily="primaryFont" color="#36454F" fontSize="lg" fontWeight="normal"> Rating: {props.rating}/5 </Text>
{/* {starIcons} */}
</HStack>
<HStack spacing={3}>
<Image src={image} boxSize="10vh" borderRadius={10} alt="picture of person" />
<Text fontFamily="primaryFont" fontSize="s" fontWeight="normal" > {props.name} </Text>
</HStack>
<Text fontFamily="secondaryFont" fontSize="md" fontWeight="normal" color="#36454F" marginLeft={4}> {props.reviewText} </Text>
</VStack>
    )
}

export default TestimonialsFrame