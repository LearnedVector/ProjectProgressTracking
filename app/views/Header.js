import React , { Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { Link } from 'react-router';

import AppBar from 'react-toolbox/lib/app_bar';
import Button from 'react-toolbox/lib/button';

class Header extends Component {

  render(){
    return(
      <AppBar flat className={css(styles.nav)}>
        <Link to="/">
          <img className={css(styles.logo)} src="images/MakeLogo.png" />
        </Link>
        <Link to="/projects"> <Button icon='person' label='admin' />
        </Link>
      </AppBar>
    )
  }
}

const styles = StyleSheet.create({
  logo: {
    width: 220
  },
  nav: {
    backgroundColor: 'white',
    borderBottomStyle: 'solid',
    borderWidth: 1,
    borderColor: '#CCCCCC',
    justifyContent: 'space-between'
  }
})

export default Header;
