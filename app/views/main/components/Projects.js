import React ,{ Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
var ProgressBar = require('progressbar.js')
import LaunchSVG from './LaunchSVG';
import MilestoneListRow from './MilestoneListRow';
import { List } from 'react-toolbox/lib/list';

export default class Project extends Component {
  constructor(){
    super()

    this.bar = {}

    this.value = 0
    this.ProjectLength = 0
    this.isHighlightMilestone = false
    this.key = 0
    this.daysUntilLaunch = ""
    this.SvgSize = 0

    this.svgWidth = 0
    this.svgHeight = 0

    this.fontSize = 5;
    this.renderMilestones = this.renderMilestones.bind(this)
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

    this.SvgSize = 150 - (this.daysUntilLaunch * 5)
    //
    // this.svgWidth = 307 - (this.daysUntilLaunch * 5)
    // this.svgHeight = (this.svgWidth * 283) / 307

    this.fontSize = (this.SvgSize / 5) > 10 ? this.SvgSize/5 : 10
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

  render() {

    return(
      <div className={css(styles.barContainer)}>
        <h1>{this.props.data.projectName}</h1>
        <div className={css(styles.milestoneNameContainer)}>
          {this.props.data.milestones.map((milestone)=> this.renderMilestones(milestone))}
        </div>
        <div id={this.props.data.key} className={`${css(styles.progressBar)}`} > </div>
        <div className={`col-lg-12 col-md-12 col-sm-12`} style={{display: 'flex', flexDirection: 'row', flex:1}} >
          <div className={`${css(styles.milestoneBarContainer)} `}>
            {this.props.data.milestones.map((data)=> <MilestoneListRow key={this.key++} data={data} id={this.props.data.key+this.key.toString()}/>)}
          </div>
          <div className={`${css(styles.launchDayContainer)} `}>
            <div className={css(styles.launchDayWordContainer)} style={{fontSize: this.fontSize}}>
              <div>{this.daysUntilLaunch} {this.daysUntilLaunch > 1 ? "Days..." : "Day..."}</div>
              { this.daysUntilLaunch < 7 ? <div></div> : <div>Launch</div>  }
            </div>
            { this.daysUntilLaunch < 7 ? <LaunchSVG /> : "" }
          </div>
        </div>
      </div>
    )
  }

  renderMilestones(milestone){
    if (milestone.completed == false && this.isHighlightMilestone == false){
      this.isHighlightMilestone = true
      return <h6 className={`${css(styles.margin)} ${css(styles.underLine)}`} key={this.key++}>{milestone.name} </h6>
    }
    else
      // return <h6 className={css(styles.margin)} key={this.key++}> {milestone.name} </h6>
      return <h6 className={css(styles.margin)} key={this.key++}>{milestone.name} </h6>
  }

  reAnimate(){
  }

}

const styles = StyleSheet.create({
  progressBar: {
    margin: 20,
    width: '100%',
    height: 50
    },
  barContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column'
  },
  milestoneNameContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    // margin: 20,
    height: 100
  },
  milestoneBarContainer: {
    display: 'flex',
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    minHeight: 283
  },
  margin: {
    padding: 10
  },
  underLine:{
    borderBottom: '2px solid #03A9F4'
  },
  hightlight: {
    color: 'blue'
  },
  launchDayContainer: {
    display: 'flex',
    flex: 2,
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    alignItems: 'center',
  },
  launchDayWordContainer: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
    height: 200
  },
  circle: {
    height: 10,
    width: 10,
    borderRadius: 5,
    backgroundColor: '#eee',
    margin: 20
  }
})
