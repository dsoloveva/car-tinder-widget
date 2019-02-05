import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { ChoiceContainer }  from '../choice-container';

const mapStateToProps = state => ({
  status: state.status
})

class MainContainerUI extends Component {
  render () {
    return (<Fragment>
      {this.props.status === 'in_progress'
        ? <ChoiceContainer></ChoiceContainer>
        : 'Waiting result'
      }
    </Fragment>);
  };
};

export default connect(mapStateToProps)(MainContainerUI);