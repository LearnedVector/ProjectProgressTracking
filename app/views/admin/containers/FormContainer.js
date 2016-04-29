import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import ProjectForm from './ProjectForm'
import ProjectDetailsTable from './ProjectDetailsTable'
import Loading from '../components/Loading';

import { fetchProjDetsFromFirebase } from '../../../actions/FetchProjDetsFromFirebase';

export default class FormContainer extends Component {
  constructor(props){
    super(props)

    this.renderLoading = this.renderLoading.bind(this)
  }

  /*Dispatching an action will mutate your current state, which you should not do in the constructor
  (which is your getInitialState function with es6 classes).*/
  componentWillMount(){
    this.props.fetchProjDetsFromFirebase(this.props.params.id)
  }

  render(){
    if (this.props.projectDetail.isFetching == true)
      return this.renderLoading()
    else{
      return this.props.children || this.renderProjectDetailsForm()
    }
  }

  renderLoading(){
    return( <Loading />)
  }

  renderProjectDetailsForm(){
    return (
      <div className={`${css(styles.container)}`}>
        <ProjectDetailsTable data={this.props.projectDetail.data} params={this.props.params.id}/>
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
