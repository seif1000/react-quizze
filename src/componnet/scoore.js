import React, { Component } from 'react';
import {connect } from 'react-redux';
import {Link} from 'react-router-dom';


 class Scoore extends Component {
     
  render() {
     
    if(this.props.scoore === 5){
        return(
            <div className='Failed'>
            <p>congratulation </p>
            <i className="fa fa-smile"></i>
              <p>your scoore : {this.props.scoore}/5</p>
              
            </div>
        )
       
        
    }else{
       return (
        <div className='Failed'>
          <p>you failed! your scoore: {this.props.scoore}</p>
          <Link to='/answers' >the answers</Link>
          

        </div>
        )
       
    }
  }
}
const mapStateToProps = (state)=>{
    return{
        scoore:state.quest.count
    }
}

export default connect(mapStateToProps)(Scoore);
