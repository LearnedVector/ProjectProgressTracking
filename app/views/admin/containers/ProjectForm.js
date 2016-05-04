import React ,{ Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMileStone, deleteMilestone } from '../../../actions/MilestoneAction';
import { submitForm, clearFormData } from '../../../actions/ProjectFormActions';

import MilestonesInput from '../components/milestonesComponent';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

class ProjectForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      projectName: ""
    }

    this.projectNameHandler = this.projectNameHandler.bind(this)
    this.milestoneAddHandler = this.milestoneAddHandler.bind(this)
    this.milestoneRemoveHandler = this.milestoneRemoveHandler.bind(this)
    this.renderMilstonesInput = this.renderMilstonesInput.bind(this)
    this.submitHandler = this.submitHandler.bind(this)
  }

  componentDidUpdate(){
    if(this.props.form.submit == true){
      this.props.clearFormData();
      this.context.router.push('/projects');
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  render(){
    return(
      <form className={css(styles.formContainer)}>
        <div className={`form-group`}>
          <Input type='text' label='Project Name' name='Project Name' value={this.state.projectName} onChange ={this.projectNameHandler}/>
        </div>
        {this.props.form.milestoneKeys.map((key) => this.renderMilstonesInput(key))}

        <i onClick={() => this.milestoneRemoveHandler()} className={`material-icons ${css(styles.add)}`}>remove</i>
        <i onClick={() => this.milestoneAddHandler()} className={`material-icons ${css(styles.add)}`}>add</i>

        <Button className={css(styles.button)} onClick={()=> this.submitHandler()} label='Submit' flat primary />
      </form>
    )
  }

  projectNameHandler(value){
    this.setState({
      projectName: value
    })
  }

  milestoneAddHandler(){
    this.props.createMileStone()
  }

  milestoneRemoveHandler(){
    this.props.deleteMilestone()
  }

  renderMilstonesInput(key){
      return <MilestonesInput key={key} id={key} fetchProjectDets={false}/>
  }

  submitHandler(){
    this.props.form.milestones.map((obj)=> ( obj.completed = false ))
    const data = {
      projectName: this.state.projectName,
      milestones: this.props.form.milestones
    }
    console.log(data)
    this.props.submitForm(data)
  }
}

function mapStateToProps(state){
  return {
    form: state.form,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createMileStone, deleteMilestone, submitForm, clearFormData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectForm);

const styles = StyleSheet.create({
  formContainer: {
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
    borderStyle: 'solid',
    borderColor: '#2196f3',
    borderWidth: 1,
    float: 'right',
  },
  add: {
    height: 20,
    cursor: 'pointer'
  }
})
