import React from 'react';
import './choice-item.css';

export const ChoiceItem = ({img}) => (
  <div className="choice-item">
    <img
      className="choice-item__image"
      src={`images/sm/${img}`}
      alt={img}
    />
  </div>
);