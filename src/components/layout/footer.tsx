import { Box } from "@chakra-ui/react";
import { CustomContainer } from "./custom-container";

interface IFooterProps {
    children?: React.ReactNode;
}

export const Footer = ({ children }: IFooterProps) => {
    return (
        <Box as="footer" bg="gray.200" py="8">
            <CustomContainer>Footer</CustomContainer>
        </Box>
    );
};
