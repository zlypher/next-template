import { Box, Flex, Heading } from "@chakra-ui/react";
import { CustomContainer } from "./custom-container";

interface IHeaderProps {
    children?: React.ReactNode;
    headline: string;
}

export const Header = ({ headline, children }: IHeaderProps) => {
    return (
        <Box as="header">
            <Flex bg="gray.200" minH="400px" alignItems="center" py="8">
                <CustomContainer>
                    <Heading as="h1">{headline}</Heading>
                </CustomContainer>
            </Flex>
        </Box>
    );
};
