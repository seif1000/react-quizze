import React, { Component } from 'react';
import {connect} from 'react-redux';
import {FirstQuest} from '../action/index';
import _ from 'lodash';
import Progress from 'react-progressbar';
import Scoore from './scoore';
import   NavBar from './NavBar'
import Aux from '../HOC/wraper';




class Quize extends Component {


 
  render() {
     
      const answers  = _.map(this.props.questions.firstQuestion.answers,answer=>{
        return(
          <li key={answer.content} onClick={()=>this.props.FirstQuest(this.props.questions.firstQuestion.id,answer.type)}>{answer.content}</li>
        )
      })

      
        
        if(this.props.questions.firstQuestion.id ===6){
          return(
            <Aux>
             
             <NavBar/>
             <Scoore/>
             </Aux>
            
            )
           
        }else{
           
              return(
                <Aux>
                  <NavBar/>
                  <h2>quizze question</h2>
                <div className="Quize">
                  <p>question {this.props.questions.firstQuestion.id}</p>
                  
                  <h3>{this.props.questions.firstQuestion.question}</h3>
                  <ul className="Answers">
                    {answers}
                  </ul>
  
                
                </div>
                <div className="Progress">
                       <Progress color='DeepSkyBlue ' completed={this.props.questions.firstQuestion.id * 20} />
                </div>
                </Aux>
              )
           
        }
       
     
    
  }
}
const mapStateToProps = (state)=>{
   return  {
     questions:state.quest,
     
    

    }
}

export default connect(mapStateToProps,{FirstQuest})(Quize)
