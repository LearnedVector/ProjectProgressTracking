import React, { Component } from 'react'
import { Link } from 'react-router'
import { StyleSheet, css } from 'aphrodite';

import { ListItem,ListDivider } from 'react-toolbox/lib/list';
// import ProgressBar from 'react-toolbox/lib/progress_bar';
var ProgressBar = require('progressbar.js')

export default class TableRow extends Component {
  constructor(props){
    super(props)
  }

  componentWillMount(){
    for(let i = 0; i < this.props.data.milestones.length; i++){
      if(this.props.data.milestones[i].completed == true){
        this.endDate = this.props.data.milestones[i].endDate
      }
      else{
        this.endDate = this.props.data.milestones[i].endDate
      }
    }

    let oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    let currentDate = new Date();
    let secondDate = new Date(this.endDate);
    let firstDate = new Date(this.props.data.milestones[0].startDate)

    this.daysUntilLaunch = Math.round((secondDate.getTime() - currentDate.getTime())/(oneDay))
    if (this.daysUntilLaunch < 0)
      this.daysUntilLaunch = 0;

    this.ProjectLength = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)))

    this.value = ((this.ProjectLength - this.daysUntilLaunch)/this.ProjectLength)

  }

  componentDidMount(){
    this.bar = new ProgressBar.Line(`#${this.props.data.key}`, {
      strokeWidth: 4,
      easing: 'easeInOut',
      duration: 1400,
      color: '#FFEA82',
      trailColor: '#eee',
      trailWidth: 10,
      svgStyle: {width: '100%', height: '100%'},
      from: {color: '#B3E5FC'},
      to: {color: '#03A9F4'},
      step: (state, bar) => {
        bar.path.setAttribute('stroke', state.color);
      }
    })

    this.bar.animate(this.value);  // Number from 0.0 to 1.0

  }

  render(){
    return(
      <Link
        className={css(styles.Link)}
        to={{ pathname:`/projects/${this.props.data.key}`, state: {fetchProjectDets: true} }} >
        <div className={css(styles.container)}>
          <ListItem
            selectable
            className={css(styles.ListItem)}
            caption={this.props.data.projectName}
            legend={`${this.props.value}/${this.props.max} completed `}
          />
          <div id={this.props.data.key} className={css(styles.ProgressBar)}>
          </div>
        </div>
      </Link>
    )

  }
}

const styles = StyleSheet.create({
  ProgressBar:{
    height: 3,
    marginBottom: 15,
    marginTop: -15
  },
  ListItem:{
    flex: 9,
    // positon: 'relative',
    // right: 90
  },
  container: {
    display: 'flex',
    marginTop: 15,
    flexDirection: 'column'
  },
  Link: {
    textDecoration: 'none',
  }

})
