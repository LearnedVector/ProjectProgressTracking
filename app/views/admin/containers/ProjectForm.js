import React ,{ Component } from 'react';
import { reduxForm } from 'redux-form';
import { StyleSheet, css } from 'aphrodite';
import DatePicker from 'react-datepicker';
import moment from 'moment';

export default class ProjectForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      startDate: moment(),
      endDate: moment()
    }

    this.startDateHandleChange = this.startDateHandleChange.bind(this)
    this.endDateHandleChange = this.endDateHandleChange.bind(this)
  }

  render(){
    return(
        <form className={css(styles.formContainer)}>
          <div className={`form-group`}>
            <label className={css(styles.label)}>Project Name</label>
            <input placeholder="Name..." type="text" className={`form-control ${css(styles.inputStyle)}`} />
          </div>

          <div className={`form-group`}>

            <div className={css(styles.displayFlex)}>
              <div className={css(styles.flex7)}>
                <label className={css(styles.label)}>Milestones</label>
                <input type="text" className={`form-control ${css(styles.inputStyle)}`} />
              </div>

              <div className={css(styles.flex1)}>
                <label className={css(styles.label), css(styles.inputMargin)}>Start Date</label>
                <DatePicker
                  className={css(styles.datePicker)}
                  selected={this.state.startDate}
                  onChange={this.startDateHandleChange}
                />
              </div>

              <div className={css(styles.flex1)}>
                <label className={css(styles.label), css(styles.inputMargin)}>End Date</label>
                <DatePicker
                  className={css(styles.datePicker)}
                  selected={this.state.endDate}
                  onChange={this.endDateHandleChange}
                />
              </div>
            </div>

          </div>

          <img className={css(styles.addImage)} src="images/Add.png" onClick={(event)=>console.log(event)}/>

          <button type="submit" className={css(styles.button)} onClick={(event)=>console.log(event)} >Submit</button>
        </form>
        )
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

const styles = StyleSheet.create({
  formContainer: {
    minWidth: 1000,
    marginTop: 50
  },
  label: {
    fontFamily: 'avenir next',
    color: '#666666'
  },
  inputStyle: {
    borderRadius: 0,
    borderColor: '#CCCCCC',
    fontFamily: 'avenir next'
  },
  button: {
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderColor: '#CCCCCC',
    borderWidth: 1,
    fontFamily: 'avenir next',
    fontWeight: 'lighter',
    padding: 5,
    color: '#666666',
    textDecoration: 'none',
    float: 'right',
    marginTop: 30
  },
  addImage: {
    height: 20,
    cursor: 'pointer'
  },
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
