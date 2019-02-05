import React from 'react';
import './choice-item.css';

export const ChoiceItem = ({img}) => (
  <img
    className="choice-item"
    src={`${process.env.PUBLIC_URL}/images/sm/${img}`}/>
);