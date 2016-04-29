import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
// import DatePicker from 'react-datepicker';
import moment from 'moment';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { updateMileStone, upDateMilestonForProjDet  } from '../../../actions/MilestoneAction';

import Input from 'react-toolbox/lib/input';
import DatePicker from 'react-toolbox/lib/date_picker';

class MilestonesInput extends Component {

  constructor(props){
    super(props)
    const datetime = new Date();
    this.state = {
      name: "",
      startDate: datetime,
      endDate: datetime
    }

    this.milestoneNameHandle = this.milestoneNameHandle.bind(this)
    this.startDateHandleChange = this.startDateHandleChange.bind(this)
    this.endDateHandleChange = this.endDateHandleChange.bind(this)

  }

  componentWillMount(){
  //   if(this.props.fetchProjectDets == true){
  //     this.setState({
  //       name: this.props.data.name,
  //       startDate: moment(this.props.data.startDate, "YYYY MM DD"),
  //       endDate: moment(this.props.data.endDate, "YYYY MM DD")
  //     }, () => {
  //       this.props.updateMileStone({
  //         name: this.state.name,
  //         startDate: this.state.startDate.format("YYYY MM DD"),
  //         endDate: this.state.endDate.format("YYYY MM DD")
  //       }, this.props.id)
  //     })
  // }
}

componentDidUpdate(){
  const data ={
    name: this.state.name,
    startDate: this.state.startDate.toDateString(),
    endDate: this.state.endDate.toDateString()
  }
  this.props.updateMileStone(data, this.props.id)
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
            inputFormat={(value) => `${value.getMonth()+1}/${value.getDate()}/${value.getFullYear()}`} value={this.state.endDate} />
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
    flex: 4
  },
  flex1: {
    flex: 1
  },
  inputMargin: {
    marginLeft: 10
  }
})
