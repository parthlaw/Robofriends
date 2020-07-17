import React from 'react';

const Scroll=(prop)=>{
	return(
		<div style={{overflowY: 'scroll',border: '1px solid black', height: '565px'}}>
		{prop.children}
		</div>
		)
};
export default Scroll;