import { Box } from "@chakra-ui/react";
import { Footer } from "./footer";
import { Header } from "./header";

interface IDefaultLayoutProps {
    children?: React.ReactNode;
}

export const DefaultLayout = ({ children }: IDefaultLayoutProps) => {
    return (
        <>
            <Header headline="Lorem Ipsum" />
            <Box as="main">{children}</Box>
            <Footer />
        </>
    );
};
