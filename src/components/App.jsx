import { BrowserRouter } from 'react-router-dom'
import Header from "../sections/Header"
import About from "../sections/About"
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Form from '../sections/Form'
import Footer from '../sections/Footer'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Skills />
      <Projects />
      <Form />
      <Footer />

    </BrowserRouter>)
}