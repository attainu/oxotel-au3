import React, { Component } from 'react';
import '../styles.css';

class SelectedList extends Component {
  delete(i){
       this.props.delete(i);
   }

  render() {
    return (
      <div className="selectedlist">
        <ul className="list-group">
          {this.props.yService.length > 0 &&
            <h6>Oxotel:</h6>
          }
          {this.props.yService.map((el, i) => {
            return <li
              className="list-group-item list-group-item-action"
              key={i}
            >
              <a href="#"> 
                {el.type} 
                <span 
                  className="close" 
                  onClick={this.delete.bind(this, el)}>&times;
                </span>
              </a>
            </li>
          })}

          {this.props.yAddOn.length > 0 &&
            <h6>Add On:</h6>
          }
          {this.props.yAddOn.map((el, i) => {
            return <li
              className="list-group-item list-group-item-action"
              key={i}
            >
              <a href="#"> 
                {el.type}
                <span 
                  className="close" 
                  onClick={this.delete.bind(this, el)}>&times;
                </span>
              </a>
            </li>
          })}

          {this.props.yStylish.length > 0 &&
            <h6>Taste Preference:</h6>
          }
          {this.props.yStylish.map((el, i) => {
            return <li
              className="list-group-item list-group-item-action"
              key={i}
            >
              <a href="#"> 
                {el.type}
                <span 
                  className="close" 
                  onClick={this.delete.bind(this, el)}>&times;
                </span>
              </a>
            </li>
          })}

          {this.props.yDate.length > 0 &&
            <h6>Date & Time:</h6>
          }
          {
            this.props.dateSelectedLi
              ? <li className="list-group-item list-group-item-action">
                <a href="#">{this.props.yDate}</a>
              </li>
              : null
          }

          {
            this.props.yTime.length > 0 &&
            <li className="list-group-item list-group-item-action">
              <a href="#">{this.props.yTime}</a>
            </li>
          }

        </ul>

      </div>
    );
  }
}

export default SelectedList;
