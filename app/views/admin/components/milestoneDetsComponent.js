import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
// import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateMileStone, upDateMilestonForProjDet  } from '../../../actions/MilestoneAction';

import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';
import Checkbox from 'react-toolbox/lib/checkbox';

class MilestonesDetsInput extends Component {

  constructor(props){
    super(props)

    this.milestoneNameHandle = this.milestoneNameHandle.bind(this)
    this.startDateHandleChange = this.startDateHandleChange.bind(this)
    this.endDateHandleChange = this.endDateHandleChange.bind(this)

  }

  componentWillMount(){
    const startDate = new Date(this.props.data.startDate);
    const endDate =  new Date(this.props.data.endDate)
    this.setState({
      name: this.props.data.name,
      startDate: startDate,
      endDate: endDate,
      completed: this.props.data.completed
    })
    console.log(this.props.data)
  }

  componentDidUpdate(){
  }

  render(){
    return(
      <div className={`form-group`}>

        <div className={css(styles.displayFlex)}>
          <div className={css(styles.flex7)}>
            <Input type='text' label='Milestone' name='Milestones' value={this.state.name} onChange={this.milestoneNameHandle} />
          </div>

          <div className={css(styles.flex1)}>
            <DatePicker autoOk label='Start Date' onChange={this.startDateHandleChange}
              inputFormat={(value) => `${value.getMonth()+1}/${value.getDate()}/${value.getFullYear()}`} value={this.state.startDate} />
          </div>

          <div className={css(styles.flex1)}>
            <DatePicker autoOk label='End Date' onChange={this.endDateHandleChange}
              inputFormat={(value) => `${value.getMonth()+1}/${value.getDate()}/${value.getFullYear()}`} value={this.state.endDate}/>
          </div>
          <div>
            <Input type='text' label='Completed' value={this.state.completed ? "YES" : "NO"} disabled />
          </div>
        </div>
      </div>
    )
  }

  milestoneNameHandle(value){
    this.setState({
      name: value
    })
  }

  startDateHandleChange(date){
    this.setState({
      startDate: date
    })
  }

  endDateHandleChange(date){
    this.setState({
      endDate: date
    })
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { upDateMilestonForProjDet }, dispatch )
}

export default connect(null, mapDispatchToProps)(MilestonesDetsInput);

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
    flex: 4
  },
  flex1: {
    flex: 1
  },
  inputMargin: {
    marginLeft: 10
  }
})
