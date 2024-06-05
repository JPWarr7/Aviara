import Header from '../components/Header'
import CarouselHome from '../components/CarouselHome'
// import { ThemeProvider } from '../components/ui/theme-provider'
import Hero from '../components/Hero'
import Footer from '../components/Footer'

export default function Home() {
    return (
        <>
        {/* <ThemeProvider> */}
            <Header />
            <CarouselHome />
            <Hero />
            <Footer />
        {/* </ThemeProvider> */}
        </>
    )
}