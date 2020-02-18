import React, { Component } from 'react';
import ServicesData from './ServicesData.json';
import Services from './Services';
import SelectedList from './SelectedList';
import AddOn from './Add_on';
import Stylish from './Stylish';
import DateTime from './Date_time';
import BookingDetails from './BookingDetails';
import Confirmation from './Confirmation'
import '../styles.css';

class Wrapper extends Component {
  constructor() {
    super();
    this.state = {
      userName: 'Zuha',
      title: 'oxotel',
      data: ServicesData.data,
      selectedData: {
        "services": [],
        "addon": [],
        "stylish": [],
        "date": '',
        "time": ''
      },
      date: new Date(),
      dateSelected: false,
      timeSelected: false,
      serviceStage: true,
      BookingDetails: false,
      thankYouScreen: false,

      sumTotal: '',

      //Services levels
      serviceStep: true,
      addonStep: false,
      stylishStep: false,
      datetimeStep: false,
    };
    this.selectedService = this.selectedService.bind(this);
    this.selectedAddOn = this.selectedAddOn.bind(this);
    this.selectedStylish = this.selectedStylish.bind(this);
    this.selectedTime = this.selectedTime.bind(this);
    this.delete = this.delete.bind(this);
  }

  delete(index) {

    const services = this.state.selectedData.services;
    if (services.indexOf(index) > -1) {
      services.splice(services.indexOf(index), 1);
      this.setState({
        selectedData: {
          "services": services,
          "addon": this.state.selectedData.addon,
          "stylish": this.state.selectedData.stylish,
          "date": this.state.selectedData.date,
          "time": this.state.selectedData.time
        }
      })
    }

    const addon = this.state.selectedData.addon;
    if (addon.indexOf(index) > -1) {
      addon.splice(addon.indexOf(index), 1);
      this.setState({
        selectedData: {
          "services": this.state.selectedData.services,
          "addon": addon,
          "stylish": this.state.selectedData.stylish,
          "date": this.state.selectedData.date,
          "time": this.state.selectedData.time
        }
      })
    }

    const stylish = this.state.selectedData.stylish;
    if (stylish.indexOf(index) > -1) {
      stylish.splice(stylish.indexOf(index), 1);
      this.setState({
        selectedData: {
          "services": this.state.selectedData.services,
          "addon": this.state.selectedData.addon,
          "stylish": stylish,
          "date": this.state.selectedData.date,
          "time": this.state.selectedData.time
        }
      })
    }

  }

  //services selection
  selectedService(i) {
    var allService = this.state.selectedData.services;
    if (allService.indexOf(i) === -1) {
      allService.push(i);
    } else if (allService.indexOf(i) > -1) {
      alert('"' + i.type + '"' + ' this service is already added');
    }
    this.setState({
      selectedData: {
        services: allService,
        addon: this.state.selectedData.addon,
        stylish: this.state.selectedData.stylish,
        date: this.state.selectedData.date,
        time: this.state.selectedData.time,
      }
    })
    
  }

  //Addon selection
  selectedAddOn(i) {
    var allAddOn = this.state.selectedData.addon;
    if (allAddOn.indexOf(i) === -1) {
      allAddOn.push(i);
    } else if (allAddOn.indexOf(i) > -1) {
      alert('"' + i.type + '"' + ' this add on is already added');
    }
    this.setState({
      selectedData: {
        services: this.state.selectedData.services,
        addon: allAddOn,
        stylish: this.state.selectedData.stylish,
        date: this.state.selectedData.date,
        time: this.state.selectedData.time,
      }
    })
    // console.log(this.state.selectedData.addOn)
  }

  //Stylish selection
  selectedStylish(i) {
    var allStylish = this.state.selectedData.stylish;
    if (allStylish.indexOf(i) === -1) {
      allStylish.push(i);
    } else if (allStylish.indexOf(i) > -1) {
      alert('"' + i.type + '"' + ' this add on is already added');
    }
    this.setState({
      selectedData: {
        services: this.state.selectedData.services,
        addon: this.state.selectedData.addon,
        stylish: allStylish,
        date: this.state.selectedData.date,
        time: this.state.selectedData.time,
      }
    })
    // console.log(this.state.selectedData.addOn)
  }

  //Date selection
  DateonChange = date => {
    var date = date.toLocaleDateString();
    // (value) => formatDate(value, 'MMMM YYYY');
    this.setState({
      dateSelected: true,
      selectedData: {
        services: this.state.selectedData.services,
        addon: this.state.selectedData.addon,
        stylish: this.state.selectedData.stylish,
        date: date,
        time: '',
      }
    })
  }

  //Time selection
  selectedTime(i) {
    this.setState({
      timeSelected: true,
      selectedData: {
        services: this.state.selectedData.services,
        addon: this.state.selectedData.addon,
        stylish: this.state.selectedData.stylish,
        date: this.state.selectedData.date,
        time: i,
      }
    })
  }

