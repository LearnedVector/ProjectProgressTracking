import React, { Component } from 'react'
import { StyleSheet, css } from 'aphrodite';
import { ListItem, ListDivider } from 'react-toolbox/lib/list';

var ProgressBar = require('progressbar.js')

export default class MilestoneListRow extends Component {
  constructor(props){
    super(props)
    this.value = 0

    this.renderDots = this.renderDots.bind(this)
    this.renderCircleBar = this.renderCircleBar.bind(this)
  }

  componentWillMount(){
    // console.log(this.props)
    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let currentDate = new Date();
    let endDate = new Date(this.props.data.endDate);
    let startDate = new Date(this.props.data.startDate)

    let range = (endDate.getTime() - startDate.getTime())/(oneDay)

    let days = (endDate.getTime() - currentDate.getTime())/(oneDay)

    if ((currentDate.getTime() >= startDate.getTime()) && (currentDate.getTime() <= endDate.getTime())){
      this.value = ((range - days) / range)
    }

  }

  componentDidMount(){
    const name = this.props.data.name
    if (this.value > 0){
      var bar = new ProgressBar.Circle(`#${this.props.id}`, {
        color: '#212121',
        trailColor: '#eee',
        trailWidth: 5,
        duration: 1400,
        easing: 'bounce',
        strokeWidth: 6,
        from: {color: '#B3E5FC', a:0},
        to: {color: '#03A9F4', a:1},
        // Set default step function for all animate calls
        step: function(state, circle) {
          circle.path.setAttribute('stroke', state.color)
          circle.setText(name)
        }
      });

      bar.animate(this.value);  // Number from 0.0 to 1.0
    }
  }

  render(){
    return this.value > 0 ? this.renderCircleBar() : this.renderDots()
  }

  renderCircleBar(){
    return(
      <div id={this.props.id} className={css(styles.ProgressBar)}></div>
    )
  }

  renderDots(){
    return(
      <div className={css(styles.circle)}></div>
    )
  }
}

const styles = StyleSheet.create({
  ProgressBar:{
    width: '125px',
    height: '125px'
  },
  container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
  },
  circle: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#eee'
  }
})
