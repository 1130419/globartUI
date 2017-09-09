import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Sell extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <div class="dropdown show">
                            <a class="btn btn-secondary dropdown-toggle" href="https://example.com" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Dropdown link
                    </a>

                            <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                <a class="dropdown-item" href="#">Action</a>
                                <a class="dropdown-item" href="#">Another action</a>
                                <a class="dropdown-item" href="#">Something else here</a>
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="startDate">Start Date of transaction</label>
                        <input type="date" classNameName="form-control" id="startDate" placeholder="Start Date"></input>
                    </div>
                    <div className="form-group">
                        <label for="endDate">End Date of transaction</label>
                        <input type="date" className="form-control" id="endDate" placeholder="End Date"></input>
                    </div>
                    <div className="form-check">
                        <label for="price">Price</label>
                        <input type="date" className="form-control" id="price" placeholder="Pricing"></input>
                    </div>
                    <div className="form-check">
                        <label for="price">Price</label>
                        <div className="input-group">
                            <span className="input-group-addon">$</span>
                            <input type="text" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                        </div>
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Sell;