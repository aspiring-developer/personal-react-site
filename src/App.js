import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Home from './pages/Home';
import PortfolioMain from './pages/PortfolioMain';
import WebDevelopment from './pages/WebDevelopment';
import GraphicDigital from './pages/GraphicDigital';
import Painting from './pages/Painting';
import About from './pages/About';

function App() {
  return (
    <>
      {/* Main wrapper */}
      <div class="container-fluid mx-0 px-0">

        <BrowserRouter>
          <Route exact path="/" component={Home} />
          <Route exact path="/portfolio-main" component={PortfolioMain} />
          <Route exact path="/web-development" component={WebDevelopment} />
          <Route exact path="/graphic-digital" component={GraphicDigital} />
          <Route exact path="/painting" component={Painting} />
          <Route exact path="/about" component={About} />
        </BrowserRouter>

      </div>
    </>
  );
}

export default App;
