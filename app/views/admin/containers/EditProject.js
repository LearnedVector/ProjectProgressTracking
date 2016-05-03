import React ,{ Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MilestoneDetsInput from '../components/MilestoneDetsComponent';

// import { createMileStoneForProjDets } from '../../../actions/MilestoneAction';
// import { clearFormData } from '../../../actions/ProjectFormActions';
// import { updateFormData, updateToFirebase, fetchProjDetsFromFirebase } from '../../../actions/FetchProjDetsFromFirebase';

import { updateDetsToFirebase } from '../../../actions/editProjectDetailAction';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

class EditProject extends Component {
  constructor(props){
    super(props)
    console.log(props)
    this.state = {
      milestones: [],
      projectName: ""
    }

    this.newObj = {}
    this.projectNameHandler = this.projectNameHandler.bind(this)
    this.updateToFirebase = this.updateToFirebase.bind(this)
  }

  componentWillMount(){
    this.setState({
      milestones: [...this.props.projectDetail.data.milestones],
      projectName: this.props.projectDetail.data.projectName,
    })
  }

  componentDidUpdate(){
      let id = this.props.editProjDets.id
      let milestone = this.props.editProjDets.data
      this.state.milestones[id] = milestone
      // console.log('before', this.state.milestones[id])
      // milestone.startDate = milestone.startDate.toDateString()
      // milestone.endDate = milestone.endDate.toDateString()
      // console.log('after', this.state.milestones[id])
      this.newObj = {
        projectName: this.state.projectName,
        milestones: [...this.state.milestones]
      }
  }

  render(){
    let keys = 0
    return(
      <form className={css(styles.formContainer)}>
        <div className={`form-group`}>
          <Input type='text' label='Project Name' name='Project Name' value={this.state.projectName} onChange ={this.projectNameHandler}/>
        </div>
        {this.state.milestones.map((obj) => this.renderMilstonesInput(obj, keys++))}

        {/*<i onClick={() => this.milestoneRemoveHandler()} className={`material-icons ${css(styles.add)}`}>remove</i>
        <i onClick={() => this.milestoneAddHandler()} className={`material-icons ${css(styles.add)}`}>add</i>*/}

        <Button className={css(styles.button)} onClick={()=> this.updateToFirebase()} label='Update' flat primary />
      </form>

    )
  }

  projectNameHandler(value){
    this.setState({
      projectName: value
    })
  }

  renderMilstonesInput(obj,key){
      return (
        <MilestoneDetsInput key={key} id={key} data={obj}/>
      )
  }

  updateToFirebase(){
    console.log('upatetofirebase')
    this.props.updateDetsToFirebase(this.newObj, this.props.params.id)
  }
}

function mapStateToProps(state){
  return {
    projectDetail: state.projectDetail,
    editProjDets: state.editProjDets
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({updateDetsToFirebase}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(EditProject)

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
