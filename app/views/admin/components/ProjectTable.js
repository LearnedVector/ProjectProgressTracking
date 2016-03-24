import React from 'react';
import { Link } from 'react-router';
import { StyleSheet, css } from 'aphrodite';

export default (props)=> {
  return (
    <div className={css(styles.SecondaryContainer)}>
      <div className={css(styles.AddnewContainer)}>
        <Link to="/admin/addnew" className={css(styles.button)}>Add New</Link>
      </div>
      <div className={css(styles.ProjectTableContainer)}>
      </div>
    </div>
  )
}

const styles = StyleSheet.create({
  SecondaryContainer: {
    display: 'flex',
    flexDirection: 'column',
    height: 500,
  },
  ProjectTableContainer: {
    display: 'flex',
    flex: 7,
    border: '2px solid green'
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
