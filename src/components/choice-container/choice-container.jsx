import React from 'react';
import { ChoiceItem } from './choice-item';
import { connect } from 'react-redux';
import { pushTag } from '../../actions/tags';
import { RIGHT } from '../../constants/keys';

import './choice-container.css';

const mapStateToProps = state => ({ itemsList: state.choiceItems })

const mapDispatchToProps = dispatch => ({
  pushTag: (tag) => dispatch(pushTag(tag)),
});
class ChoiceContainerUi extends React.Component {
  state = {
    currentItem: 0,    
  };

  handleKey = (e) => {
    if (this.state.currentItem >= this.props.itemsList.length - 1) {
      return;
    }
    if (e.keyCode === RIGHT) {
      this.props.pushTag(this.props.itemsList[this.state.currentItem].tags);
    }
    this.setState({ currentItem: this.state.currentItem + 1 });
  };

  focusContainer = (component) => {
    if (component) {
      component.focus();
    }
  };

  render () {
    debugger;
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