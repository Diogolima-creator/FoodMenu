import * as C from './App.styles';
import { Header } from './components/Header';
import { Home } from './components/Home';
import { About } from './components/About';
import { Features } from './components/Features';
import { Menu } from './components/Menu';
import {Memorial} from './components/Memorial'
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export const App = () => {
  return(
    <C.Container>
      <Header />
      <Home />
      <About />
      <Features />
      <Menu />
      <Memorial />
      <Contact />
      <Footer />
    </C.Container>
  )
}
