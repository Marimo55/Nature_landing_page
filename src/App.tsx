import Foooter from './components/Footer/Footer';
import Header from './components/Header/Header';
import AboutUs from './components/Sections/About/AboutUs';
import ContactUs from './components/Sections/Contact/ContactUs';
import Hero from './components/Sections/Hero/Hero';
import Main from './components/Sections/Main/Main';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <AboutUs />
        <ContactUs />
      </Main>
      <Foooter />
    </>
  );
}

export default App;
