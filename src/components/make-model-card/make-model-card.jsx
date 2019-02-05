import React, { Component } from 'react';
import { Button } from 'reactstrap';

import './make-model-card.css';

class MakeModelCard extends Component {

  renderInventory = (inv) => {
    const src = inv.vehicleInfo.photo.defaultPhoto
      ? inv.vehicleInfo.photo.defaultPhoto.large.url
      : 'https://static.ed.edmunds-media.com/unversioned/img/e17/no-vehicle-image.png';
    return (
      <div key={inv.vin} className="inventory-item">
        <img
          className="inventory-item__image"
          src={src}
          alt=""
        />
        <div className="inventory-item__title">
          {`${inv.type} ${inv.vehicleInfo.styleInfo.year} ${inv.vehicleInfo.styleInfo.make} ${inv.vehicleInfo.styleInfo.model} ${inv.vehicleInfo.styleInfo.trim}`}
        </div>
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
      <div>
        {inventories.results.map(inventory => this.renderInventory(inventory))}
      </div>
    </div>);
  };
};

export default MakeModelCard;