  serviceNext = (e) => {
    e.preventDefault();
    // alert('Services next')
    this.setState({
      title: 'Add On',
      serviceStep: false,
      addonStep: true
    })
  }

  addonNext = (e) => {
    e.preventDefault();
    // alert('AddOn next')
    this.setState({
      title: 'Taste',
      addonStep: false,
      stylishStep: true
    })
  }

  servicePrev = (e) => {
    e.preventDefault();
    // alert('Services prev')
    this.setState({
      title: 'oxotel',
      addonStep: false,
      serviceStep: true
    })
  }

  addonPrev = (e) => {
    e.preventDefault();
    // alert('Services prev')
    this.setState({
      title: 'Room',
      addonStep: true,
      stylishStep: false
    })
  }

  stylishNext = (e) => {
    e.preventDefault();
    // alert('Stylish next')
    this.setState({
      title: "Checkin's & Time",
      stylishStep: false,
      datetimeStep: true
    })
  }

  stylishPrev = (e) => {
    e.preventDefault();
    // alert('Stylish next')
    this.setState({
      title: 'Stylish',
      stylishStep: true,
      datetimeStep: false
    })
  }

  dtNext = (e) => {
    e.preventDefault();
    const ServicesTotal = this.state.selectedData.services.reduce((prev, next) => prev + next.price, 0);
    const AddOnTotal = this.state.selectedData.addon.reduce((prev, next) => prev + next.price, 0);
    const StylishTotal = this.state.selectedData.stylish.reduce((prev, next) => prev + next.price, 0);
    const sumTotal = ServicesTotal + AddOnTotal + StylishTotal;
    // alert('Card block')
    this.setState({
      stylishStep: false,
      serviceStage: false,
      BookingDetails: true,
      sumTotal: sumTotal
    })
  }

  backToServices = () => {
    this.setState({
      title: 'service',
      BookingDetails: false,
      serviceStage: true,
      serviceStep: true,
      addonStep: false,
      stylishStep: false,
      datetimeStep: false,
    })
  }

  thankYouScreen = () => {
    this.setState({
      thankYouScreen: true,
      BookingDetails: false
    })
  }

  render() {
    return (
      <div className="container">
        {this.state.serviceStage ?
          <div className="row">
            <div className="col-md-6 left_block pt-3 pb-3 mb-3">
              <h4 className="text-center">Your Bookings</h4>

              <SelectedList
                yService={this.state.selectedData.services}
                yAddOn={this.state.selectedData.addon}
                yStylish={this.state.selectedData.stylish}
                yDate={this.state.selectedData.date}
                yTime={this.state.selectedData.time}
                dateSelectedLi={this.state.dateSelected}
                delete={this.delete}
              />

            </div>
            <div className="col-md-6 right_block">

              <h3>Select your <span>{this.state.title}</span></h3>

              {
                this.state.serviceStep ?
                  <Services
                    services={this.state.data.services}
                    selectedService={this.selectedService}
                    serviceNext={this.serviceNext}
                    active={this.state.serviceActive}
                  />
                  : null
              }

              {
                this.state.addonStep ?
                  <AddOn
                    addon={this.state.data.addon}
                    selectedAddOn={this.selectedAddOn}
                    servicePrev={this.servicePrev}
                    addonNext={this.addonNext}
                  />
                  : null
              }

              {
                this.state.stylishStep ?
                  <Stylish
                    stylish={this.state.data.stylish}
                    selectedStylish={this.selectedStylish}
                    addonPrev={this.addonPrev}
                    stylishNext={this.stylishNext}
                  />
                  : null
              }

              {
                this.state.datetimeStep ?
                  <DateTime
                    onChange={this.DateonChange}
                    date={this.state.date}
                    timings={this.state.data.timings}
                    dateSelectedLi={this.state.dateSelected}
                    selectedTime={this.selectedTime}
                    activeTime={this.state.activeTime}
                    stylishPrev={this.stylishPrev}
                    dtNext={this.dtNext}
                    yTime={this.state.selectedData.time}
                  />
                  : null
              }

            </div>
          </div>
          : null
        }
        {this.state.BookingDetails ?
          <div>
            <div className="row justify-content-center">
              <div className="col-md-4">
                <BookingDetails
                  userName={this.state.userName}
                  yDate={this.state.selectedData.date}
                  yTime={this.state.selectedData.time}
                  yService={this.state.selectedData.services}
                  yAddOn={this.state.selectedData.addon}
                  sumTotal={this.state.sumTotal}
                  backToServices={this.backToServices}
                  thankYouScreen={this.thankYouScreen}
                />
              </div>
            </div>
          </div>
          : null
        }

        {this.state.thankYouScreen ?
          <Confirmation
            userName={this.state.userName}
          />
          : null
        }
      </div>
    );
  }
}

export default Wrapper;
