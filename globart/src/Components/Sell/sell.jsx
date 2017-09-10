import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Sell extends Component {
    render() {
        return (
            <div className="container">
                <form>
                    <div className="form-group">
                        <div class="form-group">
                            <label for="exampleFormControlSelect1">Type of transaction</label>
                            <select class="form-control" id="exampleFormControlSelect1">
                                <option></option>
                                <option>Sell</option>
                                <option>Loan</option>
                            </select>
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
                        <div className="input-group">
                            <input type="number" id="price" className="form-control" aria-label="Amount (to the nearest dollar)"></input>
                            <span className="input-group-addon">€</span>
                        </div>
                    </div>
                    <h1>Details of Piece of Art</h1>
                    <div className="form-group">
                        <label for="nameArt">Name of Piece of Art</label>
                        <input type="text" className="form-control" id="nameArt" placeholder="Name of Piece of Art"></input>
                    </div>
                    <div className="form-group">
                        <label for="typeArt">Type of Piece of Art</label>
                        <input type="text" className="form-control" id="typeArt" placeholder="Type of Piece of Art"></input>
                    </div>
                    <div className="form-group">
                        <label for="imageArt">Main Image</label>
                        <input type="fileUpload" className="form-control" id="imageArt" placeholder="Main Image"></input>
                    </div>
                    <div className="form-group">
                        <label for="descrArt">Description</label>
                        <textarea className="form-control" id="descrArt" rows="3"></textarea>
                    </div>
                    <div className="form-group">
                        <label for="authorArt">Author</label>
                        <input type="text" className="form-control" id="authorArt" placeholder="Author"></input>
                    </div>
                    <div className="form-group">
                        <label for="yearArt">Year</label>
                        <input type="number" className="form-control" id="yearArt" placeholder="Year"></input>
                    </div>
                    <div className="form-group">
                        <label for="periodArt">Period</label>
                        <input type="text" className="form-control" id="periodArt" placeholder="Period"></input>
                    </div>
                    <div className="form-group">
                        <label for="dimArt">Dimensions</label>
                        <input type="text" className="form-control" id="dimArt" placeholder="Year"></input>
                    </div>
                    <div className="form-group">
                        <label for="estimatedPriceArt">Estimated Price</label>
                        <input type="text" className="form-control" id="estimatedPriceArt" placeholder="Estimated Price"></input>
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        );
    }
}

export default Sell;