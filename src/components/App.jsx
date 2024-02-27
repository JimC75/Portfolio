import { BrowserRouter } from 'react-router-dom'
import Header from "../sections/Header"
import About from "../sections/About"

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <About />

    </BrowserRouter>)
}