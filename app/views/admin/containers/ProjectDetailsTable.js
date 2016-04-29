import React ,{ Component, PropTypes } from 'react'
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';

import { List, ListItem, ListSubHeader, ListDivider, ListCheckbox } from 'react-toolbox/lib/list';
import { Layout, NavDrawer, Panel, Sidebar } from 'react-toolbox';
import Checkbox from 'react-toolbox/lib/checkbox';
import Table from 'react-toolbox/lib/table';
import Button from 'react-toolbox/lib/button';

import Firebase from 'firebase';
const fb = new Firebase('https://makepptdash.firebaseio.com/');

export default class ProjectDetailsTable extends Component {
  constructor(props){
    super(props)
    this.state={
      milestones: [],
    }
    this.checkBoxHandler = this.checkBoxHandler.bind(this)
    this.updateCompletedToFirebase = this.updateCompletedToFirebase.bind(this)
    this.archiveToFirebase = this.archiveToFirebase.bind(this)
    this.renderTable = this.renderTable.bind(this)
  }

  static contextTypes = {
    router: PropTypes.object
  }

  componentWillMount(){
    this.setState({
      milestones: [...this.props.data.milestones]
    })
  }

  componentDidUpdate(){
  }

  render(){
    return(
    <Layout >
      {this.renderTable()}
    </Layout>

    )
  }
  renderTable(){
    const model = {
      name: {type: String},
      startDate: { type: String},
      endDate: { type: String},
      completed: { type: Boolean}
    }
    return(
        <Panel>
          <div>
            <Button onClick={this.archiveToFirebase} className={css(styles.button1)} label="Archive" accent/>
          </div>
          <Table
            model={model}
            onChange={this.handleChange}
            selectable={false}
            selected={this.state.selected}
            source={this.state.milestones}
          />
          <div>
            <Link to= {`projects/${this.props.params}/edit`} >
              <Button className={css(styles.button2)} label="Edit" primary/>
            </Link>
          </div>
        </Panel>
    )
  }

  handleChange = (row, key, value) => {
   const source = this.state.milestones;
   if(key == "completed"){
        source[row][key] = value
        console.log(source[row])
        this.setState({source})
        this.updateCompletedToFirebase(source[row], this.props.params, row)
   }
  };

  checkBoxHandler(key ,value){
    console.log(key, value)
    this.state.milestones[key].completed = value
    this.setState({
      milestones: [...this.state.milestones]
    })
  }

 updateCompletedToFirebase(data, params, key){
    fb.child(`project/${params}/milestones/${key}`).update(data)
  }

  archiveToFirebase(){
    // fb.child('archive').push(this.state)
    // fb.child(`project/${this.props.params}`).remove()
    console.log(this.props.data)
    this.context.router.push('/projects');
  }
}

const styles = StyleSheet.create({
  button1: {
    borderStyle: 'solid',
    borderColor: '#f44336',
    borderWidth: 1,
    float: 'right',
    marginTop: 50,
    marginBottom: 50
  },
  button2:{
    borderStyle: 'solid',
    borderColor: '#2196f3',
    borderWidth: 1,
    float: 'right',
    marginTop: 50,
    marginBottom: 50
  }
})
