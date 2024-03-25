// import { BrowserRouter } from 'react-router-dom'
import React, { Component } from 'react';
import { Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';
import Header from "../sections/Header"
import About from "../sections/About"
import Carrier from '../sections/Carrier'
import Skills from '../sections/Skills'
import Projects from '../sections/Projects'
import Contact from '../sections/Contact'
import Footer from '../sections/Footer'



class App extends Component {
  componentDidMount() {
    Events.scrollEvent.register('begin', function () {
      console.log('begin', arguments);
    });

    Events.scrollEvent.register('end', function () {
      console.log('end', arguments);
    });

    scrollSpy.update();
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin');
    Events.scrollEvent.remove('end');
  }

  render() {
    return (
      <div>
        <Header />
        <About />
        <Carrier />
        <Element name="Skills">
          <Skills />
        </Element>
        <Element name="Projects">
          <Projects />
        </Element>
        <Element name="Contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    );
  }
}

export default App;