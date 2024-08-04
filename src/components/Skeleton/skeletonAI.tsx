import { Box, SkeletonCircle, SkeletonText } from "@chakra-ui/react";

export default function SkeletonAI() {
    return (
        <>
            <Box padding='6' boxShadow='lg' bg='white' maxW={'900px'}>
                <SkeletonCircle size='10' />
                <SkeletonText mt='4' noOfLines={5} spacing='4' skeletonHeight='2' />
            </Box>
        </>
    );
}