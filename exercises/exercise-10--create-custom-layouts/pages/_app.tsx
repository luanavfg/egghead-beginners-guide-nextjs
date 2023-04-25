import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { ReactElement, ReactNode } from 'react'

// ✍️ import the custom layout
// import Layout from '../src/components/layout'

type NextPageWithLayout = {
  getLayout?: (page: ReactElement) => ReactNode
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  // ✍️ wrap the Component with the custom layout
  const getLayout = Component.getLayout ?? ((page => page))
  return (
    <ChakraProvider>
      {/* <Layout> */}
      {getLayout(<Component {...pageProps} />)}    
      {/* </Layout> */}
    </ChakraProvider>
  )
}

export default App
