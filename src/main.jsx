import React from 'react'
import ReactDOM from 'react-dom/client'
import { Link, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import App from './components/App.jsx'
import './styles/index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
