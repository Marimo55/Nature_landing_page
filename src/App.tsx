import Header from './components/Header/Header';
import AboutUs from './components/Sections/About/AboutUs';
import Hero from './components/Sections/Hero/Hero';
import Main from './components/Sections/Main/Main';

function App() {
  return (
    <>
      <Header />
      <Main>
        <Hero />
        <AboutUs />
      </Main>
    </>
  );
}

export default App;
