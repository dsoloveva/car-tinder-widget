import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MakeModelCard from '../make-model-card/make-model-card';

const mapStateToProps = state => ({
  results: state.results
})

class ResultContainerUI extends Component {
  render () {
    return (<Fragment>
      {this.props.results.map(item => <MakeModelCard key={`${item.make}-${item.model}`} makeModel={item}></MakeModelCard>)}
    </Fragment>);
  };
};

export default connect(mapStateToProps)(ResultContainerUI);