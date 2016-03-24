import React, { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';

import ProjectForm from './ProjectForm'

class Addnew extends Component {
  render(){
    return(
      <div className={css(styles.container)}>
        <ProjectForm />
      </div>

    )
  }
}

export default Addnew;

const styles = StyleSheet.create({
  container:{
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  }
})
