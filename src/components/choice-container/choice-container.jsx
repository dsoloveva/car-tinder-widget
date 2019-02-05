import React from 'react';
import { ChoiceItem } from './choice-item';
import { connect } from 'react-redux';
import { like, dislike } from '../../actions/tags';
import { startFetching } from '../../actions/status';
import { loadResult } from '../../actions/results';
import { LEFT, RIGHT } from '../../constants/keys';

import './choice-container.css';

const mapStateToProps = state => ({
  itemsList: state.choiceItems,
})

const mapDispatchToProps = dispatch => ({
  like: (tag) => dispatch(like(tag)),
  dislike: (tag) => dispatch(dislike(tag)),
  startFetching: () => dispatch(startFetching()),
  loadResult: () => dispatch(loadResult())
});
class ChoiceContainerUi extends React.Component {
  state = {
    currentItem: 0,    
  };

  handleKey = (e) => {
    if (this.state.currentItem === this.props.itemsList.length - 1) {
      this.props.loadResult();
    }

    if (e.keyCode === LEFT) {
      this.props.dislike(this.props.itemsList[this.state.currentItem].tags);
    } else if (e.keyCode === RIGHT) {
      this.props.like(this.props.itemsList[this.state.currentItem].tags);
    }
    this.setState({ currentItem: this.state.currentItem + 1 });
  };

  focusContainer = (component) => {
    if (component) {
      component.focus();
    }
  };

  render () {
    return (<div
        className="choice-container"
        ref={this.focusContainer}
        tabIndex="0"
        onKeyDown={this.handleKey}
      >
      <h1>Like or Dislike?</h1>
      <ChoiceItem
        img={this.props.itemsList[this.state.currentItem].img}
      >
      </ChoiceItem>
    </div>);
  };
};

export const ChoiceContainer = connect(mapStateToProps, mapDispatchToProps)(ChoiceContainerUi);