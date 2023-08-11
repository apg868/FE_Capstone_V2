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
<VStack spacing={3}>
<HStack spacing={2}>
<Text fontFamily="primaryFont" fontSize="s" fontWeight="normal"> Rating: {props.rating}/5 </Text>
{/* {starIcons} */}
</HStack>
<HStack spacing={3}>
<Image src={image} boxSize="5vh"/>
<Text fontFamily="primaryFont" fontSize="xs" fontWeight="normal"> {props.name} </Text>
</HStack>
<Text fontFamily="secondaryFont" fontSize="md" fontWeight="normal"></Text>
</VStack>
    )
}

export default TestimonialsFrame