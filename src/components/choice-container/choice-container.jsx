import React from 'react';
import { ChoiceItem } from './choice-item';
import { connect } from 'react-redux';
import { like, dislike, process } from '../../actions/tags';
import { startFetching } from '../../actions/status';
import { loadResult } from '../../actions/results';
import { LEFT, RIGHT } from '../../constants/keys';
import { Button } from 'reactstrap';

import './choice-container.css';

const mapStateToProps = state => ({
  itemsList: state.choiceItems,
})

const mapDispatchToProps = dispatch => ({
  like: (tag, item) => dispatch(like(tag, item)),
  dislike: (tag, item) => dispatch(dislike(tag, item)),
  process: (item) => dispatch(process(item)),
  startFetching: () => dispatch(startFetching()),
  loadResult: () => dispatch(loadResult())
});
class ChoiceContainerUi extends React.Component {
  state = {
    currentItem: this.props.itemsList[0],
  };

  handleKey = (e) => {
    const prevItem = { ...this.state.currentItem };

    const nonprocessed = this.props.itemsList.filter(item => !item.status);
    nonprocessed.length > 1 && this.setState({ currentItem: nonprocessed[1] });
    
    if (e.keyCode === LEFT) {
      this.props.dislike(prevItem.tags, prevItem.img);
    } else if (e.keyCode === RIGHT) {
      this.props.like(prevItem.tags, prevItem.img);
    }
    if (nonprocessed.length === 1) {
      this.props.loadResult();
      return;
    }
    // this.setState({ currentItem: this.state.currentItem + 1 });
  };

  handleLike = () => {
    const prevItem = { ...this.state.currentItem };

    const nonprocessed = this.props.itemsList.filter(item => !item.status);
    nonprocessed.length > 1 && this.setState({ currentItem: nonprocessed[1] });

    this.props.like(prevItem.tags, prevItem.img);
    if (nonprocessed.length === 1) {
      this.props.loadResult();
      return;
    }
    // this.setState({ currentItem: this.state.currentItem + 1 });
  }

  handleDislike = () => {
    const prevItem = { ...this.state.currentItem };

    const nonprocessed = this.props.itemsList.filter(item => !item.status);
    nonprocessed.length > 1 && this.setState({ currentItem: nonprocessed[1] });

    this.props.dislike(prevItem.tags, prevItem.img);
    if (nonprocessed.length === 1) {
      this.props.loadResult();
      return;
    }
  }

  focusContainer = (component) => {
    if (component) {
      component.focus();
    }
  };

  handleAnimationEnd = (item) => {
    this.props.process(item);
  };

  render () {
    return (<div
        className="choice-container"
        ref={this.focusContainer}
        tabIndex="0"
        onKeyDown={this.handleKey}
      >
      <h1>Like or Dislike?</h1>
      <div className="choice-items">
        { this.props.itemsList && [...this.props.itemsList].reverse().map((item, index) => (
          <ChoiceItem
            animationEnd={this.handleAnimationEnd}
            key={item.img}
            img={item.img}
            status={item.status}
            visible={(this.state.currentItem && item.img === this.state.currentItem.img) || item.status}
          >
          </ChoiceItem>
        ))}
      </div>
      {/* <ChoiceItem
        img={this.props.itemsList[this.state.currentItem].img}
      >
      </ChoiceItem> */}
      <div className="buttons">
        <Button color="danger" onClick={this.handleDislike} className="dislike">
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
          <title>dislike</title>
          <path fill="#fff" d="M3 14c-2.281 0-1-6 1-6-1 0 0-5 2-5 0-2 2-3 4-3 8.448 0 5.477 2.114 14 3v16c-7.529 2.258-15 7.919-15 13-1.656 0-6-2 0-12 0 0-5 0-6 0-3 0-2-6 0-6zM26 19v-16h-2v-1h4c1.1 0 2 1.35 2 3v12c0 1.65-0.9 3-2 3h-4v-1h2z"></path>
          </svg>
          Dislike
        </Button>
        <Button color="danger" onClick={this.handleLike} className="like">
          Like
          <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 32 32">
          <title>like</title>
          <path fill="#fff" d="M29 18c2.281 0 1 6-1 6 1 0 0 5-2 5 0 2-2 3-4 3-8.448 0-5.477-2.114-14-3v-16c7.529-2.258 15-7.92 15-13 1.656 0 6 2 0 12 0 0 5 0 6 0 3 0 2 6 0 6zM6 13v16h2v1h-4c-1.1 0-2-1.35-2-3v-12c0-1.65 0.9-3 2-3h4v1h-2z"></path>
          </svg>
        </Button>
      </div>
    </div>);
  };
};

export const ChoiceContainer = connect(mapStateToProps, mapDispatchToProps)(ChoiceContainerUi);