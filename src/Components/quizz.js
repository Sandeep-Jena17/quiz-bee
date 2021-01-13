import React from 'react'
//import '../assets/style.css';
import quizzService from '../quizService/index';
import QuestionBox from './questionBox';
import Result from '../Components/Result';

class Quizzbee extends React.Component{

  state={
    questionBank:[],
    score:0,
    responses:0
  }

  getQuestion=()=>{
    quizzService().then(question=>this.setState({questionBank:question}));
  }
  componentDidMount(){
    this.getQuestion(); 
}

computeAnswer=(answer,correctAnswar)=>{
  if (answer===correctAnswar){
    this.setState({
      score:this.state.score+1
    });
  }
  this.setState({
    responses:this.state.responses<5 ?this.state.responses+1:5
  });
}


playAgain=()=>{
  this.getQuestion();
  this.setState({
    score:0,
    responses:0
  })
}
  // displayState=()=>{
  //   console.log(this.state.questionBank);
  // }

  render(){
    return (
      <React.Fragment>
        <div className='container'>
         <div className='title'  > Quizz Time</div>
        {
          this.state.questionBank.length > 0 && this.state.questionBank.map(({question,answers,correct,questionId})=>(
            this.state.responses<5&&
                      <QuestionBox question={question} 
                                    options={answers} 
                                   key={questionId}
                                   selected={answer=>this.computeAnswer(answer,correct)} />
                                  ) )
        }
               {this.state.responses===5 ?
               <Result score={this.state.score} playAgain={this.playAgain} />:null} 
        </div>
      </React.Fragment>
    )
  }
  
}

export default Quizzbee;