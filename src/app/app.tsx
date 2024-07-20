import { ChakraProvider } from '@chakra-ui/react'
import { AppProps } from 'next/app'

// TODO: ChakraUIでコンポーネントを作成する
// TODO: OGPを作成する

export default function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ChakraProvider>
            <Component {...pageProps} />
        </ChakraProvider>
    )
}
