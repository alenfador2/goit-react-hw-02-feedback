import React, { Component } from "react";
import Container from './Container/Container.jsx';
import Notification from "./Notification/Notification";
import FeedbackOptions from "./FeedbackOptions/FeedbackOptions";
import Statistics from "./Statistics/Statistics";
import Section from './Section/Section.jsx';




export class App extends Component {
  constructor(props){
    super(props);

    this.countTotalFeedback = this.countTotalFeedback.bind(this);
    this.countPositiveFeedbackPercentage = this.countPositiveFeedbackPercentage.bind(this);
    this.addFeedback = this.addFeedback.bind(this);
  }
    state = {
      good: 0,
      neutral: 0,
      bad: 0
    }
  
  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, option) => acc + option, 0);
 }
 countPositiveFeedbackPercentage() {
     return Math.floor((this.state.good / this.countTotalFeedback()) * 100);
 }
  addFeedback = option => {
    this.setState(state => ({
      [option]: state[option] + 1,
    }));
  };

  render() {
    const {good, neutral, bad} = this.state;
    return (
      <>
    <Container>
    <Section title='Please leave feedback'>
      <FeedbackOptions options={Object.keys(this.state)} onLeaveFeedback={this.addFeedback}/></Section>
      <Section title='Statistic'>{this.countTotalFeedback() !== 0 ? (
      <Statistics good={good} neutral={neutral} bad={bad} total={this.countTotalFeedback()} positivePercentage={this.countPositiveFeedbackPercentage()}/>):(
      <Notification message = 'There is no feedback'/>)}
      </Section></Container>
      </>
    )
  }
}
