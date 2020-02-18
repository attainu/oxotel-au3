import React, { Component } from 'react';
import '../styles.css';

class AddOn extends Component {

  selectedAddOn(k) {
    this.props.selectedAddOn(k);
  } 

  render() {
    return (
      <div className="">
        <ul className="list-group">
          {this.props.addon.map((el, i) => {
            return <li
              className="list-group-item list-group-item-action"
              key={i}
              onClick={this.selectedAddOn.bind(this, el)}
            >
              <a href="#">{el.type}</a>
              <span className="d-none">{el.price}</span>
            </li>
          })}
        </ul>

        <div className="row justify-content-between">
          <div className="col-3">
            <button 
            className="aligh-right btn-primary btn mt-4"
            onClick={this.props.servicePrev}>Prev</button>
          </div>
          <div className="col-3 text-right">
            <button 
            className="aligh-right btn-primary btn mt-4"
            onClick={this.props.addonNext}>Next</button>
          </div>
        </div>

      </div>
    );
  }
}

export default AddOn;
