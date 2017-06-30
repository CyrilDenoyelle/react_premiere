import React, { Component } from 'react'

class Question extends Component {

	state={
  	question: this.props.question,
  	category: this.props.category,
  	difficulty: this.props.difficulty
  }

	constructor(props){
    super(props);
    this.state={
    	question: this.props.question,
    	category: this.props.category,
    	difficulty: this.props.difficulty
    }
  }


	render(){
		console.log(this.props.question);
	return (
		<div>
			<h1>{this.state.question}</h1>
	    	<h2>{this.state.category}</h2>
	    	<span>{this.state.difficulty}</span>
		</div>
		)
	}
}

export default Question;