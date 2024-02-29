import { BrowserRouter } from 'react-router-dom'
import Header from "../sections/Header"
import About from "../sections/About"
import Skills from '../sections/Skills'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />
      <Skills />

    </BrowserRouter>)
}