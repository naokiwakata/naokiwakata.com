import { ChakraProvider } from '@chakra-ui/react'

// TODO: ChakraUIでコンポーネントを作成する
// TODO: OGPを作成する

function MyApp({ Component, pageProps }: { Component: React.ElementType, pageProps: any }) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}

export default MyApp