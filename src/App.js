import React, {Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import Scroll from './Scroll';
import './App.css';
import Reg from './Reg';
import Loading from './Loading';

class App extends Component {
	constructor(){
		super()
		this.state={
			robots:[],
			searchfield:'',
			form:false,
			load:false
		}
	}
	componentDidMount(){console.log('comp-app')
	fetch('http://localhost:3000/card')
	.then(response=>{return response.json();})
	.then(robots=>{this.setState({robots:robots})})
}
	onSubmitclick=(event)=>{
		this.setState({form:false})
	}
	onsearchchange=(event)=>{
		this.setState({searchfield:event.target.value})
	}
	form=(event)=>{
		this.setState({form:true})
	}
	close=(event)=>{this.setState({form:false})}
	render(){
	this.componentDidMount();
		const filteredRobots=this.state.robots.filter(robots =>{
			return robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase())
		})
		if(this.state.robots===0){return(<Loading />)}
	return (
		<div>
		{this.state.form ? <Reg onSubmitclick={this.onSubmitclick} /> : null }
		<div className='tc' onClick={this.close}>
			<h2>ROBOFRIENDS</h2>
			<SearchBox searchchange={this.onsearchchange}/>
			<Scroll>
				<CardList robots={filteredRobots}/>
			</Scroll>
		</div><button  className="button f6 link dim br2 ph3 pv2 mb2 dib white bg-blue" onClick={this.form}>Add my Name</button></div>
		)
	this.setState({load:true})
	}
};
export default App;