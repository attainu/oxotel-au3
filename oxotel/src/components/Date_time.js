import React, { Component } from 'react';
import Calendar from 'react-calendar';
//import Calendar from 'react-calendar/dist/entry.nostyle';
import '../styles.css';

class DateTime extends Component {
  selectedTime(i) {
    this.props.selectedTime(i);
  } 

  render() {
    return (
      <div className="">
        <div className="pb-3">
        <Calendar
          onChange={this.props.onChange}
          value={this.props.date}
        />
        </div>
        
        {
          this.props.dateSelectedLi
          ? <div className="time-list">
            <ul>
              {this.props.timings.map((el, i) => {
                return <li 
                  key={i} 
                  onClick={this.selectedTime.bind(this, el)}>
                  <a href="#"> {el}</a>
                </li>
              })}
            </ul>
          </div>
          : null
        }

        <div className="row justify-content-between">
          <div className="col-3">
            <button
              className="aligh-right btn-primary btn mt-4"
              onClick={this.props.stylishPrev}>Prev</button>
          </div>
          <div className="col-3 text-right">
            <button
              className="aligh-right btn-primary btn mt-4"
              disabled={!this.props.yTime}
              onClick={this.props.dtNext}>Next</button>
          </div>
        </div>

      </div>
    );
  }
}

export default DateTime;
