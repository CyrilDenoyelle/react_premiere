import React, { Component } from 'react'
import Question from './Question'
import Button from './Button'
import $ from 'jquery'

class App extends Component {

  state = {}

  constructor(props){
    super(props);
    this.state={
      question: null,
      category: null,
      difficulty: null,
      nbbutton: null,
      answers: null
    }
  }

  componentWillMount(){
    this.getQuestions();
  }

  shuffle(a) {
      for (let i = a.length; i; i--) {
          let j = Math.floor(Math.random() * i);
          [a[i - 1], a[j]] = [a[j], a[i - 1]];
      }
      let b = [];
      a.forEach( function(element, index) {
        if(element)b.push(element);
      });
      return b;
  }

  getQuestions = event => {
    $.getJSON('https://opentdb.com/api.php?amount=1')
      .then((data) => {
        let r = data.results[this.i];
        let a = [r.correct_answer, r.incorrect_answers[0], r.incorrect_answers[1], r.incorrect_answers[2]];
        a = this.shuffle(a);
        const forma = {
          question: r.question,
          category: r.category,
          difficulty: r.difficulty,
          nbbutton: a.length,
          answers: a
        }
        this.setState({test: forma})
        console.log(this.state.answers);
      });
  }

  tryRep = rep => {
    console.log(rep);
  }

  render(){
    console.log(this.state)
    return (
      <div>
        <h1>HELLO</h1>
        <span>{this.state.nbbutton}</span>
        <Question question={this.state.question} category={this.state.category} difficulty={this.state.difficulty}/>
      </div>
    )
  }
}

export default App;


// this.state.answers.map((element)=>{
          //   console.log('coucou');
          // })