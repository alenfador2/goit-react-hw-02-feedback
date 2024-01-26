import css from "./Feedback.module.css";
import React, { Component } from "react";



class Feedback extends Component {

    constructor(props){
        super(props);

       this.state = {
            good: 0,
            neutral: 0,
            bad: 0
          }

        this.addGoodFeedback = this.addGoodFeedback.bind(this);
        this.addNeutralFeedback = this.addNeutralFeedback.bind(this);
        this.addBadFeedback = this.addBadFeedback.bind(this);
    }
    addGoodFeedback(){
        this.setState({
         good: this.state.good + 1,
        })
    }
    addNeutralFeedback() {
        this.setState({
            neutral: this.state.neutral + 1,
        })
    }
    addBadFeedback() {
        this.setState({
            bad: this.state.bad + 1,
        })
    }
    countTotalFeedback() {
       return this.state.good + this.state.neutral + this.state.bad;
    }
    countPositiveFeedbackPercentage() {
        return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
    }
    

    render(){
       return(<>
       <div>
        <h2 className ="header">Please leave feedback</h2>
       <button name = "good" onClick = {this.addGoodFeedback}>Good</button>
       <button name = "neutral" onClick = {this.addNeutralFeedback}>Neutral</button>
       <button name = "bad" onClick={this.addBadFeedback}>Bad</button>
       <div className="statistic">
        <h2 className="statistic-header">Statistic</h2>
        <p className="good-counter">Good: {this.state.good}</p>
        <p className="neutral-counter">Neutral: {this.state.neutral}</p>
        <p className="bad-counter">Bad: {this.state.bad}</p>
        <h2 className="total-counter">Total: {this.countTotalFeedback()}</h2>
        <h2 className="percentage-counter">Percentage: {this.countPositiveFeedbackPercentage()}%</h2>
       </div>
       </div>
       </>)
    }
}

export default Feedback;