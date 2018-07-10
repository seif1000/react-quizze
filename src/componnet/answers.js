import React, { Component } from 'react';
import NavBar from './NavBar';
import {connect} from 'react-redux';
import _ from 'lodash';
import Aux from '../HOC/wraper';

class Answers extends Component {
 
  render() {
    
    this.props.questions.pop();
    const Ans = this.props.questions.map(question=>{
      return(
    
           <tr>
             <td>{question.question}</td>
             
               {question.answers.map(answer=>{
                      return(
                        <td style={{color:(answer.type==='T')?'red':''}}>
                        {answer.content}
                          <i className={(answer.type==='T')?'fa fa-check':''}></i>
                         </td>)
               })}
             
            
           </tr>
            
        

       
      )
    })
    return (
      <div>
        <NavBar profile/>
        <table className='table table-hover'>
         <thead>
         <tr>
              <th>questions</th>
              <th>choice1</th>
              <th>choice2</th>
              <th>choice3</th>
           </tr>
         </thead>
         <tbody>
            {Ans}
         </tbody>
        </table>
        
        
      </div>
    )
  }
}
const mapStateToProps = (state)=>{
 return { questions:state.quest.questions}
}
export default  connect(mapStateToProps)(Answers)