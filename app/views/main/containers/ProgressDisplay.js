import React ,{ Component } from 'react';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Slider from 'react-slick/dist/react-slick';

import Project from '../components/Projects';
import Loading from '../../admin/components/Loading';

import { FetchForProgressDisplay } from '../../../actions/FetchForProgressDisplay';

class ProgressDisplay extends Component {
  constructor(){
    super()
    this.state = {
      isReady: false
    }
    this.arr = []
    this.key = 0

    this.renderSlider = this.renderSlider.bind(this)
    this.renderProjects = this.renderProjects.bind(this)
  }

  componentWillMount(){
    this.props.FetchForProgressDisplay()
  }

  componentDidUpdate(){
    if (this.props.progressDisplay.isFetching == false && this.state.isReady == false){
      const obj = this.props.progressDisplay.projects
      let keys = Object.keys(obj)
      let i = 0
      this.arr = Object.keys(obj).map( (key) => obj[key]) //turning object into array
      this.arr.map((newobj) => newobj['key'] = keys[i++]) //giving each object in arr primary keys from database
      this.setState({
        isReady: true
      })
    }
  }

  render() {
    return (!this.state.isReady) ? <Loading /> : this.renderSlider()
  }

  renderSlider(){
    var settings = {
      dots: true,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 10000,
      fade: true,
      slidesToShow: 1,
      slidesToScroll: 1
    }
    
    return(
      <div id="slider" className={`container ${css(styles.sliderContainer)}`}>
        <Slider {...settings}>
          {this.arr.map((data) => this.renderProjects(data, data.key))}
        </Slider>
      </div>
    )
  }

  renderProjects(data, id){
    return(
      <div key={this.key++}><Project data={data} /></div>
    )
  }
}

function mapStateToProps(state){
  return {
    progressDisplay: state.progressDisplay
  }
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({ FetchForProgressDisplay },dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(ProgressDisplay);

const styles = StyleSheet.create({
  sliderContainer: {
    height: '100%',
    marginTop: 50
    }
})
