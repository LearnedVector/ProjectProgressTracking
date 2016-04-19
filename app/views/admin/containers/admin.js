import React ,{ Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';

class Admin extends Component {
  constructor(props){
    super(props)

  }
  render() {
    return(
      <div className={css(styles.container)}>
        {this.props.children}
      </div>
    )
  }
}

export default Admin;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'column'
  }
})
