import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import MakeModelCard from '../make-model-card/make-model-card';

const mapStateToProps = state => ({
  results: state.results
})

class ResultContainerUI extends Component {
  render () {
    return (<div className="d-flex flex-wrap justify-content-around">
      {this.props.results.map(item => 
        <MakeModelCard key={`${item.make}-${item.model}`} makeModel={item}>
        </MakeModelCard>)
      }
    </div>);
  };
};

export default connect(mapStateToProps)(ResultContainerUI);