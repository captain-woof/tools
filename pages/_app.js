import GoogleAnalytics from "../components/atoms/google-analytics"
import Footer from "../components/molecules/footer"
import Navbar from "../components/molecules/navbar"
import ThemeProvider, { BaseStyle } from "../components/providers/theme"

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GoogleAnalytics />
      <ThemeProvider>
        <BaseStyle />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </ThemeProvider>
    </>
  )
}
