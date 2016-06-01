import React, { Component } from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { fetchFromFirebase } from '../../../actions/FetchFromFirebase';
import { doneArchiveToFB } from '../../../actions/archive';

import TableRow from '../components/TableRow';
import Loading from '../components/Loading';

import { List, ListSubHeader } from 'react-toolbox/lib/list';
import Button from 'react-toolbox/lib/button';

class ProjectTable extends Component {
  constructor(props){
    super(props)
    this.state={
      update: false
    }

    this.renderTableRow = this.renderTableRow.bind(this)
    this.renderTable = this.renderTable.bind(this)
    this.renderLoading = this.renderLoading.bind(this)
    this.renderAddnew = this.renderAddnew.bind(this)
  }

  componentWillMount(){
    this.props.fetchFromFirebase()
  }

  componentDidUpdate(){
    if (this.props.archive.archive == true){
      this.props.doneArchiveToFB()
      this.props.fetchFromFirebase()
    }
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

    const model = {
      ProjectName: {type: String},
      Complete: {type: String}
    };

    return(
      <div className={`${css(styles.SecondaryContainer)}`}>
        {this.renderAddnew()}
        <div className={css(styles.listcontainer)}>
          <List className={css(styles.list)}>
            <ListSubHeader caption="Project Name"/>
            {arr.map((data) => this.renderTableRow(data))}
          </List>
        </div>
      </div>
    )
  }

  renderLoading(){
    return( <Loading />)
  }
  renderTableRow(data){
    let value = 0;
    let max = 0;
    for(let i = 0; i < data.milestones.length; i++){
      if(data.milestones[i].completed == true){
        value ++
        max++
      }else{
        max++
      }
    }
    return( <TableRow key={data.key} data={data} value={value} max={max}/> )
  }
  renderAddnew(){
    return(
      <div className={css(styles.AddnewContainer)}>
        <Link to={{pathname: "/projects/addnew"}} className={css(styles.button)}>
          <Button label="Add" icon="create_new_folder" primary/>
        </Link>
      </div>
  )
  }

}

function mapStateToProps(state){
  return {
    project: state.project,
    archive: state.archive
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators( { fetchFromFirebase, doneArchiveToFB }, dispatch )
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
    float: 'right'
  },
  list: {
    marginTop: 50,
    maxWidth: 800
  },
  listcontainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  }
})
