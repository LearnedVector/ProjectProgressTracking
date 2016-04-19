import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFromFirebase } from '../../../actions/FetchFromFirebase';

import TableRow from '../components/TableRow';

class ProjectTable extends Component {
  constructor(props){
    super(props)

    this.renderTableRow = this.renderTableRow.bind(this)
    this.renderTable = this.renderTable.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderAddnew = this.renderAddnew.bind(this)
  }

  componentWillMount(){
    this.props.fetchFromFirebase()
  }

  componentDidupdate(){
    this.props.fetchFromFirebase()
  }

  render() {
    if(this.props.project.isFetching == true)
      return (this.renderLoading())
    else if(this.props.project.isFetching == false && (this.props.project.data !== null))
      return (this.props.children || this.renderTable())
    else
      return (this.props.children || this.renderAddnew())
  }

  renderTable(){
    const obj = this.props.project.data
    let keys = Object.keys(obj)
    let i = 0
    const arr = Object.keys(obj).map( (key) => obj[key]) //turning object into array
    arr.map((newobj) => newobj['key'] = keys[i++]) //giving each object in arr primary keys from database

    return(
      <div className={css(styles.SecondaryContainer)}>
        {this.renderAddnew()}
        <div className={css(styles.ProjectTableContainer)}>
          <table className="table">
            <thead>
              <tr>
                <th>Project Name</th>
                <th> % Complete</th>
              </tr>
            </thead>
            <tbody>
              {arr.map((data) => this.renderTableRow(data))}
            </tbody>
          </table>
        </div>
      </div>
    )
  }

  renderLoading(){
    return( <div> LOADING </div>)
  }
  renderTableRow(data){
    return( <TableRow key={data.key} data={data}/> )
  }
  renderAddnew(){
    return(
      <div className={css(styles.AddnewContainer)}>
        <Link to={{pathname: "/projects/addnew" ,state: {fetchProjectDets: false} }} className={css(styles.button)}>Add New</Link>
      </div>
  )
  }

}

function mapStateToProps(state){
  return {
    project: state.project
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchFromFirebase }, dispatch )
}

export default connect(mapStateToProps, mapDispatchToProps)(ProjectTable);

const styles = StyleSheet.create({
  SecondaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 500,
  },
  ProjectTableContainer: {
    display: 'flex',
    flex: 7,
  },
  AddnewContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    paddingTop: 40,
    paddingBottom: 40
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
    textDecoration: 'none'
  }
})
