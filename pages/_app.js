import Navbar from "../components/molecules/navbar"
import ThemeProvider, { BaseStyle } from "../components/providers/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider>
        <BaseStyle />
        <Navbar />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  )
}
