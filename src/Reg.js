import React from 'react';
import './Reg.css';

class Reg extends React.Component{
	constructor(props){
		super(props);
		this.state={
			signinName:'',
			signinEmail:'',
		}
	}
	onNameChange=(event)=>{this.setState({signinName:event.target.value})}
	onEmailChange=(event)=>{this.setState({signinEmail:event.target.value})}
	onSubmit=()=>{fetch('http://localhost:3000/Reg' , {
		method:'post',
		headers:{'Content-Type':'application/json'},
		body:JSON.stringify({
			email:this.state.signinEmail,
			name:this.state.signinName
		}),
	})
	.then(response=>response.json())
.then(data=>{
	if(data==='success'){
		this.props.onSubmitclick();
	}
	else{console.log('fail')}
})}
	render(){
	return(
		<div className="container" id="form">
		<div>
		  <i className="fas fa-user"></i><br/>
		  <input type="text" placeholder="name" onChange={this.onNameChange} onKeyPress={(e)=>(e.charCode===13?this.onSubmit():null)}required/><br/>
		</div>
		<div>  
		  <i className="fas fa-envelope"></i><br/>
		  <input type="email" placeholder="email" onChange={this.onEmailChange} onKeyPress={(e)=>(e.charCode===13?this.onSubmit():null)} required/><br/><br/>
		</div>
		<button type="submit" onClick={this.onSubmit}>Submit</button>
	</div>
	)
	}
}
export default Reg;