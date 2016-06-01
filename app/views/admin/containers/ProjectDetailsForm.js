import React ,{ Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { createMileStoneForProjDets } from '../../../actions/MilestoneAction';
import { clearFormData } from '../../../actions/ProjectFormActions';
import { updateFormData, updateToFirebase } from '../../../actions/FetchProjDetsFromFirebase';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

import MilestonesInput from '../components/milestonesComponent';

class ProjectDetailsForm extends Component {
  constructor(props){
    super(props)

    this.projectNameHandler = this.projectNameHandler.bind(this)
    this.milestoneOnHandleChange = this.milestoneOnHandleChange.bind(this)
    this.renderMilstonesInput = this.renderMilstonesInput.bind(this)
    this.updateHandler = this.updateHandler.bind(this)
    this.deleteHandler = this.deleteHandler.bind(this)
  }

  componentWillMount(){
    this.setState({
      projectName: this.props.data.projectName
    })

    const data = {
      projectName: this.props.data.projectName,
      milestones: [...this.props.data.milestones],
      milestoneKeys: [],
      numOfMilestones: 0,
    }
    let i = 0;
    data.milestones.map(() => data.milestoneKeys = [...data.milestoneKeys, i++])
    data.numOfMilestones = i
    this.props.updateFormData(data)
  }

  componentDidUpdate(){
    console.log('prjtdetsform',this.props)
    if(this.props.projectDetail.update == true){
      this.props.clearFormData();
      this.context.router.push('/projects');
    }
  }

  static contextTypes = {
    router: PropTypes.object
  }

  render(){
    return(
      <div >
        <div className={css(styles.deleteContainer)}>
          <Button className={css(styles.button)} onClick={()=> this.deleteHandler()} label='Delete' flat accent />
        </div>
        <form className={css(styles.formContainer)}>
          <Input type='text' label='Project Name' name='Project Name' value={this.state.projectName} onChange ={this.projectNameHandler}/>
          {/*<div className={`form-group`}>
            <label className={css(styles.label)}>Project Name</label>
            <input placeholder="Name..." type="text" className={`form-control ${css(styles.inputStyle)}`}
            value={this.state.projectName} onChange ={(event) => this.projectNameHandler(event)} />
            </div>
            {this.props.projectDetail.milestoneKeys.map((key) => this.renderMilstonesInput(key))}
            <img className={css(styles.addImage)} src="images/Add.png" onClick={() => this.milestoneOnHandleChange()}/>
          <button className={css(styles.button)} onClick={()=> this.updateHandler()} >Update</button>*/}
        </form>

      </div>
    )
  }

  projectNameHandler(value){
    this.setState({
      projectName: value
    })
  }

  milestoneOnHandleChange(){
    this.props.createMileStoneForProjDets()
  }

  renderMilstonesInput(key){
      return <MilestonesInput key={key} id={key} data={this.props.data.milestones[key]} fetchProjectDets={true}/>
  }

  updateHandler(){
    const data = {
      projectName: this.state.projectName,
      milestones: this.props.projectDetail.milestones
    }
    this.props.updateToFirebase(data, this.props.params)
  }

  deleteHandler(){
    console.log('delete')
  }
}

function mapStateToProps(state){
  return {
    projectDetail: state.projectDetail,
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ createMileStoneForProjDets, clearFormData, updateToFirebase, updateFormData }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectDetailsForm);

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
    borderColor: '#CCCCCC',
    borderWidth: 1,
    float: 'right',
  },
  addImage: {
    height: 20,
    cursor: 'pointer'
  },
  deleteContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 40,
  }
})
