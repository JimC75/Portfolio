import { BrowserRouter } from 'react-router-dom'
import Header from "../sections/Header"
import About from "../sections/About"
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Skills />
      <Projects />

    </BrowserRouter>)
}