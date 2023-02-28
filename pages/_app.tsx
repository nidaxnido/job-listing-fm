import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'


const theme = extendTheme({
  colors:{
    brand:{
      darkCyan:"hsl(180, 29%, 50%)",
      bg:"hsl(180, 52%, 96%)",
      tablet:"hsl(180, 31%, 95%)",
      greyCyan:"hsl(180, 8%, 52%)",
      darkGreyCyan:"hsl(180, 14%, 20%)",
    }
  },
  breakpoints: {
    sm:"376px"
  }
})

export default function App({ Component, pageProps }: AppProps) {
  return <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
}
