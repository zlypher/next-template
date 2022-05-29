import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import Head from "next/head";
import customTheme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
    const title = "Lorem Ipsum";
    const description = "Lorem Ipsum";
    const url = typeof window !== "undefined" ? window.location.href : "#";

    return (
        <ChakraProvider theme={customTheme}>
            <Head>
                <title>{title}</title>

                <meta name="description" content={description} />
                <meta name="robots" content="noindex, nofollow" />

                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={url} />
                {/* <meta property="og:image" content="tbd" /> */}

                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Component {...pageProps} />
        </ChakraProvider>
    );
}

export default MyApp;
