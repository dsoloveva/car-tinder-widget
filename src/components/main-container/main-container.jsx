import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ChoiceContainer }  from '../choice-container';
import ResultContainer  from '../result-container/result-container';

const mapStateToProps = state => ({
  status: state.status
})

class MainContainerUI extends Component {
  render () {
    return (<Fragment>
      {this.props.status === 'in_progress'
        ? <ChoiceContainer></ChoiceContainer>
        : this.props.status === 'fetching'
          ? 'loading'
          : <ResultContainer></ResultContainer>
      }
    </Fragment>);
  };
};

export default connect(mapStateToProps)(MainContainerUI);