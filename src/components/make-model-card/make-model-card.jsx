import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import './make-model-card.css';

class MakeModelCard extends Component {

  renderInventory = (inv) => {
    const src = inv.vehicleInfo.photo.defaultPhoto
      ? inv.vehicleInfo.photo.defaultPhoto.large.url
      : 'https://static.ed.edmunds-media.com/unversioned/img/e17/no-vehicle-image.png';
    const title = `${inv.vehicleInfo.styleInfo.year} ${inv.vehicleInfo.styleInfo.trim}`;
    return (
      <div key={inv.vin} className="inventory-item m-1">
        <a
          href={`https://www.edmunds.com/${inv.vehicleInfo.styleInfo.make}/${inv.vehicleInfo.styleInfo.model}/${inv.vehicleInfo.styleInfo.year}/vin/${inv.vin}/`}
          target="_blanc"
        >
          <Card className="h-100">
            <div 
              className="card_image"
              style={{ backgroundImage: `url(${src})` }}
            >
            </div>
            {/* <CardImg top width="100%" src={src} alt="" /> */}
            {<CardBody>
              <CardTitle>{title}</CardTitle>
              <CardSubtitle>Base MSRP: {inv.prices.baseMsrp.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</CardSubtitle>
            </CardBody> }
          </Card>
        </a>
      </div>
    )
  }

  convertUrlParam = (param) => param.toLowerCase().replace(' ', '-');

  render () {
    const { make, model, inventories} = this.props.makeModel;
    const title = `${make} ${model}`;
    return (
      <div
          className="make-model-card"
        >
        <div className="card_header m-3">
          <a className="d-block h5 mb-0" href={`https://www.edmunds.com/${this.convertUrlParam(make)}/${this.convertUrlParam(model)}/`} target="_blanc">
            {title}
          </a>
        </div>
        <div className="inventories justify-content-around">
          {inventories.results.map(inventory => this.renderInventory(inventory))}
        </div>
      </div>
    );
  };
};

export default MakeModelCard;