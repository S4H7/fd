import React, {Component} from 'react';
import './Navi.css';

class Navi extends Component {
  render() {
    return (
    <nav style={{display:'flex', justifyContent:'flex-end'}}>
      <p className='f3 link dim black underline pa3 pointer'>Sign Out</p>      
    </nav>
  );
}
}

export default Navi;
