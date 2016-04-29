import React ,{ Component, PropTypes } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import MilestoneDetsInput from '../components/MilestoneDetsComponent';

import { createMileStoneForProjDets } from '../../../actions/MilestoneAction';
import { clearFormData } from '../../../actions/ProjectFormActions';
import { updateFormData, updateToFirebase, fetchProjDetsFromFirebase } from '../../../actions/FetchProjDetsFromFirebase';

import Button from 'react-toolbox/lib/button';
import Input from 'react-toolbox/lib/input';

class EditProject extends Component {
  constructor(props){
    super(props)

  }

  componentWillMount(){
    this.setState({
      milestones: [...this.props.projectDetail.data.milestones],
      projectName: this.props.projectDetail.data.projectName,
      key: 0
    })
  }

  componentDidUpdate(){
    console.log(this.state)
  }

  render(){
    return(
      <form className={css(styles.formContainer)}>
        <div className={`form-group`}>
          <Input type='text' label='Project Name' name='Project Name' value={this.state.projectName} onChange ={this.projectNameHandler}/>
        </div>
        {this.state.milestones.map((obj) => this.renderMilstonesInput(obj, this.state.key++))}

        {/*<i onClick={() => this.milestoneRemoveHandler()} className={`material-icons ${css(styles.add)}`}>remove</i>
        <i onClick={() => this.milestoneAddHandler()} className={`material-icons ${css(styles.add)}`}>add</i>*/}

        <Button className={css(styles.button)} onClick={()=> console.log('update')} label='Update' flat primary />
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
}

function mapStateToProps(state){
  return {
    projectDetail: state.projectDetail,
  }
}

export default connect(mapStateToProps)(EditProject)

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
