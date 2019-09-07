import React, {Component} from 'react';
import './Frm.css';

class Frm extends Component {
  render() {
    return (
    	<div>
    		<p className='f3'>
    		{'The Creator'}
    		</p>
    		<div className='ctr'>
    			<div className='ctr form pa3 br3 shadow-5'>
    				<input type='tex' className='f4 pa2 w-70 center'/>
    				<button className=' pointer w-30 grow f4 link ph3 pv2 dib white bg-light-purple'>Search</button>
    			</div>
    		</div>
	  	</div>
  );
}
}

export default Frm;