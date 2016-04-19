import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateMileStone, upDateMilestonForProjDet  } from '../../../actions/MilestoneAction';

class MilestonesInput extends Component {

  constructor(props){
    super(props)

    this.state = {
      name: "",
      startDate: moment(),
      endDate: moment()
    }

    this.milestoneNameHandle = this.milestoneNameHandle.bind(this)
    this.startDateHandleChange = this.startDateHandleChange.bind(this)
    this.endDateHandleChange = this.endDateHandleChange.bind(this)

  }

  componentWillMount(){
    if(this.props.fetchProjectDets == true){
      this.setState({
        name: this.props.data.name,
        startDate: moment(this.props.data.startDate, "YYYY MM DD"),
        endDate: moment(this.props.data.endDate, "YYYY MM DD")
      }, () => {
        this.props.updateMileStone({
          name: this.state.name,
          startDate: this.state.startDate.format("YYYY MM DD"),
          endDate: this.state.endDate.format("YYYY MM DD")
        }, this.props.id)
      })
  }
}

componentDidUpdate(){
  const data ={
    name: this.state.name,
    startDate: this.state.startDate.format("YYYY MM DD"),
    endDate: this.state.endDate.format("YYYY MM DD")
  }
  this.props.updateMileStone(data, this.props.id)
}

render(){
  return(
    <div className={`form-group`}>

      <div className={css(styles.displayFlex)}>
        <div className={css(styles.flex7)}>
          <label className={css(styles.label)}>Milestones</label>
          <input type="text" className={`form-control ${css(styles.inputStyle)}`}
            value={this.state.name} onChange={this.milestoneNameHandle} />
        </div>

        <div className={css(styles.flex1)}>
          <label className={css(styles.label), css(styles.inputMargin)}>Start Date</label>
          <DatePicker
            className={css(styles.datePicker)}
            selected={this.state.startDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.startDateHandleChange}
            />
        </div>

        <div className={css(styles.flex1)}>
          <label className={css(styles.label), css(styles.inputMargin)}>End Date</label>
          <DatePicker
            className={css(styles.datePicker)}
            selected={this.state.endDate}
            startDate={this.state.startDate}
            endDate={this.state.endDate}
            onChange={this.endDateHandleChange}
            />
        </div>
      </div>

    </div>
  )
}

milestoneNameHandle(event){
  this.setState({
    name: event.target.value
  })
}

startDateHandleChange(date){
  this.setState({
    startDate: date
  })
  console.log('start handle change',date)
}

endDateHandleChange(date){
  this.setState({
    endDate: date
  })
  console.log('end handle change', date.format( "YYYY MM DD"))
}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { updateMileStone, upDateMilestonForProjDet }, dispatch )
}

export default connect(null, mapDispatchToProps)(MilestonesInput);

const styles = StyleSheet.create({
  displayFlex: {
    display: 'flex',
  },
  datePicker: {
    flex: 1,
    marginLeft: 10,
    lineHeight: 2
  },
  flex7: {
    flex: 7
  },
  flex1: {
    flex: 1
  },
  inputMargin: {
    marginLeft: 10
  }
})
