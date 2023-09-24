import Header from './components/ContainerClarifion/Header';
import Menubar from './components/Menubar/Menubar'
import Step from './components/Steps/Step';
import TextContainer from './components/TextContainer/TextContainer';
import  Body  from './components/BodyComponent/Body';
import Footer from './components/Footer/Footer';
import Navbar from './components/Navbar/Navbar';

export default function App() {
  return (
    <>
      <Menubar />
      <br />
      <br />
      <br />
      <Header />
      <TextContainer />
      <Body />
      <Footer />
    </>
  );
}