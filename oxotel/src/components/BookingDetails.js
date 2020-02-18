import React, { Component } from 'react';
import '../styles.css';

class BookingDetails extends Component {
  render() {
    return (
      <div>
        <div className="card">
          <div className="text-center user-data">
            <img className="card-img-top rounded-circle w200" src="https://mcmprodaaas.s3.amazonaws.com/s3fs-public/styles/adaptive/public/profile-placeholder.png?itok=FCDqaoiV"
              alt="User Image"
            />
            <span>{this.props.userName}</span>
          </div>
          {this.props.yService.length == 0 &&
            <div id="no-defects">No oxotel services selected</div>
          }
          {this.props.yService.length > 0 &&
            <div>
              <div className="card-body">
                <h4 className="card-title">
                  {this.props.yDate}
                </h4>
                <span>at {this.props.yTime}</span>
              </div>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <b>{this.props.yService[0].type}</b> <br />
                  {this.props.yAddOn[0].type}
                </li>
                <li className="list-group-item">Total price ₹: {this.props.sumTotal}</li>
              </ul>
            </div>
          }
          <div className="card-body">
            <button 
              type="button" 
              class="btn btn-secondary btn-lg btn-block"
              onClick={this.props.backToServices}>
              Edit
            </button>
            <button 
              type="button" 
              class="btn btn-primary btn-lg btn-block"
              onClick={this.props.thankYouScreen}>
              Confirm Booking
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default BookingDetails;
