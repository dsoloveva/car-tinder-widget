import React from 'react';
import classNames from 'classnames';
import './choice-item.css';

export const ChoiceItem = ({img, status, animationEnd, visible}) => (
  <div 
    className = {classNames(
      'choice-item',
      { 'choice-item--visible': visible }
    )}>
    <img
      onAnimationEnd={() => animationEnd(img)}
      className = {classNames(
        'choice-item__image',
        `choice-item__image--${status}`
      )}
      src={`images/sm/${img}`}
      alt={img}
    />
  </div>
);