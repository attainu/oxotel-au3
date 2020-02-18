import React, { Component } from 'react';
//import '../style.css';

var styles = {
    active: {
      backgroundColor: '#337ab7',
      color: '#ffffff'
    },
    inactive: {
      backgroundColor: 'inherit',
      color: 'inherit'
    }
};


class Services extends Component {

  selectedService(i) {
    this.props.selectedService(i);
  } 

  render() {
    
    return (
      <div className="">
        <ul className="list-group">
          {this.props.services.map((el, i) => {
            return <li
              className="list-group-item list-group-item-action"
              key={i}
              onClick={this.selectedService.bind(this, el)}
            >
              <a href="#" >{el.type}</a>
              <span className="d-none">{el.price}</span>
            </li>
          })}
        </ul>

        <div className="row justify-content-between">
          <div className="col-3">
          </div>
          <div className="col-3 text-right">
            <button 
            className="aligh-right btn-primary btn mt-4"
            onClick={this.props.serviceNext}>Next</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Services;
