import React, { Component } from 'react';
import './dealsForm.css';
import api from '../../dataStore/stubAPI';

export default class Form extends Component {
    state = { dishName: '', restName: '', price: '',phone: '', picture: ''};

    handleDishNameChange = (e) =>  this.setState({dishName: e.target.value});
    handleRestNameChange = (e) =>  this.setState({restName: e.target.value});
    handlePriceChange = (e) => this.setState({price: e.target.value});
    handlePhoneChange = (e) =>  this.setState({phone: e.target.value});
    handlePicChange = (e) => this.setState({picture: e.target.value});

    handleSubmit = (e) => {
        e.preventDefault();
        api.add( this.state.dishName, this.state.restName, this.state.price, this.state.phone, this.state.picture)
        console.log("submitted")
        this.setState({ dishName: 'hello', restName:'', price: '', phone:'', picture: ''})
    }

    render() {
        return (
        <form  className="form bg-dark text-light">
            <h3>Add a deal</h3>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Dish Name"
                value={this.state.dishName}
                onChange={ this.handleDishNameChange }
                ></input>
            </div>
            <div className="form-group">
              <input type="text"
                className="form-control"
                placeholder="Restaurant Name"
                value={this.state.restName}
                onChange={ this.handleRestNameChange }
                ></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Price"
                value={this.state.price}
                onChange={ this.handlePriceChange }
                ></input>
            </div>
            <div className="form-group">
                <input type="text"
                  className="form-control"
                placeholder="Phone"
                value={this.state.phone}
                onChange={ this.handlePhoneChange }
                ></input>
            </div>
            <div className="form-group">
                <input type="file"
                  className="form-control"
                placeholder="Add Image"
                value={this.state.picture}
                onChange={ this.handlePicChange }
                ></input>
            </div>
            <button type="submit" 
            className="btn btn-primary" 
            onClick={this.handleSubmit}>Add</button>
        </form>
        );
    }
}