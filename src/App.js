import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navi from './components/navi/Navi';
import Logo from './components/logo/Logo';
import Rank from './components/rank/Rank';
import Frm from './components/frm/Frm';
import './App.css';

class App extends Component {
  render() {
    return (
    <div className="App">
    	<Particles className='prt'/> 
      	<Navi/>
      	<Logo/>
      	<Rank/>
      	<Frm/>    
    </div>
  );
}
}

export default App;
