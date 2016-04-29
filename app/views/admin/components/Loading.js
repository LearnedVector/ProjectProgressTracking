import React, { Component } from 'react';
import ProgressBar from 'react-toolbox/lib/progress_bar';
import { StyleSheet, css } from 'aphrodite';

export default () => {
  return (
    <div className={css(styles.container)}>
      <ProgressBar type="circular" mode="indeterminate" multicolor={true}/>
    </div>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: '90vh'
  }
})
