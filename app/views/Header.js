import React , { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';

class Header extends Component {

  render(){
    return(
      <div>
        <div className={'navbar'}>
          <Link to="/">
            <img className={css(styles.logo)} src="images/MakeLogo.png" />
          </Link>
          <Link to="/projects" className={css(styles.button)}>Manage</Link>
        </div>
        <div className={css(styles.bottomBorder)}>
        </div>
      </div>
    )
  }
}

const styles = StyleSheet.create({
  bottomBorder: {
    borderBottomStyle: 'solid',
    borderWidth: 1,
    borderColor: '#CCCCCC',
  },
  logo: {
    width: 220
  },
  button: {
    float: 'right',
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

export default Header;
