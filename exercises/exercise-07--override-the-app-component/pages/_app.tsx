import type { AppProps } from "next/app"
import React from "react"

const App = ({Component, pageProps}: AppProps) => {
  pageProps.title = "This is my title"
  return <Component {...pageProps}/>
}

export default App