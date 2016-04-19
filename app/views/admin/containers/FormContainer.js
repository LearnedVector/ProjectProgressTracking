import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectForm from './ProjectForm'
import ProjectDetailsForm from './ProjectDetailsForm'

import { fetchProjDetsFromFirebase } from '../../../actions/FetchProjDetsFromFirebase';

export default class FormContainer extends Component {
  constructor(props){
    super(props)

    this.renderLoading = this.renderLoading.bind(this)
    this.renderProjectForm = this.renderProjectForm.bind(this)
  }

  /*Dispatching an action will mutate your current state, which you should not do in the constructor
  (which is your getInitialState function with es6 classes).*/
  componentWillMount(){
    if(this.props.location.state.fetchProjectDets == true)
    this.props.fetchProjDetsFromFirebase(this.props.params.id)
  }

  render(){
    if (this.props.projectDetail.isFetching == true && (this.props.params.id !== 'addnew'))
      return this.renderLoading()
    else if (this.props.params.id == 'addnew')
      return this.renderProjectForm()
    else
      return this.renderProjectDetailsForm()
  }

  renderLoading(){
    return( <div> LOADING </div>)
  }

  renderProjectForm(){
    return(
      <div className={css(styles.container)}>
        <ProjectForm />
      </div>
    )
  }

  renderProjectDetailsForm(){
    return (
      <div className={css(styles.container)}>
        <ProjectDetailsForm data={this.props.projectDetail.data} params={this.props.params.id}/>
      </div>
        )
  }

}

function mapStateToProps(state){
  return {
    projectDetail: state.projectDetail
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchProjDetsFromFirebase }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer);

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})
