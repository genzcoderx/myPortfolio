import { BrowserRouter } from "react-router-dom";

import { About, Contact, Experience, Hero, Navbar, Works } from "./components";
import { Toaster } from "react-hot-toast";
import  Footer  from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className='relative z-0 bg-primary'>
        <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
          <Navbar />
          <Hero />
        </div>
        <About />
        <Works />
        <Experience />
        <Contact />
        <Toaster/>
        <Footer/>
      </div>
    </BrowserRouter>
  );
}

export default App;