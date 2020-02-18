import React, { Component } from 'react';
//import '../style.css';

class Stylish extends Component {

  selectedStylish(j) {
    this.props.selectedStylish(j);
  }

  render() {
    return (
      <div className="">
        <ul className="list-group">
          {this.props.stylish.map((el, i) => {
            return <li 
              className="list-group-item list-group-item-action" 
              key={i}
              onClick={this.selectedStylish.bind(this, el)}
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
            onClick={this.props.addonPrev}>Prev</button>
          </div>
          <div className="col-3 text-right">
            <button 
            className="aligh-right btn-primary btn mt-4"
            onClick={this.props.stylishNext}>Next</button>
          </div>
        </div>

      </div>
    );
  }
}

export default Stylish;
