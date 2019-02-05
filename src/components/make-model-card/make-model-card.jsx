import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button } from 'reactstrap';

import './make-model-card.css';

class MakeModelCard extends Component {

  renderInventory = (inv) => {
    const src = inv.vehicleInfo.photo.defaultPhoto
      ? inv.vehicleInfo.photo.defaultPhoto.large.url
      : 'https://static.ed.edmunds-media.com/unversioned/img/e17/no-vehicle-image.png';
    const title = `${inv.type} ${inv.vehicleInfo.styleInfo.year} ${inv.vehicleInfo.styleInfo.make} ${inv.vehicleInfo.styleInfo.model} ${inv.vehicleInfo.styleInfo.trim}`;
    return (
      <div key={inv.vin} className="inventory-item">
        <a 
          href={`https://www.edmunds.com/${inv.vehicleInfo.styleInfo.make}/${inv.vehicleInfo.styleInfo.model}/${inv.vehicleInfo.styleInfo.year}/vin/${inv.vin}/`}
          target="_blanc"
        >
          <Card>
            <CardImg top width="100%" src={src} alt="" />
            <CardBody>
              <CardTitle>{title}</CardTitle>
              <CardSubtitle>Base MSRP: {inv.prices.baseMsrp.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</CardSubtitle>
              {/* <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText> */}
            </CardBody>
          </Card>
        </a>
      </div>
    )
  }

  render () {
    const { make, model, inventories} = this.props.makeModel;
    const title = `${make} ${model}`;
    return (<div
        className="make-model-card"
      >
      <div>
        <a className="d-block h5 mb-0" href="/mazda/cx-5/2019/vin/JM3KFACM9K0530733/?paymenttype=lease">
          {title}
        </a>
      </div>
      <div className="inventories">
        {inventories.results.map(inventory => this.renderInventory(inventory))}
      </div>
    </div>);
  };
};

export default MakeModelCard;