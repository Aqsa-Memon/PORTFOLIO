import About from "./about/page";
import Footer from "./components/footer";
import Header from "./components/header";
import Hero from "./components/hero";
import Contact from "./contact/page";

export default function Home() {
  return (
    <div>
   <Header />
   <Hero />
   <br />
   <br />
   <About />
   <br />
   <br />
   <Contact />
   <Footer />
    </div>
  )
  
  }