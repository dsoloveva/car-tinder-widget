import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  results: state.results
})

class ResultContainerUI extends Component {
  render () {
    return (<Fragment>
      
    </Fragment>);
  };
};

export default connect(mapStateToProps)(ResultContainerUI);