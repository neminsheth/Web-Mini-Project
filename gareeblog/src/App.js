import React from 'react';

import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import MyButton from './components/pages/Checkout';
import Home  from './components/pages/Home';
import './components/pages/checkout.css';
import Success from './components/pages/Success';
import Cancel from './components/pages/Cancel'
import card1 from './components/pages/card1'
import hash from './components/pages/hash'
import Footer from './components/Footer'
import card2 from './components/pages/card2'
import card3 from './components/pages/card3'


function App() {
  return (
    
    <div className="App">
      
      <header className="App-header">
      
       
        <Router>
        <Navbar />
      
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/Success'  component={Success}/>
        <Route path ='/checkout' component={MyButton}/>
        <Route path='/Cancel' component={Cancel}/>
        <Route path='/card1' component={card1}/>
        <Route path='/card2' component={card2}/>
        <Route path='/card3' component={card3}/>
        <Route path='/hash' component={hash}/>
        <Route path='/Footer' component={Footer}/>
        
      
        </Switch>
        
        
      </Router>
      </header>
    </div>
  );
}

export default App;
