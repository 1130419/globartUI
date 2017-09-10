import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';

class Sell extends Component {

    constructor (props) {
        super(props)
        this.state = {
            typeTransaction: "",
            startDate: moment(),
            endDate: moment(),
            typeArt: "",
        };
        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleSelectionChange = this.handleSelectionChange.bind(this);
        
      }

      submitForm()
      {
          alert("Submitted to API OP");
      }
    
      handleDateChange(id, date) {
        this.setState({
          startDate: id === "startDate" ? date : this.state.starDate,
          endDate: id === "endDate"? date :  this.state.endDate
        });
      }

      handleSelectionChange(id, event) {
        this.setState(
            {
                typeTransaction: id === "typeTransaction" && event.target.value,
                typeArt: id === "typeArt" && event.target.value
            });
      }

    render() {
        return (
            <div className="container" id="sell-form">
                <form>
                    <div className="form-group">
                        <div className="form-group">
                            <label htmlFor="exampleFormControlSelect1">Type of transaction</label>
                            <select className="form-control" id="exampleFormControlSelect1">
                                <option></option>
                                <option>Sell</option>
                                <option>Loan</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="startDate">Start Date of transaction</label>
                        <DatePicker
                            selected={this.state.startDate}
                            onChange={(date) => this.handleDateChange("startDate", date)}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="endDate">End Date of transaction</label>
                        <DatePicker
                            selected={this.state.endDate}
                            onChange={(date) => this.handleDateChange("endDate", date)}
                        />
                    </div>
                    <div className="form-check">
                        <label htmlFor="price">Price</label>
                        <div className="input-group">
                            <input type="number" id="price" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                            <span className="input-group-addon">€</span>
                        </div>
                    </div>
                    <h1>Details of Piece of Art</h1>
                    <div className="form-group">
                        <label htmlFor="nameArt">Name of Piece of Art</label>
                        <input type="text" className="form-control" id="nameArt" placeholder="Name of Piece of Art"></input>
                    </div>
                    <div className="form-group">
                    <div className="form-group">
                        <label htmlFor="typeArt">Type of transaction</label>
                        <select className="form-control" selected = {this.state.typeTransaction} onChange={(event) => this.handleSelectionChange("typeArt", event)} id="typeTransaction">
                            <option></option>
                            <option>Statue</option>
                            <option>Paint</option>
                        </select>
                    </div>
                </div>
                    <div className="form-group">
                        <label htmlFor="imageArt">Main Image</label>
                        <input type="fileUpload" className="form-control" id="imageArt" placeholder="Main Image"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="descrArt">Description</label>
                        <textarea className="form-control" id="descrArt" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label htmlFor="authorArt">Author</label>
                        <input type="text" className="form-control" id="authorArt" placeholder="Author"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="yearArt">Year</label>
                        <input type="number" className="form-control" id="yearArt" placeholder="Year"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="periodArt">Period</label>
                        <input type="text" className="form-control" id="periodArt" placeholder="Period"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="dimArt">Dimensions</label>
                        <input type="text" className="form-control" id="dimArt" placeholder="Year"></input>
                    </div>
                    <div className="form-group">
                        <label htmlFor="estimatedPriceArt">Estimated Price</label>
                        <input type="text" className="form-control" id="estimatedPriceArt" placeholder="Estimated Price"></input>
                    </div>
                    <button type="button" onClick={() => this.submitForm()} className="btn btn-primary pull-right">Submit</button>
                </form>
            </div>
        );
    }
}

export default Sell;